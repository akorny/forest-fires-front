import React from "react"

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
