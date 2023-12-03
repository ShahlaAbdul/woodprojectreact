import React from 'react';
import './style.css'

function MostPopularCard({title,newtitle, img}) {
  return (
    <div>
      <div className="mostPopularCard">
        <div className="mostPopularCardImg">
                  <img src={img} alt="sofa" />
        </div>
              <div className="mostPopularCardText">
                  <h2>{title}</h2>
                  <p>{newtitle}</p></div>
      </div>
    </div>
  );
}

export default MostPopularCard;
