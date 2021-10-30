import React from "react"

const Faq = () => {
    return (
        <div>
            <div>
                <h1>
                    Kas ir RISK?
                </h1>
                <p>
                    <b>RISK</b> - mežu ugunsgrēku kopējā riska vērtība. Katram ugunsgrēku ietekmējošam
                    faktoram piešķirta skaitliska vienība (svars), kas raksturo tā ietekmi uz meža
                    ugunsgrēku izcelšanos vai izplatīšanos.
                    
                </p>
            </div>
            <div>
                <h1>
                    Kas ir JAC?
                </h1>
                <p>
                    Žakāra indeksa (JAC) metode ir jauna metode, kas potenciāli var tikt
                    izmantota meža ugunsgrēku ietekmējošo faktoru svara vērtību noteikšanai un pārbaudei. Žakāra
                    indekss, ko dēvē arī par Žakāra līdzības koeficientu, ir statistisks rādītājs, ko izmanto, lai
                    izprastu līdzības starp izlašu kopām.<br/>
                    Šajā metodē izmantots princips, kurā visi ugunsgrēku ietekmējošie faktori tika
                    novērtēti kā vienlīdzīgi – izcelšanās faktoriem sākotnējā svara vērtība ir 8 
                    (deviņi faktori), izplatīšanās faktoriem sākotnējā svara vērtība 6 (divpadsmit 
                    faktori), katrai no riska situācijām veidojot pusi no kopējā ugunsgrēku riska. 
                    Lai iegūtu faktora svara vērtību, konkrētā faktora sākotnējā svara vērtība tiek 
                    paaugstināta par 1 vienību, rezultātā iegūstot Žakāra indeksa izmaiņas augsta riska
                    klases vērtībā ugunsgrēku vēsturiskajās teritorijās. Tas veicams katram faktoram
                    individuāli. Iegūtā Žakāra indeksa izmaiņas vērtība tiek piešķirta kā faktora 
                    svara vērtība. 
                </p>
            </div>
            <div>
                <h1>
                    Kas ir AHP?
                </h1>
                <p>
                    Analītiskās hierarhijas procesa (AHP) metode ir viena no visbiežāk izmantotajām
                    metodēm pasaulē meža ugunsbīstamības ietekmējošo faktoru svara vērtību noteikšanā kā
                    lēmumu pieņemšanas atbalsta sistēma. AHP metodes noteiktās svara vērtības balstītas uz
                    ekspertu subjektīvu faktoru svara vērtību novērtējumu, kas transformēts kvantitatīvos lielumos,
                    attēlojot objektīvo realitāti.<br/>
                    Faktori darbojas kā kritēriji, starp kuriem nosaka prioritāro
                    faktoru un reižu skaitu, par cik tas ir nozīmīgāks meža ugunsgrēku riska ietekmēšanā nekā
                    salīdzinošais faktors.
                </p>
            </div>
            <div>
                <h1>
                    Kas ir MLC?
                </h1>
                <p>
                    Maximum likelihood classification (MLC) algoritma metode ir viena no populārākajām
                    klasifikācijas metodēm Zemes tālizpētē. Metodes līdzšinējais pielietojums mežsaimniecībā ir
                    bijis ugunsgrēku identificēšana satelītattēlos. Šajā pētījumā mākslīgā intelekta prognozēšanas
                    rīks izmantots faktoru svara vērtību noteikšanā.
                </p>
            </div>
        </div>
    )
}
    
export default Faq
    