import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './global.css'
import Home from './pages/home'
import Details from './pages/Details'
// import MaisProcurados from './pages/MaisClassificados'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        {/* <Route path="/maisprocurados" element={<MaisProcurados />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
