import React from 'react';
import Navbar from '../Navbarr';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';


function MainLAyout() {
  return (
    <div>
      
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
      
          
    </div>
  );
}

export default MainLAyout;
