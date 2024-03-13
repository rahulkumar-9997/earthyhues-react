import React from 'react'

const About = () => {
  return (
    <section className="about-three">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
          <div className="about-three__content">
            <div className="sec-title text-left">
              <p className="sec-title__tagline">GET TO KNOW US</p>
              {/* /.sec-title__tagline */}
              <h2 className="sec-title__title">
                Experience the World with Trevlo Company
              </h2>
              {/* /.sec-title__title */}
            </div>
            {/* /.sec-title */}
            {/* /.sec-title */}
            <p className="about-three__content__text">
              There are many variations of passages of Lorem Ipsum avagtilable,
              but the majority have passages of Lorem Ipsum suffered alteration
              in some There are many variations of passages of Lorem Ipsum
            </p>
            <h5 className="about-three__content__quote">
              The generated Lorem Ipsum is therfore always free from repetition,
              injected humour, or
            </h5>
            <ul className="about-three__content__list">
              <li>
                <span className="fas fa-check-circle" />
                Many variations of passages of Lorem Ipsum
              </li>
              <li>
                <span className="fas fa-check-circle" />
                Expert Many variations Teacher
              </li>
            </ul>
            <a href="about.html" className="trevlo-btn trevlo-btn--base">
              <span>Discover More</span>
            </a>
          </div>
          {/* /.about-four__content */}
        </div>
        {/* /.col-xl-6 col-lg-6 */}
        <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
          <div className="about-three__image">
            <div
              className="about-three__image__one trevlo-tilt"
              data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 3, "speed": 700, "scale": 1 }'
            >
              <img src="assets/images/resources/about-3-1.jpg" alt="trevlo" />
            </div>
            <div
              className="about-three__image__right wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div
                className="about-three__counter"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/about-1-shape-4.png)"
                }}
              >
                <div className="about-three__counter__number count-box">
                  <span
                    className="count-text"
                    data-stop={30}
                    data-speed={1500}
                  />
                  %
                </div>
                {/* /.counter__number */}
                <p className="about-three__counter__title">Discount</p>
                {/* /.counter__title */}
              </div>
              {/* /.discount */}
              <div className="about-three__image__two">
                <img src="assets/images/resources/about-3-2.png" alt="trevlo" />
              </div>
            </div>
            <div
              className="about-three__info wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="about-three__info__icon">
                <span className="icon-telephone-call-1" />
              </div>
              <h5 className="about-three__info__title">
                Do You Still Have Question?
              </h5>
              <p className="about-three__info__text">Call Anytime</p>
              <h4 className="about-three__info__number">
                <a href="tel:+91 8904278007">+91 8904278007</a>
              </h4>
            </div>
          </div>
          {/* /.about-three__image */}
        </div>
        {/* /.col-xl-6 col-lg-6 */}
      </div>
      {/* /.row */}
    </div>
  </section>
  )
}

export default About
