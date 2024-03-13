import React, { useState , useEffect } from 'react'
import { useParams , Link} from 'react-router-dom';
import axios from 'axios';

const Passion = () => {
    const { passion_id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.earthyhues.com/passions/${passion_id}`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching Passion:', error);
      }
    };
    
    fetchData();
  }, [passion_id]);

  return (
    <>
    <section className="page-header">
        <div className="page-header__bg" />
        <div className="container">
        {/*<h2 className="page-header__title wow animated fadeInLeft" data-wow-delay="0s" data-wow-duration="1500ms">Destination Details</h2>*/}
        <div className="page-header__breadcrumb-box">
            <ul className="trevlo-breadcrumb">
            <li>
                <a href="./.">Home</a>
            </li>
            <li>{data.passion_name}</li>
            </ul>
        </div>
        </div>
    </section>
    <section className="tour-listing-details tour-listing-details-right section-space">
        <div className="container">
        <div className="row">
            <div className="col-xl-8">
            <div className="tour-listing-details__explore">
                <div
                className="wow animated fadeIn"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                >
                <h3 className="tour-listing-details__title tour-listing-details__explore-title main-heading-title">
                    {data.passion_name}
                </h3>
                </div>
                <p
                className="tour-listing-details__explore-text wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                >
                {data.passion_details}
                </p>
                
            </div>
            <div className="tour-listing-details__similar container-fluid">
                <h3 className="tour-listing-details__title tour-listing-details__similar-title">
                    Our Packages
                </h3>
                <div className="row">
                {data.packages?.map((packageItem) => (
                    <div key={packageItem.package_id} className="col-md-6 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                        <div className="tour-listing__card">
                        <a
                            href="tour-listing-details-right.html"
                            className="tour-listing__card-image-box"
                        >
                            <img
                            src={packageItem.package_img}
                            alt={packageItem.package_title}
                            className="tour-listing__card-image"
                            style={{aspectRatio:'3/2'}}
                            />
                           
                            <div className="tour-listing__card-image-overlay" />
                        </a>
                        <a
                            href="/"
                            className="tour-listing__card-wishlist"
                        >
                            <span className="icon-heart" />
                        </a>
                        <div className="tour-listing__card-content">
                            <div className="tour-listing__card-camera-group">
                            </div>
                            <h3 className="tour-listing__card-title">
                            <a href="tour-listing-details-right.html">
                            {packageItem.package_title}
                            </a>
                            </h3>
                            <p className="tour-listing__card-text text-small">
                            {packageItem.package_intro.substring(0,200)}.
                            </p>
                            <Link to='/package' className=' trevlo-btn trevlo-btn--base text-white'>
                                <span>Explore More</span>
                            </Link>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            </div>
            <div className="col-xl-4">
            <aside className="tour-listing-details__sidebar">
                {/*<div
                    className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-duration="1500ms"
                    >
                <h3 className="tour-listing-details__sidebar-title">
                    Book Tours
                </h3>
                 <form
                    action="https://bracketweb.com/trevlo-html/assets/inc/sendemail.php"
                    className="tour-listing-details__sidebar-form contact-form-validated">
                    <div className="tour-listing-details__sidebar-form-input">
                    <input type="text" placeholder="Where to" name="where_to" />
                    </div>
                    <div className="tour-listing-details__sidebar-form-input">
                    <input type="text" placeholder="When" name="when" />
                    </div>
                    <div className="tour-listing-details__sidebar-form-input">
                    <select
                        className="selectpicker"
                        name="wildlife"
                        aria-label="Wildlife"
                    >
                        <option selected="">Wildlife</option>
                        <option value={1}>Sightseeing</option>
                        <option value={2}>Adventure</option>
                    </select>
                    </div>
                    <div className="tour-listing-details__sidebar-form-input">
                    <input
                        type="text"
                        name="date"
                        placeholder="Select date"
                        id="datepicker"
                        className="tour-listing-details__sidebar-form-date trevlo-datepicker"
                    />
                    <i className="tour-listing-details__sidebar-form-date-arrow fas fa-angle-down" />
                    </div>
                    <div className="tour-listing-details__sidebar-form-input">
                    <select
                        className="selectpicker"
                        name="adventure"
                        aria-label="Adventure"
                    >
                        <option selected="">Adventure</option>
                        <option value={1}>Sightseeing</option>
                        <option value={2}>Wildlife</option>
                    </select>
                    </div>
                    <button
                    type="submit"
                    className="tour-listing-details__sidebar-btn trevlo-btn trevlo-btn--base"
                    >
                    <span>Book Now</span>
                    </button>
                </form> */}
                {/* <div className="result" />
                </div>
                <div
                className="tour-listing-details__sidebar-post-box tour-listing-details__sidebar-single wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                >
                <h3 className="tour-listing-details__sidebar-title tour-listing-details__sidebar-post-title">
                    Last Minute
                </h3>
                <ul className="tour-listing-sidebar-post">
                    <li className="tour-listing-sidebar-post__item">
                    <div className="tour-listing-sidebar-post__image">
                        <img
                        src="assets/images/tours/tour-listing-details-post-1.jpg"
                        alt="last-post"
                        />
                    </div>
                    <div className="tour-listing-sidebar-post__content">
                        <p className="tour-listing-sidebar-post__price">$380</p>
                        <h5 className="tour-listing-sidebar-post__link">
                        <a href="tour-listing-details-right.html">
                            The Complete Web
                        </a>
                        </h5>
                        <div className="tour-listing-sidebar-post__location">
                        <span className="icon-location-1" />
                        <p className="tour-listing-sidebar-post__location-text text-small">
                            Main Street, Brooklyn, NY
                        </p>
                        </div>
                    </div>
                    </li>
                    <li className="tour-listing-sidebar-post__item">
                    <div className="tour-listing-sidebar-post__image">
                        <img
                        src="assets/images/tours/tour-listing-details-post-2.jpg"
                        alt="last-post"
                        />
                    </div>
                    <div className="tour-listing-sidebar-post__content">
                        <p className="tour-listing-sidebar-post__price">$380</p>
                        <h5 className="tour-listing-sidebar-post__link">
                        <a href="tour-listing-details-right.html">
                            The Complete Web
                        </a>
                        </h5>
                        <div className="tour-listing-sidebar-post__location">
                        <span className="icon-location-1" />
                        <p className="tour-listing-sidebar-post__location-text text-small">
                            Main Street, Brooklyn, NY
                        </p>
                        </div>
                    </div>
                    </li>
                    <li className="tour-listing-sidebar-post__item">
                    <div className="tour-listing-sidebar-post__image">
                        <img
                        src="assets/images/tours/tour-listing-details-post-3.jpg"
                        alt="last-post"
                        />
                    </div>
                    <div className="tour-listing-sidebar-post__content">
                        <p className="tour-listing-sidebar-post__price">$380</p>
                        <h5 className="tour-listing-sidebar-post__link">
                        <a href="tour-listing-details-right.html">
                            The Complete Web
                        </a>
                        </h5>
                        <div className="tour-listing-sidebar-post__location">
                        <span className="icon-location-1" />
                        <p className="tour-listing-sidebar-post__location-text text-small">
                            Main Street, Brooklyn, NY
                        </p>
                        </div>
                    </div> 
                    </li>
                </ul>
                </div>*/}

                <div className="row">
                    {data.package_gallery?.map((image) => (
                        <div className="col-lg-4 mb-4 mb-lg-0" key={image.package_gallery_id}>
                            <img src={image.large_image} alt={image.title} className="w-100 h-100" />
                        </div>
                    ))}
                </div>


            </aside>
            </div>
        </div>
        </div>
    </section>
    </>

  )
}

export default Passion
