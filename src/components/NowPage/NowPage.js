import React, { useState } from "react"
import { LoaderCenter, MapView } from ".."
import { useRequest } from "../../hooks"
import NowPageMenu from "./NowPageMenu"

const getNowDate = () => {
    return Math.floor(Date.now() / 1000)
}

const host = ""

const NowPage = () => {
    const [from, setFrom] = useState(getNowDate() - 86400 * 2)
    const [to, setTo] = useState(getNowDate())
    const [index, setIndex] = useState(0)
    const [layer, setLayer] = useState("ignition")
    const [method, setMethod] = useState("jac")

    const [data, loading, error] = useRequest({
        method: "GET",
        url: host + "/api/get/period",
        urlParams: {
            from,
            to,
        },
    })

    if (loading) return <LoaderCenter />

    if (error) return <div>Notikusi kļūda...</div>

    const getGeoJsonUrl = () => {
        if (layer && data && method) {
            console.log(layer, method)
            if (data.layersets.length === 0) {
                return "no-layers"
            }

            const layers = data.layersets[parseInt(index)]["layers"][layer]            

            const _layer = layers.filter((val) => {
                console.log(val)
                return val.method === method
            })

            if (_layer.length > 0) {
                return host + _layer[0].geojson_url
            } else {
                return "not-found"
            }
        } else {
            return null
        }
    }

    const getSelectedTime = () => {
        if (data.layersets.length > 0) {
            return new Date(data.layersets[parseInt(index)].date).toLocaleString("lv")
        }
        else {
            return "nav slāņu"
        }
       
    }

    const geojsonurl = getGeoJsonUrl()
    const getMap = () => {
        switch (geojsonurl) {
            case "no-layers":
                return <div>Nav atrasti slāņi šīm laika periodam</div>
            case "not-found":
                return (
                    <div>Slanis ar izvēlētajiem parametriem nav atrasts!</div>
                )
            default:
                return <MapView geojsonUrl={geojsonurl} />
        }
    }
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
                    />
                </div>
                <div className="col-md-8">{getMap()}</div>
            </div>
        )

    return <div></div>
}

export default NowPage
