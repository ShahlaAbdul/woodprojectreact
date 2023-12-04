
import React from 'react';
import './style.css'
import PreciseConcept from '../../Components/PreciseConcept';
import MostPopular from '../../Components/MostPopularFournuture';
import AlexComplex from '../../Components/AlexComplex';
import Navbar from '../../Layout/Navbarr';
import SomeFeautures from '../../Components/SomeFeautures';
import LookingFor from '../../Components/LookingFor';
import RecentPost from '../../Components/RecentPost';
import Footer from '../../Layout/Footer';
import MostPopularCards from '../../Components/MostPopularCards';

function Home() {
    return (
      <div>
        <div className="home">
          <Navbar></Navbar>
          <PreciseConcept></PreciseConcept>
          <MostPopular h2title={<h2>MOST POPULAR FURNITURES</h2>} ptitle={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci voluptatibus maiores eligendi ad corporis ab earum. Voluptatibus.</p>} card={<MostPopularCards></MostPopularCards>}></MostPopular>
          <AlexComplex></AlexComplex>
          <SomeFeautures></SomeFeautures>
          <LookingFor></LookingFor>
          <RecentPost></RecentPost>
          <Footer></Footer>
        </div>
      </div>
    );
}

export default Home;
