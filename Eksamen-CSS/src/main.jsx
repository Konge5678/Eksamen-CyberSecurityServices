import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar.jsx' 
import './index.css'
import Background from './components/backround.jsx'
import KomIgjen from './components/kom-igang.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Background />
    <KomIgjen />  
  </React.StrictMode>,
)
