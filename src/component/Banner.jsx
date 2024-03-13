import React,{ useState,useEffect}  from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import TextTransition, { presets } from 'react-text-transition';
import Typewriter from 'typewriter-effect';



const Banner = () => {
    // const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [data,setData] = useState([]);
  const [cap,setCap] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.earthyhues.com/home-page-banner")
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length >= 2) {
          setData(response.data[1]);console.log(response.data);
          if (Array.isArray(response.data[0].banner_caption)) {
            setCap(response.data[0].banner_caption);
            console.log(response.data.banner_caption);
          } else {
            console.error("Invalid banner caption data format");
          }
        } else {
          console.error("Invalid response format or insufficient data");
        } 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 
  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <section className="main-slider-three">
      <div className="container">
        <div className="main-slider-three__content">
          <h5
            className="main-slider-three__sub-title wow fadeInUp"
            data-wow-delay="200ms"
          >
            Plan to Travel Everywhere
          </h5>
          <h3
            className="main-slider-three__title wow fadeInUp"
            data-wow-delay="300ms"
          >
            Let’s plan your <br />
            trip with us
          </h3>
          <div
            className="main-slider-three__btn wow fadeInUp"
            data-wow-delay="400ms"
          >
            <a href="contact.html" className="trevlo-btn trevlo-btn--base">
              <span>Start Booking</span>
            </a>
          </div>
        </div>
        <div className="banner-form wow fadeInUp" data-wow-delay="300ms">
          <div className="container">
            <form
              className="banner-form__wrapper"
              action="https://bracketweb.com/trevlo-html/tour-listing-top-search.html"
            >
              <div className="row">
                <div className="col-lg-4">
                  <div className="banner-form__control">
                    <label htmlFor="location">Location</label>
                    <select name="location" classname="selectpicker" id="location">
                      <option value="select">Where to Next?</option>
                      <option value="spain">Spain</option>
                      <option value="africa">Africa</option>
                      <option value="europe">Europe</option>
                      <option value="thailand">Thailand</option>
                      <option value="dubai">Dubai</option>
                      <option value="australia">Australia</option>
                      <option value="swizerlan">Swizerlan</option>
                    </select>
                    <i className="icon-location-2" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="banner-form__control">
                    <label htmlFor="type">Type</label>
                    <select name="type" classname="selectpicker" id="type">
                      <option value="select">Booking Type</option>
                      <option value="spain">Adventure</option>
                      <option value="africa">Beach</option>
                      <option value="europe">Discovery</option>
                      <option value="thailand">Mountain</option>
                      <option value="dubai">Hills</option>
                      <option value="australia">Couple</option>
                    </select>
                    <i className="icon-hiking" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="banner-form__control">
                    <label htmlFor="date">Date From</label>
                    {/* <input
                      className="trevlo-multi-datepicker"
                      id="date"
                      type="text"
                      name="date"
                      placeholder="Select Date"
                    /> */}
                    <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                    />
                    <i className="icon-calendar-5" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="banner-form__control">
                    <label htmlFor="guests">Guests</label>
                    <button className="banner-form__qty-minus sub">
                      <i className="icon-minus-3" />
                    </button>
                    <input
                      id="guests"
                      type="number"
                      defaultValue={2}
                      name="guests"
                      placeholder={2}
                    />
                    <button className="banner-form__qty-plus add">
                      <i className="icon-plus-3" />
                    </button>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="banner-form__btn">
                    <div className="banner-form__filter">
                      <span className="icon-filter" />
                    </div>
                    <button
                      type="submit"
                      aria-label="search submit"
                      className="trevlo-btn trevlo-btn--base"
                    >
                      <span>
                        <i className="icon-search" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="banner-form__popup">
            <div className="banner-form__popup__slider-wrapper">
              <form action="#" method="get" className="clearfix">
                <div id="slider-ranger" />
              </form>
            </div>
            <h3 className="banner-form__popup__title">Language</h3>
            <ul className="banner-form__popup__checkbox">
              <li>
                <input type="checkbox" name="english" id="english" />
                <label htmlFor="english">
                  <span />
                  English
                </label>
              </li>
              <li>
                <input type="checkbox" name="french" id="french" />
                <label htmlFor="french">
                  <span />
                  French
                </label>
              </li>
              <li>
                <input type="checkbox" name="german" id="german" />
                <label htmlFor="german">
                  <span />
                  German
                </label>
              </li>
              <li>
                <input type="checkbox" name="japanese" id="japanese" />
                <label htmlFor="japanese">
                  <span />
                  Japanese
                </label>
              </li>
              <li>
                <input type="checkbox" name="thailand" id="thailand" />
                <label htmlFor="thailand">
                  <span />
                  Thailand
                </label>
              </li>
              <li>
                <input type="checkbox" name="arabic" id="arabic" />
                <label htmlFor="arabic">
                  <span />
                  Arabic
                </label>
              </li>
            </ul>
            <h3 className="banner-form__popup__title">Amenities</h3>
            <ul className="banner-form__popup__checkbox">
              <li>
                <input type="checkbox" name="Accepts" id="Accepts" />
                <label htmlFor="Accepts">
                  <span />
                  Accepts Credit Cards
                </label>
              </li>
              <li>
                <input type="checkbox" name="Parking" id="Parking" />
                <label htmlFor="Parking">
                  <span />
                  Car Parking
                </label>
              </li>
              <li>
                <input type="checkbox" name="Coupons" id="Coupons" />
                <label htmlFor="Coupons">
                  <span />
                  Free Coupons
                </label>
              </li>
              <li>
                <input type="checkbox" name="Laundry" id="Laundry" />
                <label htmlFor="Laundry">
                  <span />
                  Laundry Service
                </label>
              </li>
              <li>
                <input type="checkbox" name="Outdoor" id="Outdoor" />
                <label htmlFor="Outdoor">
                  <span />
                  Outdoor Seating
                </label>
              </li>
              <li>
                <input type="checkbox" name="Reservations" id="Reservations" />
                <label htmlFor="Reservations">
                  <span />
                  Reservations
                </label>
              </li>
              <li>
                <input type="checkbox" name="Restaurant" id="Restaurant" />
                <label htmlFor="Restaurant">
                  <span />
                  Restaurant
                </label>
              </li>
              <li>
                <input type="checkbox" name="Smoking" id="Smoking" />
                <label htmlFor="Smoking">
                  <span />
                  Smoking Allowed
                </label>
              </li>
              <li>
                <input type="checkbox" name="Internet" id="Internet" />
                <label htmlFor="Internet">
                  <span />
                  Wireless Internet
                </label>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      {/* banner-form */}

      <div
        className="main-slider-three__shape-one"
        style={{
          backgroundImage: "url(assets/images/shapes/slider-3-shape-1.png)"
        }}
      />
      {/*<div class="main-slider-three__image wow fadeInRight" data-wow-delay="200ms" style="background-image: url(assets/images/backgrounds/slider-3-1.jpg);"></div>*/}
      <div className="main-slider-three__image wow fadeInRight" data-wow-delay="200ms">
        <div
          className="main-slider-one__carousel trevlo-owl__carousel owl-carousel owl-theme"
          data-owl-options='{
          "items": 1,
          "margin": 10,
          "loop": true,
          "smartSpeed": 700,
          "animateOut": "fadeOut",
          "autoplayTimeout": 5000, 
          "nav": true,
          "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"],
          "dots": false,
          "autoplay": true
          }'
        >
        <div className="item">
          <Carousel autoPlay={true} autoPlaySpeed={3000} infiniteLoop={true} showIndicators={true} showThumbs={false} showArrows={false}>
            {data.map((item) => (
              <div key={item.banner_id}>
                {/* <img src={item.small} alt={item.image_name} /> */}
                <div className="main-slider-one__image"
                  style={{
                    backgroundImage: `url(${item.small})`,
                    borderRadius: "0 0 0 55px"
                  }}
                
                />
              </div>
              
            ))}
          </Carousel>
          
            
              <div className="container">
                <div className="main-slider-one__content">
                    {/* <Carousel autoPlay={true} autoPlaySpeed={3000} infiniteLoop={true} showIndicators={false} showThumbs={false} showArrows={false} showStatus={false}>
                      {cap.map((item) => (
                        <h3 className="main-slider-one__title" >
                          Find Your &nbsp;
                            <span className="font-bernadette-rough font-size" key={item.banner_id} >{item.banner_text}</span>
                            <img src="assets/images/shapes/slider-1-shape-2.png" alt="trevlo"/> 
                        </h3>
                      ))}
                    </Carousel> */}
                          {/* <h2 class="rw-sentence">
					
                            <h3 className="rw-words rw-words-1 main-slider-one__title">
                            Find Your &nbsp;
                            {cap.map((item) => (
                              <span className="font-bernadette-rough font-size" key={item.banner_id}>{item.banner_text}</span>
                              ))}
                            </h3>
                        </h2> */}
                        <div className="content w-100 my-5 py-5">
                          <div class="w-100">
                            
                            <div className="d-flex justify-content-center">
                            {/* {cap.map((item) => ( 
                              <div key={item.banner_id}>*/}
                               <span className='display-4 main-slider-three__title'> Find Your&nbsp;</span>&nbsp;
                                <Typewriter 
                                  options={{
                                    strings: cap.map((item) => `<span class="font-bernadette-rough display-4">${item.banner_text}</span>`),
                                    autoStart: true,
                                    loop: true,
                                    cursor: '',
                                  }}
                                />
                              {/* </div> 
                             ))}*/}
                             
                              {/*<TextTransition springConfig={presets.wobbly} className="ml-5 my-5 py-5"> 
                                   <p class="content__container__list__item font-bernadette-rough font-size py-5 mt-2 "  key={item.banner_id}> {item.banner_text}</p> 
                                   Find Your
                                  <span class="content__container__list__item font-bernadette-rough font-size py-5 mt-5 "  key={item.banner_id}> {item.banner_text}</span>
                                  
                            </TextTransition>*/}
                            </div>
                          </div>
                        </div>
              </div>
        </div>
      
          
        
        </div>
        </div>
      </div>
      </section>
  )
}

export default Banner
