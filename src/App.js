import * as  React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import MainLAyout from './Layout/MainLayout';
import Projects from './Pages/Projects';
import ProjectDetail from './Pages/ProjectDetail';




function App() {
    return (
      <div>
        <BrowserRouter >
          <Routes>

            <Route path="/" element={<Home />} /> 
            <Route element={<MainLAyout />}>
             <Route path="/About" element={<About/>} /> 
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/ProjectDetail" element={<ProjectDetail/>} />
             
            </Route>
            
     
         </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
