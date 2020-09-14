import React from "react";
import "../css/Home.css";
import Slider from "infinite-react-carousel";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <Slider
          className='home__slider'
          autoplay={true}
          duration={300}
          autoplaySpeed={7000}
        >
          <div>
            <img className='home__image' src={img4} alt='amazon slider' />
          </div>
          <div>
            <img className='home__image' src={img1} alt='amazon slider' />
          </div>
          <div>
            <img className='home__image' src={img2} alt='amazon slider' />
          </div>
          <div>
            <img className='home__image' src={img3} alt='amazon slider' />
          </div>
        </Slider>
        <div className='home__row'>
          <Product
            id='15'
            title='New Era Kids K 940 Mlb League Basic Neyyan Cap'
            price={15.34}
            image='https://www.dressinn.com/f/13647/136473233/new-era-9-forty-new-york-yankees.jpg'
            rating={4}
          />
          <Product
            id='16'
            title='New Era Kids K 940 Mlb League Basic Neyyan Cap'
            price={15.34}
            image='https://www.dressinn.com/f/13647/136473233/new-era-9-forty-new-york-yankees.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='12'
            title='New Era Kids K 940 Mlb League Basic Neyyan Cap'
            price={15.34}
            image='https://www.dressinn.com/f/13647/136473233/new-era-9-forty-new-york-yankees.jpg'
            rating={4}
          />
          <Product
            id='13'
            title='New Era Kids K 940 Mlb League Basic Neyyan Cap'
            price={15.34}
            image='https://www.dressinn.com/f/13647/136473233/new-era-9-forty-new-york-yankees.jpg'
            rating={4}
          />
          <Product
            id='14'
            title='New Era Kids K 940 Mlb League Basic Neyyan Cap'
            price={15.34}
            image='https://www.dressinn.com/f/13647/136473233/new-era-9-forty-new-york-yankees.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='17'
            title='New Era Kids K 940 Mlb League Basic Neyyan Cap'
            price={15.34}
            image='https://www.dressinn.com/f/13647/136473233/new-era-9-forty-new-york-yankees.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
