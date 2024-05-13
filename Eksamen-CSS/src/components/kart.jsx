import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Kart() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl text-white font-bold text-center mt-20">Her finner du oss</h2>
            <div className='mb-6'>
                <h1>Welcome to the LokasjonSide!</h1>
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
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default Kart;