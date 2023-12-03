import * as  React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Pages from './Pages/Pagess';
import Contact from './Pages/Contact';
import MainLAyout from './Layout/MainLayout';




function App() {
    return (
      <div>
        <BrowserRouter >
          <Routes>

            <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}

            <Route element={<MainLAyout />}>
             <Route path="/About" element={<About/>} /> {/* 👈 Renders at /app/ */}
            <Route path="/Pages" element={<Pages/>} /> {/* 👈 Renders at /app/ */}
            <Route path="/Contact" element={<Contact/>} /> {/* 👈 Renders at /app/ */}
            </Route>
            
     
         </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
