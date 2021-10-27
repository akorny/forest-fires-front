import React from "react"

const About = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <p>
                    Tīmekļa vietne izstrādāta&nbsp;
                    <a href="https://www.lata.org.lv/skolas-2021">
                        Ģeotēlpisko datu hakatons skolēniem 2021
                    </a>
                    &nbsp; ietvaros. Tīmekļa vietni izstrādāja{" "}
                    <i>tea.spill(keyboard)</i> komanda.
                </p>
            </div>
            <div className="col-md-12">
                <h4>Atsauces</h4>
                <div>
                    Tīmēkļa vietnē radīto slāņu apreķini ir izveidoti,
                    balstoties uz&nbsp;
                    <a href="https://www.gisnet.lv/~marisn/305-76951-Krumins_Gintars_gk17027.pdf">
                        Gintara Krūmiņa bakalaura darbu (LU, darba vadītājs
                        Māriss Nartišs)
                    </a>
                    .
                </div>
                <div>
                    Tīmēkļa vietnes ikonu izveidoja&nbsp;
                    <a href="https://www.freepik.com" title="Freepik">
                        Freepik
                    </a>
                    &nbsp; no&nbsp;
                    <a href="https://www.flaticon.com/" title="Flaticon">
                        www.flaticon.com
                    </a>
                    .
                </div>
                <div>
                    No <i>Latvijas Valsts Ceļu</i> datu kopam izmantoti:
                    <ul>
                        <li>
                            <a href="https://data.gov.lv/dati/lv/dataset/aktualie-celu-meteorologisko-staciju-dati">
                                dati meteoroloģiskām stacijam reālajā laikā;
                            </a>
                        </li>
                        <li>
                            <a href="https://data.gov.lv/dati/lv/dataset/celu-meteo-staciju-vesturiskie-dati-2001-2019-gadi">
                                meteorologisko stāciju vēsturiskie dati;
                            </a>
                        </li>
                        <li>
                            <a href="https://data.gov.lv/dati/lv/dataset/valsts-celu-tikls">
                                Latvijas autoceļu tīkls.
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    No <i>Latvijas Valsts Mežu</i> datu kopam izmantoti:
                    <ul>
                        <li>
                            <a href="https://data.gov.lv/dati/lv/dataset/as-latvijas-valsts-mezi-pamatdati">
                                meža iecirkņi;
                            </a>
                        </li>
                        <li>
                            <a href="https://data.gov.lv/dati/lv/dataset/as-latvijas-valsts-mezi-mezkopiba-un-ugunsapsardziba">
                                ugunsgrēku vietas, ūdens ņemšanas vietas, stigas, mineralizētas joslas.
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    No <i>Latvijas Ģeotelpiskās informācijas aģentūras</i> datu kopam izmantoti:
                    <ul>
                        <li>
                            <a href="https://www.lgia.gov.lv/lv/Digit%C4%81lais%20reljefa%20modelis">
                                digitālais reljefa modelis;
                            </a>
                        </li>
                        <li>
                            <a href="https://www.lgia.gov.lv/lv/node/879">
                                augstas izšķirtspējas slāņi.
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    No <i>OpenStreetMap</i> datu kopam izmantoti:
                    <ul>
                        <li>
                            dzelceļu tīkls Latvijā.
                        </li>
                    </ul>
                </div>
                <div>
                    No <i>Latvijas Vides, ģeoloģijas un meteoroloģijas centra</i> datu kopam izmantoti:
                    <ul>
                        <li>
                            <a href="https://videscentrs.lvgmc.lv/iebuvets/zemes-dzilu-informacijas-sistema">
                                Zemes dzīļu informācijas sistēma.
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
