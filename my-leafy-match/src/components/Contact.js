import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import the Leaflet library
import 'leaflet/dist/leaflet.css'; // Make sure you import the CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons CSS


// Define a custom icon using Leaflet's divIcon
const flowerIcon = L.divIcon({
 className: 'my-custom-pin',
 html: '<i class="bi bi-geo-alt-fill" style="font-size: 3rem; color: #5c946e;"></i>',
 iconSize: [30, 42],
 iconAnchor: [15, 42]
});


const Contact = () => {
 return (
   <>
     <Navbar />
     <div className="container my-5">
       <div className="text-center mb-4">
         <h1>Contact Us</h1>
         <p>UNIT 0123, ABC BUILDING, BUSINESS PARK</p>
         {/* Additional contact information */}
       </div>
       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '450px', width: '100%' }}>
         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         <Marker position={[51.505, -0.09]} icon={flowerIcon}>
           <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
         </Marker>
       </MapContainer>
     </div>
     <Footer />
   </>
 );
};


export default Contact;


