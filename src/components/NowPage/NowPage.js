import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LoaderCenter, MapView } from ".."
import { useRequest } from "../../hooks"
import NowPageMenu from "./NowPageMenu"

const getNowDate = () => {
    return Math.floor(Date.now() / 1000)
}

const host = ""

const fromDelta = {
    "1h": 3600,
    "4h": 4 * 3600,
    "12h": 12 * 3600,
    "24h": 24 * 3600,
    "2d": 2 * 86400,
    "7d": 7 * 86400,
}

const NowPage = () => {
    const [from, setFrom] = useState(getNowDate() - 3600)
    const [to, setTo] = useState(getNowDate())
    const [index, setIndex] = useState(0)
    const [layer, setLayer] = useState("total")
    const [method, setMethod] = useState("jac")
    const [period, setPeriod] = useState("1h")

    const [data, loading, error] = useRequest({
        method: "GET",
        url: host + "/api/get/period",
        urlParams: {
            from,
            to,
        },
    })

    useEffect(() => {
        if (data) setIndex(data.layersets.length - 1)
    }, [data])

    const handlePeriodChange = (ev) => {
        const val = ev.target.value
        const now = Math.floor(Date.now() / 1000)
        setFrom(now - fromDelta[val])
        setTo(now)
        setPeriod(val)
    }

    const getGeoJsonUrl = () => {
        if (layer && data && method) {
            if (data.layersets.length === 0) {
                return "no-layers"
            }

            const layers = data.layersets[parseInt(index)]["layers"][layer]

            const _layer = layers.filter((val) => {
                return val.method === method
            })

            if (_layer.length > 0) {
                return [host + _layer[0].geojson_url, host + _layer[0].shp_url]
            } else {
                return "not-found"
            }
        } else {
            return null
        }
    }

    const getSelectedTime = () => {
        if (data.layersets.length > 0) {
            let date = new Date(data.layersets[parseInt(index)].date)
            date.setHours(date.getHours() + 2)
            return date.toLocaleString("lv")
        } else {
            return "nav sl????u"
        }
    }

    const urls = getGeoJsonUrl()
    const getMap = () => {
        switch (urls) {
            case "no-layers":
                return <div>Nav atrasti sl????i ????m laika periodam</div>
            case "not-found":
                return (
                    <div>Slanis ar izv??l??tajiem parametriem nav atrasts!</div>
                )
            default:
                return <MapView geojsonUrl={urls[0]} />
        }
    }
    const getDownloadButton = () => {
        if (urls !== "no-layers" && urls !== "not-found") {
            return (
                <a href={urls[1]} download className="btn btn-primary">
                    Lejupl??d??t .shp sl??ni
                </a>
            )
        }

        return null
    }

    if (loading) return <LoaderCenter />

    if (error) return <div>Notikusi k????da...</div>

    if (data)
        return (
            <div className="row">
                <div className="col-md-4">
                    <NowPageMenu
                        setPeriodFrom={setFrom}
                        setPeriodTo={setTo}
                        indexFrom={0}
                        indexTo={data.layersets.length - 1}
                        index={index}
                        setIndex={(ev) => setIndex(ev.target.value)}
                        layer={layer}
                        setLayer={(ev) => setLayer(ev.target.value)}
                        method={method}
                        setMethod={(ev) => setMethod(ev.target.value)}
                        selectedTime={getSelectedTime()}
                        period={period}
                        setPeriod={handlePeriodChange}
                        download={getDownloadButton()}
                    />
                </div>
                <div className="col-md-8">
                    <div className="alert alert-info">
                        J??iev??ro, ka ugunsgr??ka risks ??eit nenoz??m?? varb??t??bu,
                        k?? konkr??taj?? viet?? un laik?? b??s ugunsgr??ks, bet gan cik
                        labvel??gi ir apst??k??i ugunsgr??ka izcel??anai un
                        izplat??bai ??aj?? teritorij??.{" "}
                        <Link to="/faq?q=viss-sarkans">S??k??k</Link>
                    </div>
                    {getMap()}
                </div>
            </div>
        )

    return <div></div>
}

export default NowPage
