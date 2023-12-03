
import React from 'react';
import './style.css'
import PreciseConcept from '../../Components/PreciseConcept';
import MostPopular from '../../Components/MostPopularFournuture';
import AlexComplex from '../../Components/AlexComplex';
import Navbar from '../../Layout/Navbarr';
import SomeFeautures from '../../Components/SomeFeautures';

function Home() {
    return (
      <div>
        <div className="home">
          <Navbar></Navbar>
          <PreciseConcept></PreciseConcept>
          <MostPopular></MostPopular>
          <AlexComplex></AlexComplex>
          <SomeFeautures></SomeFeautures>
        </div>
      </div>
    );
}

export default Home;
