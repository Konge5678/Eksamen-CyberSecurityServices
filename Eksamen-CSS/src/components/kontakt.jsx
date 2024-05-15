import React from "react";
import { useNavigate } from 'react-router-dom';

function Kontakt() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center">
            <button 
                style={{background: 'linear-gradient(to bottom, #348680, #2d5a79)', fontSize: '20px', padding: '10px 40px'}}
                className="mt-12 bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                onClick={() => navigate('/subpage')}
            >
                Kontakt oss!
            </button>
        </div>
    )
}

export default Kontakt;