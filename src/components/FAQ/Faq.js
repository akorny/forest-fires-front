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
                Jāievēro, ka ugunsgrēka risks šeit nenozīmē varbūtību, kā konkrētajā vietā un laikā būs ugunsgrēks, bet relatīvo izcēlšanās vai izplatības bīstamību.<br/>
                Iegūstot riska vērtību, ir secināts, vai risks ir zems, vidējs vai augsts, un atbilstoši nokrāsots punkts uz kartes, attiecīgi tabulai:
                <img src="risk_table.png"/>
            </p>
            <h1>
                Izcēlšanās un izplatības faktori
            </h1>
            <p>
                Meža ugunsgrēku izcēlšanās un izplatības faktorus var iedalīt šādās grupās:
                <ul>
                    <li>
                        <ul>
                            laikapstākļu faktori:
                                <li>
                                    gaisa temperatūra;
                                </li>
                                <li>
                                    nokrišņu daudzums;
                                </li>
                                <li>
                                    karsto dienu skaits;
                                </li>
                                <li>
                                    vēja ātrums.
                                </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            meža vides faktori:
                                <li>
                                    meža tips.
                                </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            antropogēnie faktori:
                                <li>
                                    vēsturisko ugunsgrēku skaits;
                                </li>
                                <li>
                                    attālums no dzelzceļa;
                                </li>
                                <li>
                                    attālums no autoceļa;
                                </li>
                                <li>
                                    attālums no kūdras iegūves vietas;
                                </li>
                                <li>
                                    attālums no stigas;
                                </li>
                                <li>
                                    attālums no mineralizētas joslas.
                                </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            topogrāfiskie faktori:
                                <li>
                                    nogāžu virziens;
                                </li>
                                <li>
                                    nogāžu slīpums.
                                </li>
                        </ul>
                    </li>
                </ul> 
            </p>
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
            <div>
                <h1>
                    Teorētisks modelēšanas rīks, vai close-to-real time meža ugunsgrēka bīstabības indikātors?
                </h1>
                <p>
                    Lai gan šķiet, ka mūsu rīks ir stipri teorētisks modelis, tomēr tā nav. 
                    Laikapstākļu dati tiek ņemti reāllaikā, kas nozīmē, ka RISK atšķirsies atkarībā 
                    no tiem. Atzīstam, ka neņemam vērā visus faktorus, kas ietekmē gan 
                    ugunsgrēka izplatību, gan ugunsgrēka rašanos, tāpēc mūsu pieteikums nav tas precīzākais. 
                </p>
            </div>
            <div>
                <h1>
                    Kāpēc kartē viss ir sarkans?
                </h1>
                <p>
                Diemžēl, izmantojot dažas metodes, var redzēt, ka gandrīz visi punkti kartē ir iekrāsoti 
                sarkanā krāsā. Tas galvenokārt ir saistīts ar faktu, ka darbā tiek izmantoti daļēji 
                neprecīzi dati, īpaši par laikapstākļiem. Arī darbā tiek izmantotas ne visas datu kopas, 
                kas ir aprakstītas bakalaura darbā. Nākotnē izstrādes komanda plāno uzlabot precizitāti, 
                iegūstot trūkstošās datu kopas un iegūstot precīzākus laikapstākļu datus.
                </p>
            </div>
        </div>
    )
}
    
export default Faq
    