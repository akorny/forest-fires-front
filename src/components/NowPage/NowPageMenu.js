import React from "react"
import { Link } from "react-router-dom"

const getMethodDescription = (method) => {
    switch (method) {
        case "jac":
            return `Žakāra indeksa (JAC) metode ir jauna metode, kas potenciāli var tikt 
            izmantota meža ugunsgrēku ietekmējošo faktoru svara vērtību noteikšanai un pārbaudei. Žakāra 
            indekss, ko dēvē arī par Žakāra līdzības koeficientu, ir statistisks rādītājs, ko izmanto, lai 
            izprastu līdzības starp izlašu kopām.`
        case "ahp":
            return `Analītiskās hierarhijas procesa  (AHP)  metode  ir  viena  no  visbiežāk  izmantotajām 
            metodēm  pasaulē  meža  ugunsbīstamības  ietekmējošo  faktoru  svara  vērtību  noteikšanā  kā 
            lēmumu  pieņemšanas  atbalsta  sistēma.  AHP  metodes  noteiktās  svara  vērtības  balstītas  uz 
            ekspertu subjektīvu faktoru svara vērtību novērtējumu, kas transformēts kvantitatīvos lielumos, 
            attēlojot  objektīvo  realitāti.`
        case "mlc":
            return `
            Maximum likelihood classification (MLC) algoritma metode ir viena no populārākajām 
            klasifikācijas metodēm Zemes tālizpētē. Metodes līdzšinējais pielietojums mežsaimniecībā ir 
            bijis ugunsgrēku identificēšana satelītattēlos.
            `
        default:
            return ""
    }
}


const NowPageMenu = ({
    layer,
    setLayer,
    method,
    setMethod,
    selectedTime,
    indexFrom,
    indexTo,
    index,
    setIndex,
    period,
    setPeriod,
    download
}) => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <label htmlFor="layer">Slānis</label>
                <select
                    id="layer"
                    className="form-select"
                    value={layer}
                    onChange={setLayer}
                >
                    <option value="total">Kopēja bīstamība</option>
                    <option value="ignition">
                        Ugunsgrēka izcēlšanās bīstamība
                    </option>
                    <option value="spread">
                        Ugunsgrēka izplatības bīstamība
                    </option>
                </select>
            </li>
            <li className="list-group-item">
                <label htmlFor="method">Metode</label>
                <select
                    id="method"
                    className="form-select"
                    value={method}
                    onChange={setMethod}
                >
                    <option value="jac">JAC</option>
                    <option value="ahp">AHP</option>
                    <option value="mlc">MLC</option>
                </select>
            </li>
            <li className="list-group-item">
                <label htmlFor="index" className="form-label">
                    Datums un laiks: {selectedTime}
                </label>
                <input
                    type="range"
                    className="form-range"
                    id="index"
                    min={indexFrom}
                    max={indexTo}
                    step={1}
                    value={index}
                    onChange={setIndex}
                />
            </li>
            <li className="list-group-item">
                <label htmlFor="period" className="form-label">
                    Periods
                </label>
                <select
                    id="period"
                    className="form-select"
                    value={period}
                    onChange={setPeriod}
                >
                    <option value="1h">pēdējā 1h</option>
                    <option value="4h">pēdējās 4h</option>
                    <option value="12h">pēdējās 12h</option>
                    <option value="24h">pēdējās 24h</option>
                    <option value="2d">pēdējās 2d</option>
                    <option value="7d">pēdējās 7d</option>
                </select>
            </li>
            <li className="list-group-item">
                <div>
                    <span style={{ color: "rgba(256, 0, 0, 0.5)" }}>&#9632;</span> - 
                    Augsts risks
                </div>
                <div>
                    <span style={{ color: "rgba(256, 256, 0, 0.5)" }}>&#9632;</span> - 
                    Vidējs risks
                </div>
                <div>
                    <span style={{ color: "rgba(0, 128, 0, 0.5)" }}>&#9632;</span> - 
                    Zems risks
                </div>
            </li>
            <li className="list-group-item" style={{ textAlign: "justify" }}>
                <div>
                    {getMethodDescription(method)}{" "}
                    <Link to={`/faq?q=${method}`}>Sīkāk</Link>
                </div>
                <div>
                    <a href="/faq?q=aprekini">Kā bīstamība tiek aprēķināta?</a>
                </div>
                <div>
                    <a href="/faq?q=viss-sarkans">Kāpēc viss ir tik sarkans?</a>
                </div>
            </li>
            {   
                download
                ?
                    (<li className="list-group-item">
                        {download}
                    </li>)
                :
                    null
            }
        </ul>
    )
}

export default NowPageMenu
