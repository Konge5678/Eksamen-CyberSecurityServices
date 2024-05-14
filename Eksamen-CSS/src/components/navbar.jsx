import React from "react";
import CSSLogo from "/CSSLogo.png";
import { SocialIcon } from 'react-social-icons';

function Navbar() {
    return (
        <nav className="flex items-center justify-between p-6 px-4 sm:px-36" style={{background: 'linear-gradient(to bottom, #03080c, #0b2428)', opacity: 0.8}}>
            <div className="ml-5 w-24 sm:w-36">
                <img className="w-full" src={CSSLogo} alt="Logo" />
            </div>
            <ul className="gap-4 hidden lg:flex ">
                <li><a href="#Om-oss" className="text-gray-300 hover:text-blue-300">Om oss</a></li>
                <li><a href="#Ansatte" className="text-gray-300 hover:text-blue-300">Ansatte</a></li>
                <li><a href="#Finn-oss" className="text-gray-300 hover:text-blue-300">Finn oss</a></li>
            </ul>
            <ul className="flex gap-4">
                <li><SocialIcon url="http://instagram.com/" bgColor="transparent" fgColor="#39ecf3" style={{ height: 25, width: 25, sm:{height: 35, width: 35}, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
                <li><SocialIcon url="http://facebook.com/" bgColor="transparent" fgColor="#39ecf3" style={{ height: 25, width: 25, sm:{height: 35, width: 35}, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
                <li><SocialIcon url="http://twitter.com/" bgColor="transparent" fgColor="#39ecf3" style={{ height: 25, width: 25, sm:{height: 35, width: 35}, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
                <li><SocialIcon url="http://linkedin.com/" bgColor="transparent" fgColor="#39ecf3" style={{ height: 25, width: 25, sm:{height: 35, width: 35}, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
            </ul>
        </nav>
    )
}

export default Navbar;