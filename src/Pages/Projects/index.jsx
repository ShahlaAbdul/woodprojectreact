import React from 'react';
import AboutHead from '../../Components/AboutHead';
import MostPopular from '../../Components/MostPopularFournuture';
import AlexComplex from './../../Components/AlexComplex/index';

function Projects() {
  return (
    <div>
      <AboutHead headtitle={<h1>PROJECT</h1>}></AboutHead>
      <MostPopular
        h2title={<h2>LATEST COMPLETED PROJECTS</h2>}
        ptitle={
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
            ducimus saepe a! Sequi quibusdam ad eius possimus aliquam.
          </p>
        }
      ></MostPopular>

      <AlexComplex></AlexComplex>
    </div>
  );
}

export default Projects;
