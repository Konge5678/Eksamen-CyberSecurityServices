import React from "react";
import BgImage from "/waves.jpg";

function Background() { 
    return (
        <div className="absolute w-full h-full inset-0 z-negative" style={{backgroundImage: `url(${BgImage})`, backgroundRepeat: 'repeat'}}>
        </div>
    )
}

export default Background;