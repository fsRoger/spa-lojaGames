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

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function StoreMap({ locations, storeNames }) {
  const center = locations.length > 0 ? [locations[0].lat, locations[0].lng] : [0, 0];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '50%', marginTop: "10px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>{`Loja: ${storeNames[index]}`}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}






