import React from 'react';
import './style.css'
import AboutbrendNew from '../../Components/AboutBrendNew';
import AboutHead from '../../Components/AboutHead';
import AlexComplex from '../../Components/AlexComplex';
import SomeFeautures from '../../Components/SomeFeautures';

function About
() {
  return (
    <div className='about'>
      <AboutHead  headtitle={<h1>ABOUT US</h1>}></AboutHead>
      <AboutbrendNew></AboutbrendNew>
      <AlexComplex></AlexComplex>
      <SomeFeautures></SomeFeautures>
    </div>
  );
}

export default About
;
