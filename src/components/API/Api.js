import React from "react"
import ReactJson from 'react-json-view'

const jsonObject = JSON.parse(`
{"to": "2021-10-27T09:19:51", "from": "2021-10-26T09:19:51", "layersets": [{"date": "2021-10-26T18:06:36.773377", "layers": {"ignition": [{"method": "jac", "geojson_url": "/api/storage/json/55488599d6fce9611153.json", "shp_url": "/api/storage/shp/55488599d6fce9611153.zip"}, {"method": "ahp", "geojson_url": "/api/storage/json/b858297190fbadf523fa.json", "shp_url": "/api/storage/shp/b858297190fbadf523fa.zip"}, {"method": "mlc", "geojson_url": "/api/storage/json/2f250a3c4acd23540da0.json", "shp_url": "/api/storage/shp/2f250a3c4acd23540da0.zip"}], "spread": [{"method": "jac", "geojson_url": "/api/storage/json/9ede6e0a2ff2405c1cf2.json", "shp_url": "/api/storage/shp/9ede6e0a2ff2405c1cf2.zip"}, {"method": "ahp", "geojson_url": "/api/storage/json/3c95ccf9881d91c3f320.json", "shp_url": "/api/storage/shp/3c95ccf9881d91c3f320.zip"}, {"method": "mlc", "geojson_url": "/api/storage/json/ddeb388a1dc9b562304a.json", "shp_url": "/api/storage/shp/ddeb388a1dc9b562304a.zip"}], "total": [{"method": "jac", "geojson_url": "/api/storage/json/5be91ed205f2ea6ae387.json", "shp_url": "/api/storage/shp/5be91ed205f2ea6ae387.zip"}, {"method": "ahp", "geojson_url": "/api/storage/json/f3f84b9b2c821e2a011d.json", "shp_url": "/api/storage/shp/f3f84b9b2c821e2a011d.zip"}, {"method": "mlc", "geojson_url": "/api/storage/json/b4e16a00106cbf5f03d5.json", "shp_url": "/api/storage/shp/b4e16a00106cbf5f03d5.zip"}]}}], "code": 200, "message": "OK"}
`)

const Api = () => {
    return (
        <div className="row">
            <div className="col-12">
                <h4>/api/get/period</h4>
                <p>
                    Atgriež slāņu sarakstu par noteikto periodu.
                </p>
                <p>
                    <ul>
                        <li>
                            <i>Pieprasījuma metode: <b>GET</b></i>
                        </li>
                        <li>
                            <i>URL parametri</i>:
                            <ul>
                                <li>
                                    <b>from</b> (vesels skaitlis) - minimālais slāņa izveidošanas datums <i>UNIX timestamp</i> formatā;
                                </li>
                                <li>
                                    <b>to</b> (vesels skaitlis) - maksimālais slāņa izveidošanas datums <i>UNIX timestamp</i> formatā.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <i>Response status codes:</i>
                            <ul>
                                <li>200 - OK</li>
                                <li>400 - Bad request</li>
                            </ul>
                        </li>
                        <li>
                            <i>Response MIME type: </i>
                            <b>application/json</b>
                        </li>
                        <li>
                            <i>Pieprasījuma URL piemērs: </i>
                            <b><a href="https://www.tea-spill-keyboard.id.lv/api/get/period?from=1635322507&to=1635326107">/api/get/period?from=1635322507&to=1635326107</a></b>
                        </li>
                    </ul>
                </p>
                <p>
                    <h5>Atbildes piemērs:</h5>
                    <ReactJson src={jsonObject} />
                </p>
            </div>
        </div>
    )
}

export default Api