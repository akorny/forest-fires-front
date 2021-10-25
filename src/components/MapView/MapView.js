import React from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import { LoaderCenter } from ".."
import { useRequest } from "../../hooks"
import 'leaflet/dist/leaflet.css';

const MapView = ({ geojsonUrl }) => {
    const [data, loading, error] = useRequest({
        method: "GET",
        url: geojsonUrl,
    })

    if (loading) return <LoaderCenter />

    if (error) return <div>Notikusi kļūda...</div>

    return (
        <MapContainer center={[56.946285, 24.105078]} zoom={3} style={{width: "100%", height: "500px"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={data} />
        </MapContainer>
    )
}

export default MapView
