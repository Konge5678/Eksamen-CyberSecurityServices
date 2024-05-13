import React from 'react';
import CSSLogo from "/CSSLogo.png";
import GooglePlayIcon from "/google.webp"
import AppStoreIcon from "/apple.png"

function Footer() {
    return (
        <footer className="bg-black text-white grid grid-cols-1 md:grid-cols-5 gap-4 p-10 mt-16" style={{background: 'linear-gradient(to bottom, #03080c, #0b2428)', opacity: 0.8}}>
            <div className="pl-10 pt-10 md:pl-5 md:pt-5">
                <img src={CSSLogo} alt="Logo" className="w-36 mb-4" />
                <p className='w-48 text-gray-200 '>En ledende leverandør av cybersikkerhetstjenester og løsninger for distribusjons- og teknologipartnere rundt om i USA.</p>
            </div>
            <div className="pl-10 pt-10 md:pl-5 md:pt-5">
                <h3 className="text-2xl text-white font-bold mb-4 md:text-xl">Om oss</h3>
                <ul>
                    <li>Om oss</li>
                    <li>Kontakt</li>
                    <li>Skriv en anmeldelse</li>
                </ul>
            </div>
            <div className="pl-10 pt-10 md:pl-5 md:pt-5">
                <h3 className="text-2xl text-white font-bold mb-4 md:text-xl">Kontakt oss</h3>
                <ul>
                    <li>Addresse: Satkhira, Kaliganj, BD</li>
                    <li>Email: aburaihan.it009@gmail.com</li>
                    <li>Telefon: +88 01407152619</li>
                </ul>
            </div>
            <div className="pl-10 pt-10 md:pl-5 md:pt-5">
                <h3 className="text-2xl text-white font-bold mb-4 md:text-xl">Følg oss</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <div className="pl-10 pt-10 md:pl-5 md:pt-5">
                <ul>
                    <img src={GooglePlayIcon} alt="Logo" className="w-36" />
                    <img src={AppStoreIcon} alt="Logo" className="w-36 mt-6" />
                </ul>
            </div>
        </footer>
    );
}

export default Footer;