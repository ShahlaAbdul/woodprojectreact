import React from 'react';
import MostPopularCard from '../MostPopularCard';

function MostPopularCards() {
  return (
    <div>
      <div className="mostPopularHeadCArds">
        <MostPopularCard
          img={
            "https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-1.jpg"
          }
          title={<h5>GREEN BUTTER SOFA</h5>}
          newtitle={
            <p>
              Sony laptops are among the most well known laptops on today’s
              market. Sony is a name that.
            </p>
          }
        >
          {" "}
        </MostPopularCard>

              <MostPopularCard
                  
          img={
            "https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-2.jpg"
          }
          title={<h5>GREEN BUTTER SOFA</h5>}
          newtitle={
            <p>
              Sony laptops are among the most well known laptops on today’s
              market. Sony is a name that.
            </p>
          }
        >
          {" "}
        </MostPopularCard>

        <MostPopularCard
          img={
            "https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-3.jpg"
          }
          title={<h5>GREEN BUTTER SOFA</h5>}
          newtitle={
            <p>
              Sony laptops are among the most well known laptops on today’s
              market. Sony is a name that.
            </p>
          }
        >
          {" "}
        </MostPopularCard>
      </div>
    </div>
  );
}

export default MostPopularCards;
