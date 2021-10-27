import React from "react"

const Index = () => {
    return (
        <div className="photo-container" style={{
            backgroundImage: `url("forest.jpg")`,
        }}>
            <div className="container-fluid">
                <p className="text-on-photo">
                    Latvija nav pārāk bagāta ar dabas resursiem valsts… bet ir jālepojas ar tiem, kuri ir.
                    Latvijā viens no visizplatītākajiem dabas krājumiem ir mežs.
                    Tomēr gan Latvijā, gan parējās valstīs mežu vienmēr apdraud ugunsgrēki. 
                    Šajā tīmekļa vietnē ir iespējams apskatīt kāda, uz doto brīdi, ir ugunsbīstamība Latvijas mežos.
                    Ugunsbīstamība ir aprēķināta, izmantojot dažādas metodes: <i>JAC</i>, <i>AHP</i>, <i>MLC</i>.
                    Arī iespējams apskatīt <i>ugunsgrēka izcelšanas</i> un <i>ugunsgrēka izplatības</i> bīstamības 
                    atsevišķi vai apskatīt <i>kopējo ugunsbīstamību</i>. 
                    Izmantojot mūsu tīmekļa vietnes <i>API</i> ir iespējams iegūt slāņus <i>GeoJSON</i> un <i>SHP</i> formātos automātiski.
                </p>
            </div>
        </div>
    )
}

export default Index