import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CSSLogo from "/CSSLogo.png";

function Kart() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl text-white font-bold text-center mt-20">Her finner du oss</h2>
            <div className='mb-6 mt-6' >
                <MapContainer 
                    center={[60.80758436467838, 11.053091129300938]} 
                    zoom={13} 
                    style={{ height: "400px", width: "600px", borderRadius: "15px" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[60.80758436467838, 11.053091129300938]}>
                        <Popup>
                            <img src={CSSLogo} alt="Logo" className="w-80" />
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default Kart;