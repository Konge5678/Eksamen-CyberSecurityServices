import React from "react";

function KomIgjen() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-8xl text-white font-bold text-center mt-20">Cyber Security Services</h1>
            <p className="text-2xl text-gray-300 text-center max-w-2xl mx-auto leading-snug mt-12">Cyber Security Services er et amerikansk basert cybersikkerhetsselskap som leverer 
            tjenester og administrerer cyberrisiko på vegne av våre verdsatte distribusjons- og teknologipartnere.</p>
            <button style={{background: 'linear-gradient(to bottom, #348680, #2d5a79)', fontSize: '20px', padding: '10px 40px'}}
             className="mt-12 bg-blue-500 text-white font-bold py-2 px-4 rounded-md">
                Kom i gang
            </button>
        </div>
    )
}

export default KomIgjen;