import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Destinations = () => {
  const { destination_id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.earthyhues.com/destinations/${destination_id}`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching destination:', error.response.data);
      }
    };
    
    fetchData();
  }, [destination_id]);

  return (
    <>
      <section className="page-header">
        {/* <div className="page-header__bg" /> */}
        <div className="container">
        {/* <h2 className="offer-one__heading sec-title__heading " >
        
          </h2> */}
          <h3
            className="offer-one__heading sec-title__heading text-left"
            style={{
              marginTop: "-62px",
              paddingLeft: '200',
              fontSize: "25px!important",
              left: 23
            }}>
            <span className="font-bernadette-rough display-4" style={{ fontSize: 51 }}>
            {data.destination?.[0]?.destination_name}
            </span>
          </h3>

          {/* <div className="page-header__breadcrumb-box">
            <ul className="trevlo-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>{data.destination?.[0]?.destination_name}</li>
            </ul>
          </div> */}
        </div>
      </section>
      <section className="destination-details section-space">
        <div className="container">
        <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="destination-details__card">
                <div className="destination-details__card-content">
                <h3 className="destination-details__card-title destination-details__title main-heading-title">
                  {data.destination?.[0]?.destination_name}
                </h3>
                <p  className="destination-details__card-text wow animated fadeInUp" data-wow-delay="0.1s"  data-wow-duration="1500ms" dangerouslySetInnerHTML={{__html: data.destination?.[0]?.destination_content}}>
                    {}
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                  {data.location?.map((location) => (
                <div className="col-xl-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                    <div key={location.location_id} className="tour-listing__card">
                    <a href="/" className="tour-listing__card-image-box">
                      <img src={location.location_img_small} alt="assets/images/tours/tour-3-1.jpg"  className="tour-listing__card-image" style={{aspectRatio:'3/2'}}/>
                        <div className="tour-listing__card-image-overlay" />
                    </a>
                    <a href="/" className="tour-listing__card-wishlist">
                      <span className="icon-heart" />
                    </a>
                    <div className="tour-listing__card-content">
                        <div className="tour-listing__card-camera-group">
                        {/* <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="tour-listing__card-camera-btn video-popup"
                        >
                            <span className="icon-video-camera-1-1" />
                        </a> */}
                        </div>
                        <h3 className="tour-listing__card-title">
                          <a href="tour-listing-details-right.html">
                            {/* Turkey Balloons flying */}
                            {location.location_name}
                          </a>
                        </h3>
                        <p className="tour-listing__card-text text-small" dangerouslySetInnerHTML={{__html: location.location_details.substring(0,250)}}>
                        
                        </p>
                        <Link to={'/'} className='trevlo-btn trevlo-btn--base text-white'>
                          <span>Read more</span>
                        </Link>
                    </div>
                    </div>
                </div>
                    ))}
                </div>
            </div>
            </div>
            {/* /.col-xl-8 col-lg-7 */}
            <div className="col-xl-4 col-lg-5">
              <aside className="destination-sidebar">
                <div className="destination-sidebar__tour destination-sidebar__single">
                  <h3 className="destination-sidebar__tour-top-title">Packages</h3>
                  <div className="destination-sidebar__tour-box">
                    {data.packages?.map((packageItem) => (
                      <div key={packageItem.package_id} className="destination-sidebar__tour-item">
                        <div className="destination-sidebar__tour-img mt-2">
                          <img src={packageItem.package_img} alt="destination-tour" style={{aspectRatio: '3/2'}}/>
                        </div>
                        <div className="destination-sidebar__tour-content">
                          <h4 className="destination-sidebar__tour-title">
                            <a href={`/${packageItem.package_url}`}>
                              {packageItem.package_title}
                            </a>
                          </h4>
                          <p className="destination-sidebar__tour-location-text text-small">
                            {packageItem.package_intro.substring(0,70)}...
                          <Link to={'/'}>Read more</Link>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
        </div>
        </div>
    </section>
    </>
  );
};

export default Destinations;
