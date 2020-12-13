import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map({ user }) {
  const x = user.location.coordinates.latitude;
  const y = user.location.coordinates.longitude;
  console.log(user);
  return (
    <div className='map'>
      <MapContainer center={[x, y]} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[x, y]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
