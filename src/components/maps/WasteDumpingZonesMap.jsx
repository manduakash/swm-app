"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export function WasteDumpingZonesMap() {
  const dumpingZones = [
    { id: 1, name: "Zone A", lat: 88.3630, lng: 22.5626, capacity: 75 },
    { id: 2, name: "Zone B", lat: 88.3630, lng: 22.5626, capacity: 90 },
    { id: 3, name: "Zone C", lat: 88.3630, lng: 22.5626, capacity: 60 },
    { id: 4, name: "Zone D", lat: 88.3630, lng: 22.5626, capacity: 40 },
    { id: 5, name: "Zone E", lat: 88.3630, lng: 22.5626, capacity: 85 },
  ]

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {dumpingZones.map((zone) => (
        <Marker key={zone.id} position={[zone.lat, zone.lng]}>
          <Popup>
            {zone.name}
            <br />
            Capacity: {zone.capacity}%
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

