import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Article from './Article';
import Testmonial from './Testimonial';
import About from './About';
import Header from './Header';
import Banner from './Banner';
import Places from './Places'; 
import Blog from './HomeBlog';
import Upcomingtrip from './Upcomingtrip';
import HomeDestination from './HomeDestination';

const Home = () => {
  const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get('https://www.earthyhues.com/api-home-page-video')
                setData(response.data)
            }catch(error){
                console.error('Error fetching Testimonial:',error)
            }
        };
        fetchData() 
    },[])

  return (
    <>
  {/* <div className="custom-cursor__cursor" />
  <div className="custom-cursor__cursor-two" /> */}
  
  <div className="page-wrapper">
    <Header/>
    {/* /.main-header */}
    {/* main-slider-start */}
    <Banner/>
    {/* main-slider-end */}
    <Upcomingtrip/>
    {/* /.tour-type */}
  
  {/* About Start */}
    <About/>
  {/* About End */}
  
  {/* Tour Listing two Start */}
  {/* <Places/> */}
  {/* Tour Listing two End */}

  {/* CTA Two End */}
  <section className="video-one">
    <div className="video-one__bg jarallax" data-jarallax="" data-speed="0.3"
      data-imgposition="50% -100%" style={{backgroundImage: "url(assets/images/backgrounds/video-bg-1.jpg)"}} />
    <div className="container">
      <div className="video-one__content wow fadeInUp" data-wow-delay="100ms">
        {/* <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="video-popup">
          <i className="fa fa-play" />
        </a>
        <h5 className="video-one__sub-title">Are you ready to travel?</h5>
        <h2 className="video-one__title">
          Tevily is a World LeadingOnline
          <br /> Tour Booking Platform
        </h2> */}
        <div className="row">
          {data.map((item)=>(
            <div className="col-lg-6" key={item.id}>
            <iframe src={item.youtube_video_src} title="video section" style={{width:'100%',height:'60vh'}}></iframe>
            {/* <video width={320} height={240} controls>
              <source src={item.youtube_video_src} type="video/mp4" />
              <source src={item.youtube_video_src} type="video/mp4" />
            </video> */}
          </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  <section className="tour-type">
    <div
      className="tour-type__bg"
      style={{ backgroundImage: "url(assets/images/shapes/tour-type-bg.png)" }}
    />
    {/* /.tour-type__bg */}
    <div className="container">
      <div className="sec-title text-center">
        <p className="sec-title__tagline">Testimonial</p>
        <h2 className="sec-title__title">Choose Tour Types</h2>
      </div>
      <div className="row">
        <div className="col-xl-3 wow fadeInUp" data-wow-delay="100ms">
          <div className="tour-type__box">
            <div className="tour-type__box__icon">
              <span className="icon-windsurfing-2" />
            </div>
            <h3 className="tour-type__box__title">Windsurfing</h3>
          </div>
        </div>
        <div className="col-xl-3 wow fadeInUp" data-wow-delay="150ms">
          <div className="tour-type__box">
            <div className="tour-type__box__icon">
              <span className="icon-paragliding-5" />
            </div>
            <h3 className="tour-type__box__title">Paragliding</h3>
          </div>
        </div>
        <div className="col-xl-3 wow fadeInUp" data-wow-delay="200ms">
          <div className="tour-type__box">
            <div className="tour-type__box__icon">
              <span className="icon-hiking-4" />
            </div>
            <h3 className="tour-type__box__title">Adventure</h3>
          </div>
        </div>
        <div className="col-xl-3 wow fadeInUp" data-wow-delay="250ms">
          <div className="tour-type__box">
            <div className="tour-type__box__icon">
              <span className="icon-hang-gliding-3" />
            </div>
            <h3 className="tour-type__box__title">Hang Gliding</h3>
          </div>
        </div>
        <div className="col-xl-3 wow fadeInUp" data-wow-delay="300ms">
          <div className="tour-type__box">
            <div className="tour-type__box__icon">
              <span className="icon-deer-silhouette-1" />
            </div>
            <h3 className="tour-type__box__title">Wildlife</h3>
          </div>
        </div>
      </div>
    </div> 
  </section>
  {/* /.tour-type */}
  {/* /.client-carousel */}

  {/* Destination Start */}
  <HomeDestination/>
  {/* Destination End */}
  
  {/* Counter Three Start */}
  <section className="counter-three">
    <div
      className="counter-three__bg"
      style={{ backgroundImage: "url(assets/images/shapes/counter-bg-3.png)" }}
    />
    <div className="counter-three__shape-top" />
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-md-12 wow fadeInUp" data-wow-delay="100ms">
          <div className="sec-title text-left">
            <p className="sec-title__tagline">Are you ready to travel</p>
            {/* /.sec-title__tagline */}
            <h2 className="sec-title__title">
              Choose Our Tour Types
              <br /> &amp; Enjoy Now
            </h2>
            {/* /.sec-title__title */}
          </div>
          {/* /.sec-title */}
          {/* /.sec-title */}
          <p className="counter-three__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteradution in some form by injected
            humour, some form
          </p>
        </div>
        <div className="col-xl-2 col-md-4 wow fadeInUp" data-wow-delay="100ms">
          <div className="counter-three__box @@extraClassName">
            <div className="counter-three__box__icon">
              <span className="icon-happy-Travel" />
            </div>
            {/* /.counter-box__icon */}
            <h3 className="counter-three__box__number count-box">
              <span className="count-text" data-stop="30.3" data-speed={1500} />
              30.3k
            </h3>
            <p className="counter-three__box__title">Happy Traveller</p>
          </div>
        </div>
        {/* /.col-xl-2 col-md-4 */}
        <div className="col-xl-2 col-md-4 wow fadeInUp" data-wow-delay="200ms">
          <div className="counter-three__box @@extraClassName">
            <div className="counter-three__box__icon">
              <span className="icon-tent-1" />
            </div>
            {/* /.counter-box__icon */}
            <h3 className="counter-three__box__number count-box">
              <span className="count-text" data-stop="40.5" data-speed={1500} />
              40.5k
            </h3>
            <p className="counter-three__box__title">Tent Sites</p>
          </div>
        </div>
        {/* /.col-xl-2 col-md-4 */}
        <div className="col-xl-2 col-md-4 wow fadeInUp" data-wow-delay="300ms">
          <div className="counter-three__box @@extraClassName">
            <div className="counter-three__box__icon">
              <span className="icon-satisfied" />
            </div>
            {/* /.counter-box__icon */}
            <h3 className="counter-three__box__number count-box">
              <span className="count-text" data-stop="88.9" data-speed={1500} />
              88.9%
            </h3>
            <p className="counter-three__box__title">Satisfaction Rate</p>
          </div>
        </div>
        {/* /.col-xl-2 col-md-4 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
    <div className="counter-three__shape-bottom" />
  </section>

  <section className="destination-three">
    <div className="container">
      <Places/>
    </div>
  </section>


  {/* Counter Three End */}
  

  <section className="why-choose-three">
    <div
      className="why-choose-three__bg"
      style={{
        backgroundImage: "url(assets/images/shapes/why-choose-3-bg.png)"
      }}
    />
    {/* /.why-choose__bg */}
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="why-choose-three__content">
            <div className="sec-title text-left">
              <p className="sec-title__tagline">Our Benefits List</p>
              {/* /.sec-title__tagline */}
              <h2 className="sec-title__title">
                Why You Should Choose
                <br /> Our Trevelo?
              </h2>
              {/* /.sec-title__title */}
            </div>
            {/* /.sec-title */}
            {/* /.sec-title */}
            <p className="why-choose-three__content__text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteradution in some form by
              injected humour, some form
            </p>
            <div className="why-choose-three__box-wrapper">
              <div
                className="why-choose-three__box wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="why-choose-three__box__icon">
                  <span className="icon-airplane-1" />
                </div>
                <h3 className="why-choose-three__box__title">
                  Best Price Guarantee
                </h3>
                <p className="why-choose-three__box__text">
                  There are many variations of passages of Lorem Ipsum{" "}
                </p>
              </div>
              {/* /.why-choose-three__box */}
              <div
                className="why-choose-three__box wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="why-choose-three__box__icon">
                  <span className="icon-ticket-1" />
                </div>
                <h3 className="why-choose-three__box__title">
                  Easy &amp; Quick Booking
                </h3>
                <p className="why-choose-three__box__text">
                  There are many variations of passages of Lorem Ipsum{" "}
                </p>
              </div>
              {/* /.why-choose-three__box */}
              <div
                className="why-choose-three__box wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="why-choose-three__box__icon">
                  <span className="icon-tour-guide-2" />
                </div>
                <h3 className="why-choose-three__box__title">
                  Experienced Guide
                </h3>
                <p className="why-choose-three__box__text">
                  There are many variations of passages of Lorem Ipsum{" "}
                </p>
              </div>
              {/* /.why-choose-three__box */}
            </div>
          </div>
        </div>
        <div className="col-xl-6 wow slideInRight" data-wow-delay="200ms">
          <div className="trevlo-stretch-element-inside-column">
            <div className="why-choose-three__image">
              <img
                src="assets/images/resources/why-choose-3.jpg"
                alt="trevlo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /.container */}
  </section>
  {/* /.why-choose-three */}
  {/* blog-one Start */}
  
  {/* <Article/> */}

  {/* /.blog-one */}
  
  <Testmonial/>

  <Blog/>
  {/* CTA Two Start */}
  {/* <section className="cta-two">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
          <h5 className="cta-two__sub-title">Book Your Trip Now</h5>
          <h3 className="cta-two__title">
            Are You Ready to Travel &amp; Enjoy
          </h3>
        </div>
        <div
          className="col-lg-3 cta-two__btn wow fadeInUp"
          data-wow-delay="200ms"
        >
          <a href="/" className="trevlo-btn">
            <span>Start Booking</span>
          </a>
        </div>
      </div>
    </div>
  </section> */}
  {/* CTA Two End */}

  {/* <Footer/> */}
  
  {/* /.main-footer */}
  {/* /.page-wrapper */}
  <div className="mobile-nav__wrapper">
    <div className="mobile-nav__overlay mobile-nav__toggler" />
    {/* /.mobile-nav__overlay */}
    <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler">
        <i className="fa fa-times" />
      </span>
      <div className="logo-box">
        <a href="index.html" aria-label="logo image">
          <img src="assets/images/logo-dark.png" width={155} alt="" />
        </a>
      </div>
      {/* /.logo-box */}
      <div className="mobile-nav__container" />
      {/* /.mobile-nav__container */}
      <ul className="mobile-nav__contact list-unstyled">
        <li>
          <i className="fa fa-envelope" />
          <a href="mailto:needhelp@trevlo.com">needhelp@trevlo.com</a>
        </li>
        <li>
          <i className="fa fa-phone-alt" />
          <a href="tel:(303)5550105">(303) 555-0105</a>
        </li>
      </ul>
      {/* /.mobile-nav__contact */}
      <div className="mobile-nav__social">
        <a href="https://twitter.com/">
          <i className="fab fa-twitter" aria-hidden="true" />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="https://facebook.com/">
          <i className="fab fa-facebook" aria-hidden="true" />
          <span className="sr-only">Facebook</span>
        </a>
        <a href="https://pinterest.com/">
          <i className="fab fa-pinterest-p" aria-hidden="true" />
          <span className="sr-only">Pinterest</span>
        </a>
        <a href="https://instagram.com/">
          <i className="fab fa-instagram" aria-hidden="true" />
          <span className="sr-only">Instagram</span>
        </a>
      </div>
      {/* /.mobile-nav__social */}
    </div>
    {/* /.mobile-nav__content */}
  </div>
  {/* /.mobile-nav__wrapper */}
  <div className="search-popup">
    <div className="search-popup__overlay search-toggler" />
    {/* /.search-popup__overlay */}
    <div className="search-popup__content">
      <form
        role="search"
        method="get"
        className="search-popup__form"
        action="#"
      >
        <input type="text" id="search" placeholder="Search Here..." />
        <button
          type="submit"
          aria-label="search submit"
          className="search-popup__btn trevlo-btn trevlo-btn--base"
        >
          <span className="icon-search" />
        </button>
      </form>
    </div>
    {/* /.search-popup__content */}
  </div>
  {/* /.search-popup */}
  <a href="/" data-target="html" className="scroll-to-target scroll-to-top">
    <span className="scroll-to-top__text">back top</span>
    <span className="scroll-to-top__wrapper">
      <span className="scroll-to-top__inner" />
    </span>
  </a>
  </div>
</>
  )
}

export default Home
