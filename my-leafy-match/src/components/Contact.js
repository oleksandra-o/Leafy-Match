import React from 'react';
import Navbar from './Navbar';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Make sure you import the CSS

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="text-center mb-4">
          <h1>Contact Us</h1>
          <p>UNIT 0123, ABC BUILDING, BUSINESS PARK</p>
          <div>
            <p><strong>Phone:</strong> +1 234 567 8900</p>
            <p><strong>Email:</strong> contact@leafymatch.com</p>
            <p><strong>Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM</p>
          </div>
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '450px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]} />
          </MapContainer>
        </div>
        {/* ... other components */}
      </div>
      
    </>
  );
};

export default Contact;
