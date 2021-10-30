import React from "react"

const Faq = () => {
    return (
        <div>
            <h1>
                Kas ir RISK?
            </h1>
            <p>
                <b>RISK</b> - mežu ugunsgrēku kopējā riska vērtība. Katram ugunsgrēku ietekmējošam
                faktoram piešķirta skaitliska vienība (svars), kas raksturo tā ietekmi uz meža
                ugunsgrēku izcelšanos vai izplatīšanos.<br/>
                <br/>
                Katram meža punktam uz kartes ir aprēķināts ugunsgrēka izplatības vai izcelšanas risks pēc šādam formulām:<br/>
                IZC = ∑ W<sub>izc</sub> • RG;<br/>
                kur: <br/>
                IZC – mežu ugunsgrēku izcelšanās riska vērtība; <br/>
                Wizc – mežu ugunsgrēku izcelšanās faktora svara vērtība; <br/>
                RG – faktora riska grupa jeb reklasificētā rastra vērtība. <br/>
                <br/>
                IZP = ∑ W<sub>izp</sub> • RG;<br/>
                kur: <br/>
                IZP – mežu ugunsgrēku izplatīšanās riska vērtība; <br/>
                Wizp – mežu ugunsgrēku izplatīšanās faktora svara vērtība; <br/>
                RG – faktora riska grupa jeb reklasificētā rastra vērtība.<br/>
                <br/>
                Kopējais risks ir aprēķināts pēc formulas:<br/>
                RISK = IZC + IZP;<br/>
                kur:<br/>
                RISK - mežu ugunsgrēku kopējā riska vērtība;<br/>
                IZC – mežu ugunsgrēku izcelšanās riska vērtība;<br/>
                IZP – mežu ugunsgrēku izplatīšanās riska vērtība.<br/>
                <br/>
                Jāievēro, ka ugunsgrēka risks šeit nenozīmē varbūtību, kā konkrētajā vietā un laikā būs ugunsgrēks, bet relatīvo izcēlšanās vai izplatības bīstamību.
            </p>
        </div>
    )
}
    
export default Faq
    