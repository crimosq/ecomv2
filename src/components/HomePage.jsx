import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const HomePage = () => {
 
  return (
    <div>
      <section className="banner-container">
        <video className='banner' autoPlay loop muted>
          <source src="images/watch_hero.mp4" type="video/mp4" />
        </video>
      </section>

      <article className="discount-card">
        <p className="deal">Use promo code justin for Up to 25% off</p>
      </article>

      <section className="watch-container">
        <div className="w-container">
          <h1 className="image-title"> New Releases</h1>
          <img className='feautred-watch' src='images/featuredOne.jpg' alt="Maurice" />
        </div>

        <div className="w-container">
        <h1 className="image-title">Coming Soon</h1>
          <img className='feautred-watch' src='images/watch-test.png' alt="Maurice" />
        </div>

        <div className="w-container">
        <h1 className="image-title">Get Connected</h1>
          <img className='feautred-watch' src='images/featuredThree.jpg' alt="Maurice" />
        </div>
      </section>

      <h2 className="header-pop">Featured</h2>

      <div className='swiper-container'>

     
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}

      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="box-pop">
         
            <img className='img-c' src='images/AIKON_Automatic_Chronograph_Blue.png' alt="Maurice" />
            <h4>Maurice Lacroix</h4>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="box-pop">
         
            <img className='img-c' src='images/A-15_Pilot_png.webp' alt="Bulova" />
            <h4>Bulova</h4>  
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="box-pop">
          
            <img className='img-c' src='images/grandseiko.png' alt="Grand Seiko" />
            <h4>Grand Seiko</h4>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>


    

      <section className="container-promo">
        <div className="box-1">
          <img className='img-h' src='images/cc.png' alt="High Quality, Low Prices" />
          <h2>Curated Collection</h2>
          <p className="description">We work with leading luxury brands to provide the best selection for discerning collectors.</p>
        </div>

        <div className="box-1">
          <img className='img-h' src='images/shipping.png' alt="Hassle-free Returns" />
          <h2>Shipping + Fulfillment</h2>
          <p className="description">If an item doesn't work out, just let us know. We'll take care of it.</p>
        </div>

        <div className="box-1">
          <img className='img-h' src='images/cs.png' alt="24/7 Support" />
          <h2>Customer Support</h2>
          <p className="description">Got questions? We got you 24/7. Our watch experts are just a call, e-mail or chat away.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
