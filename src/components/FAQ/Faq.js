import React from "react"
import { Link, useLocation } from "react-router-dom"
import Latex from "react-latex"

const useQuery = (param) => {
    return new URLSearchParams(useLocation().search).get(param)
}

const Faq = () => {
    const question = useQuery("q")

    const isOpened = (q) => {
        return q === question ? " show" : ""
    }

    const isOpenedAria = (q) => {
        return q === question ? "true" : "false"
    }

    const isOpenedButton = (q) => {
        return q === question ? "" : " collapsed"
    }

    return (
        <div className="row">
            <div className="col">
                <div className="accordion" id="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="viss-sarkans-heading">
                            <button
                                className={`accordion-button ${isOpenedButton(
                                    "viss-sarkans"
                                )}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#viss-sarkans-body"
                                aria-expanded={isOpenedAria("viss-sarkans")}
                                aria-controls="viss-sarkans-body"
                            >
                                Kāpēc kartē viss ir sarkans?
                            </button>
                        </h2>
                        <div
                            id="viss-sarkans-body"
                            className={`accordion-collapse collapse${isOpened(
                                "viss-sarkans"
                            )}`}
                            aria-labelledby="viss-sarkans-heading"
                            data-bs-parent="#accordion"
                        >
                            <div className="accordion-body">
                                <i>
                                    Jāievēro, ka ugunsgrēka risks šeit nenozīmē
                                    varbūtību, kā konkrētajā vietā un laikā būs
                                    ugunsgrēks, bet gan cik labvelīgi ir
                                    apstākļi ugunsgrēka izcelšanai un
                                    izplatībai šajā teritorijā.{" "}
                                </i>
                                Arī karte ir tik sarkana tādēļ, ka darbā tiek
                                izmantoti daļēji neprecīzi dati, īpaši par laika
                                apstākļiem. Tajā pašā laikā, darbā tiek izmantotas ne visas
                                datu kopas, kas ir aprakstītas{" "}
                                <a href="https://www.gisnet.lv/~marisn/305-76951-Krumins_Gintars_gk17027.pdf">
                                    bakalaura darbā
                                </a>
                                . Nākotnē izstrādes komanda plāno uzlabot
                                precizitāti, iegūstot trūkstošās datu kopas un
                                iegūstot precīzākus laikapstākļu datus.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="aprekini-heading">
                            <button
                                className={`accordion-button ${isOpenedButton(
                                    "aprekini"
                                )}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#aprekini-body"
                                aria-expanded={isOpenedAria("aprekini")}
                                aria-controls="aprekini-body"
                            >
                                Kā tiek aprēķināta bīstamība?
                            </button>
                        </h2>
                        <div
                            id="aprekini-body"
                            className={`accordion-collapse collapse${isOpened(
                                "aprekini"
                            )}`}
                            aria-labelledby="aprekini-heading"
                            data-bs-parent="#accordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Balstoties uz iepriekš izveidoto slāni, kurā
                                    atrodas punkti Latvijas mežos tā, lai katram
                                    puntam atbilst 1kmx1km liels četrstūris.
                                    Katram punktam uz šī slāņa ir aprēķināts
                                    ugunsgrēka izplatības vai izcelšanas
                                    bīstamībība pēc šādam formulām:
                                    <br />
                                    <Latex>
                                        {"$$IZC = \\Sigma W_{izc} \\cdot RG$$"}
                                    </Latex>
                                    , kur: <br />
                                    <Latex>$$IZC$$</Latex> – mežu ugunsgrēku
                                    izcelšanās riska vērtība; <br />
                                    <Latex>{"$$W_{izc}$$"}</Latex> – mežu
                                    ugunsgrēku izcelšanās faktora svara vērtība;{" "}
                                    <br />
                                    <Latex>$$RG$$</Latex> – faktora riska grupa
                                    jeb reklasificētā rastra vērtība. <br />
                                </p>
                                <p>
                                    <Latex>
                                        {"$$IZC = \\Sigma W_{izc} \\cdot RG$$"}
                                    </Latex>
                                    , kur: <br />
                                    <Latex>$$IZC$$</Latex> – mežu ugunsgrēku
                                    izplatīšanās riska vērtība; <br />
                                    <Latex>{"$$W_{izc}$$"}</Latex> – mežu
                                    ugunsgrēku izplatīšanās faktora svara
                                    vērtība; <br />
                                    <Latex>$$RG$$</Latex> – faktora riska grupa
                                    jeb reklasificētā rastra vērtība.
                                    <br />
                                </p>
                                <p>
                                    Kopējais risks ir aprēķināts pēc formulas:{" "}
                                    <br />
                                    <Latex>$$RISK = IZC + IZP$$</Latex>, kur:
                                    <br />
                                    <Latex>$$RISK$$</Latex> – mežu ugunsgrēku
                                    kopējā riska vērtība;
                                    <br />
                                    <Latex>$$IZC$$</Latex> – mežu ugunsgrēku
                                    izcelšanās riska vērtība;
                                    <br />
                                    <Latex>$$IZP$$</Latex> – mežu ugunsgrēku
                                    izplatīšanās riska vērtība.
                                    <br />
                                </p>
                                <p>
                                    Jāievēro, ka ugunsgrēka risks šeit nenozīmē
                                    varbūtību, kā konkrētajā vietā un laikā būs
                                    ugunsgrēks, bet relatīvo izcēlšanās vai
                                    izplatības bīstamību.
                                </p>
                                <p>
                                    Iegūstot riska vērtību, ir secināts, vai
                                    risks ir zems, vidējs vai augsts, un
                                    atbilstoši nokrāsots punkts uz kartes,
                                    attiecīgi tabulai:
                                </p>
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th
                                                rowSpan={2}
                                                className="table-heading-row-span"
                                            >
                                                Riska klase
                                            </th>
                                            <th colSpan={3}>
                                                Riska vērtību intervāli atkarībā
                                                no metodes
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>JAC</th>
                                            <th>AHP</th>
                                            <th>MLC</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-success">
                                            <td>Zems risks</td>
                                            <td>0,216 - 0,359</td>
                                            <td>1,892 - 3,405</td>
                                            <td>55,295 - 111,582</td>
                                        </tr>
                                        <tr className="table-warning">
                                            <td>Vidējs risks</td>
                                            <td>0,359 - 0,455</td>
                                            <td>3,405 - 4,917</td>
                                            <td>111,582 - 167,906</td>
                                        </tr>
                                        <tr className="table-danger">
                                            <td>Augsts risks</td>
                                            <td>0,455 - 0,575</td>
                                            <td>4,917 - 6,430</td>
                                            <td>167,906 - 224,229</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faktors-heading">
                            <button
                                className={`accordion-button ${isOpenedButton(
                                    "faktors"
                                )}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faktors-body"
                                aria-expanded={isOpenedAria("faktors")}
                                aria-controls="faktors-body"
                            >
                                Kādi ir izcēlšanās un izplatības faktori?
                            </button>
                        </h2>
                        <div
                            id="faktors-body"
                            className={`accordion-collapse collapse${isOpened(
                                "faktors"
                            )}`}
                            aria-labelledby="faktors-heading"
                            data-bs-parent="#accordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Meža ugunsgrēku izcēlšanās un izplatības
                                    faktorus var iedalīt šādās grupās:
                                </p>
                                <ul>
                                    <li>
                                        laikapstākļu faktori:
                                        <ul>
                                            <li>gaisa temperatūra;</li>
                                            <li>nokrišņu daudzums;</li>
                                            <li>karsto dienu skaits;</li>
                                            <li>vēja ātrums.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        meža vides faktori:
                                        <ul>
                                            <li>meža tips.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        antropogēnie faktori:
                                        <ul>
                                            <li>
                                                vēsturisko ugunsgrēku skaits;
                                            </li>
                                            <li>attālums no dzelzceļa;</li>
                                            <li>attālums no autoceļa;</li>
                                            <li>
                                                attālums no kūdras iegūves
                                                vietas;
                                            </li>
                                            <li>attālums no stigas;</li>
                                            <li>
                                                attālums no mineralizētas
                                                joslas.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        topogrāfiskie faktori:
                                        <ul>
                                            <li>nogāžu virziens;</li>
                                            <li>nogāžu slīpums.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="jac-heading">
                            <button
                                className={`accordion-button ${isOpenedButton(
                                    "jac"
                                )}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#jac-body"
                                aria-expanded={isOpenedAria("jac")}
                                aria-controls="jac-body"
                            >
                                Kas ir JAC?
                            </button>
                        </h2>
                        <div
                            id="jac-body"
                            className={`accordion-collapse collapse${isOpened(
                                "jac"
                            )}`}
                            aria-labelledby="jac-heading"
                            data-bs-parent="#accordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    <b>Žakāra indeksa (JAC) metode</b> ir jauna
                                    metode, kas potenciāli var tikt izmantota
                                    meža ugunsgrēku ietekmējošo faktoru svara
                                    vērtību noteikšanai un pārbaudei. Žakāra
                                    indekss, ko dēvē arī par Žakāra līdzības
                                    koeficientu, ir statistisks rādītājs, ko
                                    izmanto, lai izprastu līdzības starp izlašu
                                    kopām.
                                </p>
                                <p>
                                    Šajā metodē izmantots princips, kurā visi
                                    ugunsgrēku ietekmējošie faktori tika
                                    novērtēti kā vienlīdzīgi – izcelšanās
                                    faktoriem sākotnējā svara vērtība ir 8
                                    (deviņi faktori), izplatīšanās faktoriem
                                    sākotnējā svara vērtība 6 (divpadsmit
                                    faktori), katrai no riska situācijām
                                    veidojot pusi no kopējā ugunsgrēku riska.
                                    Lai iegūtu faktora svara vērtību, konkrētā
                                    faktora sākotnējā svara vērtība tiek
                                    paaugstināta par 1 vienību, rezultātā
                                    iegūstot Žakāra indeksa izmaiņas augsta
                                    riska klases vērtībā ugunsgrēku
                                    vēsturiskajās teritorijās. Tas veicams
                                    katram faktoram individuāli. Iegūtā Žakāra
                                    indeksa izmaiņas vērtība tiek piešķirta kā
                                    faktora svara vērtība.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="ahp-heading">
                            <button
                                className={`accordion-button ${isOpenedButton(
                                    "ahp"
                                )}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#ahp-body"
                                aria-expanded={isOpenedAria("ahp")}
                                aria-controls="ahp-body"
                            >
                                Kas ir AHP?
                            </button>
                        </h2>
                        <div
                            id="ahp-body"
                            className={`accordion-collapse collapse${isOpened(
                                "ahp"
                            )}`}
                            aria-labelledby="ahp-heading"
                            data-bs-parent="#accordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    <b>Analītiskās hierarhijas procesa (AHP)</b>{" "}
                                    metode ir viena no visbiežāk izmantotajām
                                    metodēm pasaulē meža ugunsbīstamības
                                    ietekmējošo faktoru svara vērtību noteikšanā
                                    kā lēmumu pieņemšanas atbalsta sistēma. AHP
                                    metodes noteiktās svara vērtības balstītas
                                    uz ekspertu subjektīvu faktoru svara vērtību
                                    novērtējumu, kas transformēts kvantitatīvos
                                    lielumos, attēlojot objektīvo realitāti.
                                </p>
                                <p>
                                    Faktori darbojas kā kritēriji, starp kuriem
                                    nosaka prioritāro faktoru un reižu skaitu,
                                    par cik tas ir nozīmīgāks meža ugunsgrēku
                                    riska ietekmēšanā nekā salīdzinošais
                                    faktors.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="mlc-heading">
                            <button
                                className={`accordion-button ${isOpenedButton(
                                    "mlc"
                                )}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#mlc-body"
                                aria-expanded={isOpenedAria("mlc")}
                                aria-controls="mlc-body"
                            >
                                Kas ir MLC?
                            </button>
                        </h2>
                        <div
                            id="mlc-body"
                            className={`accordion-collapse collapse${isOpened(
                                "mlc"
                            )}`}
                            aria-labelledby="mlc-heading"
                            data-bs-parent="#accordion"
                        >
                            <div className="accordion-body">
                                <b>Maximum likelihood classification (MLC)</b>{" "}
                                algoritma metode ir viena no populārākajām
                                klasifikācijas metodēm Zemes tālizpētē. Metodes
                                līdzšinējais pielietojums mežsaimniecībā ir
                                bijis ugunsgrēku identificēšana satelītattēlos.
                                Šajā pētījumā mākslīgā intelekta prognozēšanas
                                rīks izmantots faktoru svara vērtību noteikšanā.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="aktuali-dati-heading">
                            <button
                                className={`accordion-button ${isOpenedButton(
                                    "aktuali-dati"
                                )}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#aktuali-dati-body"
                                aria-expanded={isOpenedAria("aktuali-dati")}
                                aria-controls="aktuali-dati-body"
                            >
                                Vai kartē ir attēloti aktuāli dati?
                            </button>
                        </h2>
                        <div
                            id="aktuali-dati-body"
                            className={`accordion-collapse collapse${isOpened(
                                "aktuali-dati"
                            )}`}
                            aria-labelledby="aktuali-dati-heading"
                            data-bs-parent="#accordion"
                        >
                            <div className="accordion-body">
                                Lai gan šķiet, ka mūsu rīks ir stipri teorētisks
                                modelis, tomēr tā nav. Laikapstākļu dati tiek
                                ņemti reāllaikā, kas nozīmē, ka <Link to="/faq?q=aprekini">RISK</Link> atšķirsies
                                atkarībā no tiem. Atzīstam, ka neņemam vērā
                                visus faktorus, kas ietekmē gan ugunsgrēka
                                izplatību, gan ugunsgrēka rašanos, tāpēc mūsu
                                pieteikums nav tas precīzākais.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
