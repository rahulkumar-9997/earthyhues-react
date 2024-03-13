import React from 'react'

function Footer() {
  return (
      <footer className="main-footer @@extraClassName">
        <div
        className="main-footer__bg"
        style={{
            backgroundImage: "url(assets/images/backgrounds/footer-bg.png)"
        }}
        />
        {/* /.main-footer__bg */}
        <div className="container">
        <div className="row">
            {/* /.col-md-6 */}
            <div
            className="col-lg-7 col-xl-4 wow animated fadeInUp"
            data-wow-delay="0.7s"
            data-wow-duration="1500ms"
            >
            <div className="footer-widget footer-widget--newsletter">
                <h2 className="footer-widget__title">Company</h2>
                <div className="main-footer__logo-box">
                <img
                    src="../assets/earthyhues-image/logo.png"
                    alt="logo-dark"
                    className="main-footer__logo"
                />
                </div>
                <ul className="main-footer__social">
                <li className="main-footer__social-item">
                    <a
                    href="https://facebook.com/"
                    className="main-footer__social-link"
                    >
                    <i className="fab fa-facebook-f" />
                    </a>
                </li>
                <li className="main-footer__social-item">
                    <a
                    href="https://linkedin.com/"
                    className="main-footer__social-link"
                    >
                    <i className="fab fa-linkedin-in" />
                    </a>
                </li>
                <li className="main-footer__social-item">
                    <a
                    href="https://twitter.com/"
                    className="main-footer__social-link"
                    >
                    <i className="fab fa-twitter" />
                    </a>
                </li>
                <li className="main-footer__social-item">
                    <a
                    href="https://youtube.com/"
                    className="main-footer__social-link"
                    >
                    <i className="fab fa-youtube" />
                    </a>
                </li>
                </ul>
                <div className="mc-form__response" />
                {/* /.mc-form__response */}
            </div>
            {/* /.footer-widget */}
            </div>
            {/* /.col-md-6 */}
            <div
            className="col-lg-3 col-md-4 col-sm-6 col-xl-2 wow animated fadeInUp"
            data-wow-delay="0.1s"
            data-wow-duration="1500ms"
            >
            <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">About Us</h2>
                {/* /.footer-widget__title */}
                <ul className="footer-widget__links">
                <li>
                    <a href="/">Destinations</a>
                </li>
                <li>
                    <a href="/">Passion</a>
                </li>
                <li>
                    <a href="/">Privacy Policy</a>
                </li>
                <li>
                    <a href="/">Testimonial</a>
                </li>
                <li>
                    <a href="/WBlog">Custom Tour</a>
                </li>
                </ul>
                {/* /.footer-widget__links */}
            </div>
            {/* /.footer-widget */}
            </div>
            {/* /.col-md-6 */}
            <div
            className="col-lg-3 col-md-4 col-sm-6 col-xl-2 wow animated fadeInUp"
            data-wow-delay="0.3s"
            data-wow-duration="1500ms"
            >
            <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Explore</h2>
                {/* /.footer-widget__title */}
                <ul className="footer-widget__links">
                <li>
                    <a href="/">Our Story</a>
                </li>
                <li>
                    <a href="/">Why Earthy Hues?</a>
                </li>
                <li>
                    <a href="/">Conscious Travel</a>
                </li>
                <li>
                    <a href="/WBlog">Refund Policy</a>
                </li>
                <li>
                    <a href="/">Terms of Service</a>
                </li>
                </ul>
                {/* /.footer-widget__links */}
            </div>
            {/* /.footer-widget */}
            </div>
            {/* /.col-md-6 */}
            <div
            className="col-lg-6 col-md-4 col-xl-4 wow animated fadeInUp"
            data-wow-delay="0.5s"
            data-wow-duration="1500ms"
            >
            <div className="footer-widget footer-widget--contact">
                <h2 className="footer-widget__title">Contact</h2>
                {/* /.footer-widget__title */}
                <p className="footer-widget__address">
                2210, 2nd Floor,
                <br />
                2nd Main Road, 6th Block,
                <br />
                Jayanagar, Bangalore,
                <br />
                Karnataka - 560070
                </p>
                <ul className="footer-widget__info">
                <li>
                    {" "}
                    <span className="icon-phone-1" />{" "}
                    <a href="tel:+91 89042 78007">+91 89042 78007</a>
                </li>
                <li>
                    {" "}
                    <span className="icon-envelope" />{" "}
                    <a href="mailto:info@earthyhues.com">info@earthyhues.com</a>
                </li>
                </ul>
                {/* /.footer-widget__info */}
            </div>
            {/* /.footer-widget */}
            </div>
        </div>
        {/* /.row */}
        </div>
        {/* /.container */}
        <div className="main-footer__bottom">
        <div className="container">
            <div className="main-footer__bottom-inner">
            <p className="main-footer__copyright">
                © Copyright <span className="dynamic-year" /> by{" "}
                <a
                href="https://www.inforbit.in"
                className="copyright-a"
                target="blank"
                >
                Semi Colon Solutions
                </a>{" "}
                All Rights Reserved.
            </p>
            </div>
            {/* /.main-footer__inner */}
        </div>
        {/* /.container */}
        </div>
        {/* /.main-footer__bottom */}
    </footer>
  )
}

export default Footer
