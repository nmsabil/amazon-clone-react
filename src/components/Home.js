import React from "react";
import "../css/Home.css";
import Slider from "infinite-react-carousel";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <Slider autoplay={true} duration={300} autoplaySpeed={7000}>
          <div>
            <img className='home__image' src={img4} alt='' />
          </div>
          <div>
            <img className='home__image' src={img1} alt='' />
          </div>
          <div>
            <img className='home__image' src={img2} alt='' />
          </div>
          <div>
            <img className='home__image' src={img3} alt='' />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
