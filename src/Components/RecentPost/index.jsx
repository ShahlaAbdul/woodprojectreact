import React from 'react';
import './style.css'
import MostPopularCard from '../MostPopularCard';
import ButtonRecentPost from '../RecentPostButton';

function RecentPost() {
  return (
    <div>
      <div className="recentPost">
        <div className="recentPostText">
          <h2>RECENT POSTS FROM OUR BLOG</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className="recentPostCards">
          <div className="recentPostCard1">
            <MostPopularCard
              img={
                "https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg"
              }
              cardbutton={
                <ButtonRecentPost
                  title={<span>travel</span>}
                  newtitle={<span>visit us</span>}
                ></ButtonRecentPost>
              }
              title={<h5>LOW COST ADVERTISING</h5>}
              newtitle={
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least
                  had it related to you A farmer.
                  <br /> <span>31st January, 2018</span>
                </p>
              }
            ></MostPopularCard>
          </div>

          <div className="recentPostCard1">
            <MostPopularCard
              img={
                "https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-2.jpg"
              }
              cardbutton={
                <ButtonRecentPost
                  title={<span>travel</span>}
                  newtitle={<span>visit us</span>}
                ></ButtonRecentPost>
              }
              title={<h5>LOW COST ADVERTISING</h5>}
              newtitle={
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least
                  had it related to you A farmer.
                  <br /> <span>31st January, 2018</span>
                </p>
              }
            ></MostPopularCard>
          </div>

          <div className="recentPostCard1">
            <MostPopularCard
              img={
                "https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-3.jpg"
              }
              cardbutton={
                <ButtonRecentPost
                  title={<span>travel</span>}
                  newtitle={<span>visit us</span>}
                ></ButtonRecentPost>
              }
              title={<h5>LOW COST ADVERTISING</h5>}
              newtitle={
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least
                  had it related to you A farmer.
                  <br /> <span>31st January, 2018</span>
                </p>
              }
            ></MostPopularCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPost;
