import React from 'react';
import './style.css'
import SomeFeaturesCard from '../SomeFeaaturesCard';

function SomeFeautures() {
  return (
    <div className="someFeaturesContainer">
      <div className="someFeatures">
        <h2>SOME FEATURES THAT MADE US UNIQUE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>

      <div className="someFeaturesCards">
        <SomeFeaturesCard
          styles={"fa-regular fa-user"}
          head={<h4>EXPERT TECHNICIANS</h4>}
        ></SomeFeaturesCard>
        <SomeFeaturesCard
          styles={"fa-regular fa-id-card"}
          head={<h4>PROFESSIONAL SERVICE</h4>}
        ></SomeFeaturesCard>
        <SomeFeaturesCard
          styles={"fa-solid fa-phone"}
          head={<h4>GREAT SUPPORT</h4>}
        ></SomeFeaturesCard>
        <SomeFeaturesCard
          styles={"fa-solid fa-rocket"}
          head={<h4>TECHNICAL SKILLS</h4>}
        ></SomeFeaturesCard>
        <SomeFeaturesCard
          styles={"fa-regular fa-gem"}
          head={<h4>HIGHLY RECOMENDED</h4>}
        ></SomeFeaturesCard>
        <SomeFeaturesCard
          styles={"fa-regular fa-comment"}
          head={<h4>POSITIVE REVIEWS</h4>}
        ></SomeFeaturesCard>
      </div>
    </div>
  );
}

export default SomeFeautures;
