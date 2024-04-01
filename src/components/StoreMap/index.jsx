
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


import customMarkerIcon from '../../assets/location.svg';
import { MapSection } from './style';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const customIcon = L.icon({
  iconUrl: customMarkerIcon,
  iconRetinaUrl: customMarkerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function StoreMap({ locations, storeNames }) {
  const center = locations.length > 0 ? [locations[0].lat, locations[0].lng] : [0, 0];

  return (
    <MapSection>
      <MapContainer
        center={center}
        zoom={16}
        className='MapContainer' >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className='TileLayer' />
        {locations.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]} icon={customIcon}>
            <Popup>{`Loja: ${storeNames[index]}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapSection>
  );
}










