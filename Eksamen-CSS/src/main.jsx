import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar.jsx' 
import './index.css'
import Background from './components/backround.jsx'
import KomIgjen from './components/kom-igang.jsx'
import Tilbud from './components/tilbud.jsx'
import Ansatte from './components/ansatte.jsx'
import Kart from './components/kart.jsx'
import Footer from './components/footer.jsx'
import CookieConsent from './components/cookies.jsx'
import Kontakt from './components/kontakt.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background />
    <Navbar />
    <KomIgjen />  A
    <Tilbud />
    <Ansatte />
    <Kart /> 
    <Kontakt/> 
    <Footer />
    <CookieConsent />
  </React.StrictMode>,
)
