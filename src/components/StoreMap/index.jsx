// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// export default function StoreMap(location, storeName) {
//   const { lat, lng } = location.location;

//   console.log("location", location.location)

//   return (
//     <MapContainer center={[lat, lng]} zoom={13} style={{ height: '400px', width: '30%' }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Marker position={[lat, lng]}>
//         <Popup>{`Loja: ${storeName}`}</Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// export default function StoreMap({ locations, storeNames }) {
//   const center = locations.length > 0 ? [locations[0].lat, locations[0].lng] : [0, 0];

//   return (
//     <MapContainer center={center} zoom={13} style={{ height: '400px', width: '50%', marginTop: "10px" }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {locations.map((location, index) => (
//         <Marker key={index} position={[location.lat, location.lng]}>
//           <Popup>{`Loja: ${storeNames[index]}`}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// }

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Importe o ícone personalizado
import customMarkerIcon from '../../assets/location.svg';

// Corrige o ícone padrão do Leaflet
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
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '50%', marginTop: "10px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]} icon={customIcon}>
          <Popup>{`Loja: ${storeNames[index]}`}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}










