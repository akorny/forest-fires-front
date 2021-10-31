import React from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import { useRequest } from "../../hooks"
import { getFeatureColor } from "./utils"
import 'leaflet/dist/leaflet.css';

const LatvianGeographicalCenter = [56.8805539308396, 24.60646047116392]

const MapView = ({ geojsonUrl }) => {
    const [data, loading, error] = useRequest({
        method: "GET",
        url: geojsonUrl,
    })

    const getGeoJsonLayer = () => {
        if (loading) {
            return null
        }
        else {
            return (
                <GeoJSON data={data} style={(feature) => {
                    return {
                        weight: 0.5,
                        color: getFeatureColor(feature.properties.DANGER),
                        fillOpacity: 0.5
                    }
                }} />
            )
        }
    }

    const mapStyle = {
        width: "100%",
        height: "500px"
    }

    if (error) return <div>Notikusi kļūda...</div>

    return (
        <MapContainer center={LatvianGeographicalCenter} zoom={7} style={mapStyle}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {getGeoJsonLayer()}
        </MapContainer>
    )
}

export default MapView
