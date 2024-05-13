import React from "react";
import BgImage from "/waves.jpg";

function Background() { 
    return (
        <div style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            position: 'fixed',
            zIndex: -1
        }}>
        </div>
    )
}

export default Background;