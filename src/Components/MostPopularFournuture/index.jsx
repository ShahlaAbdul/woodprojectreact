import React from 'react';
import './style.css'
import MostPopularCards from '../MostPopularCards';


function MostPopular({ h2title, ptitle, card}) {
  return (
    <div className="mostPopular">
      <div className="mostPopularHead" >{h2title} {ptitle}
    
      </div>{card}
      {/* <MostPopularCards></MostPopularCards> */}
      
    </div>
  );
}

export default MostPopular;
