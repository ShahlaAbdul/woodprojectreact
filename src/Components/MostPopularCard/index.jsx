import React from 'react';
import './style.css'

function MostPopularCard({cardbutton,title,newtitle, img}) {
  return (
    <div>
      <div className="mostPopularCard">
        <div className="mostPopularCardImg">
          <img src={img} alt="sofa" />
        </div>
        <div className="cardButton">
          <div className="cardButton1">{cardbutton}</div>
          {/* <div className='cardbutton2'>{cardbutton}</div> */}
        </div>
        <div className="mostPopularCardText">
          <h2>{title}</h2>
          <p>{newtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default MostPopularCard;
