import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import {
  MapContainer,
  TileLayer,
  Marker,
  Polygon
} from "react-leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapView({ lat, lon, heading }) {
  if (!lat || !lon) return null;

  const len = 0.00012;
  const t = (heading * Math.PI) / 180;

  const cone = [
    [lat, lon],
    [
      lat + Math.cos(t - 0.35) * len,
      lon + Math.sin(t - 0.35) * len,
    ],
    [
      lat + Math.cos(t + 0.35) * len,
      lon + Math.sin(t + 0.35) * len,
    ],
  ];

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={19}
      style={{ height: "320px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[lat, lon]} />

      <Polygon positions={cone} />
    </MapContainer>
  );
}
