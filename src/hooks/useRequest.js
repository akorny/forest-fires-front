import { useState, useEffect, useMemo } from "react"

const useRequest = ({ method, url, urlParams }) => {
    const [error, setError] = useState(false)
    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(false)

    const requestUrl = useMemo(() => {
        if (url) {
            if (urlParams) {
                return (
                    url +
                    "?" +
                    Object.keys(urlParams)
                        .map((key) => key + "=" + urlParams[key])
                        .join("&"))
            } else {
                return url
            }
        }
        else {
            return null
        }
    }, [urlParams, url])
    

    useEffect(() => {
        if (requestUrl) {
            let rq = new XMLHttpRequest()
            rq.onloadstart = () => {
                setLoading(true)
            }
            rq.onloadend = () => {
                setLoading(false)
            }
            rq.onerror = (event) => {
                setError(true)
            }
            rq.ontimeout = (event) => {
                setError(true)
            }
            rq.onload = (event) => {
                try {
                    setData(JSON.parse(rq.response))
                }
                catch (SyntaxError) {
                    setData(rq.response)
                }
            }
            rq.open(method, requestUrl, true)
            rq.send()
        }
    }, [method, requestUrl])

    return [ data, loading, error ]
}

export default useRequest