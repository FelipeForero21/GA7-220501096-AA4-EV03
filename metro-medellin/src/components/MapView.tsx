import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import type { Station } from '../types.ts'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export type MapViewProps = {
  stations: Station[]
}

// Componente de mapa principal utilizando React-Leaflet
export const MapView: React.FC<MapViewProps> = ({ stations }) => {
  return (
    <div className="map-wrapper" aria-label="Mapa de rutas del Metro de Medellín">
      <MapContainer center={[6.2442, -75.5812]} zoom={12} scrollWheelZoom className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((s) => (
          <Marker key={s.id} position={[s.lat, s.lng]}>
            <Popup>
              <strong>{s.name}</strong>
              <div>Línea: {s.line}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
