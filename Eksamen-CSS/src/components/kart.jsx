import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Kart() {
    return (
        <div id="Finn-oss" className="flex flex-col items-center justify-center px-4 sm:px-0">
            <h2 className="text-5xl text-white font-bold text-center mt-20">Her finner du oss</h2>
            <div className='mb-6 mt-6' style={{ width: '100%', maxWidth: '600px', height: '400px' }}>
                <MapContainer 
                    center={[60.80758436467838, 11.053091129300938]} 
                    zoom={13} 
                    style={{ height: "100%", width: "100%", borderRadius: "15px" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[60.80758436467838, 11.053091129300938]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default Kart;