import React from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import { LoaderCenter } from ".."
import { useRequest } from "../../hooks"
import { getFeatureColor } from "./utils"
import 'leaflet/dist/leaflet.css';

const LatvianGeographicalCenter = [56.8805539308396, 24.60646047116392]

const MapView = ({ geojsonUrl }) => {
    const [data, loading, error] = useRequest({
        method: "GET",
        url: geojsonUrl,
    })

    if (loading) return <LoaderCenter />

    if (error) return <div>Notikusi kļūda...</div>

    return (
        <MapContainer center={LatvianGeographicalCenter} zoom={7} style={{width: "100%", height: "500px"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={data} style={(feature) => {
                return {
                    weight: 0.5,
                    color: getFeatureColor(feature.properties.DANGER),
                    fillOpacity: 0.5
                }
            }} />
        </MapContainer>
    )
}

export default MapView
