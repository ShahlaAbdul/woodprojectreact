import React from 'react';
import './style.css'

function SomeFeaturesCard({ styles, head }) {
  return (
    <div>
      <div className="someFeaturesCard">
        <div className="someFeaturesCardHead">
          <i class={styles}></i>
                  <span>{head}</span>
        </div>
        <div className="someFeaturesCardText">
          <p>
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SomeFeaturesCard;
