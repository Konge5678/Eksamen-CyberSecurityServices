import React from "react";
import KartImage from "/kart.png";

function Kart() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl text-white font-bold text-center mt-20">Her finner du oss</h2>
            <div className="mt-10">
                <img src={KartImage} alt="Map" className="object-cover w-full max-w-4xl rounded-lg shadow-lg"/>
            </div>
        </div>
    );
}

export default Kart;