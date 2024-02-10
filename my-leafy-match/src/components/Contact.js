import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'; // Removed Popup import

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="text-center mb-4">
          <h1>Contact</h1>
          <p>UNIT 0123, ABC BUILDING, BUSINESS PARK</p>
          {/* Map Container without Popup */}
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '450px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              {/* Popup removed */}
            </Marker>
          </MapContainer>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h2>We’d Love to Hear From You.</h2>
            {/* Additional Contact Info */}
          </div>
          <div className="col-md-6">
            <h2>Inquiry Form</h2>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="7" placeholder="Share your thoughts"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
