import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-loading-skeleton/dist/skeleton.css'

function Conscious() {
  const [data, setData] = useState({ general_content_top: '', general_content_bottom: '', testimonials_conscious: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.earthyhues.com/api-conscious-travel');
        setData(response.data);
      } catch (error) {
        console.error("Error in Fetching Data", error);
      }
    };
    fetchData();
  }, []);

  // if(!data){
  //   <Loading/>
  // }
  
  
  return (
    <div>
      <section className="page-header">
        <div className="page-header__bg" />
        <div className="container">
          <div className="page-header__breadcrumb-box">
            <ul className="trevlo-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Conscious Travel</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="tour-listing-details tour-listing-details-right section-space">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="destination-details__card">
                <div className="destination-details__card-content">
                  <h3 className="destination-details__card-title destination-details__title main-heading-title">
                    Conscious Travel
                  </h3>
                  <p className="destination-details__card-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" dangerouslySetInnerHTML={{ __html: data.general_content_top }}></p>
                  <br />
                  {data.testimonials_conscious.map((item) => (
                    <div className="product-details__reviews" key={item.testimonials_id}>
                      <div className="container">
                        <div className="product-details__reviews-comment">
                          <div className="product-details__reviews-comment-box">
                            <div className="w-100 rounded wow animated fadeInUp mt-5" data-wow-delay="0.1s" data-wow-duration="1500ms">
                              <img src={item.testimonials_image} alt={item.testimonials_url} className='mt-3'/>
                            </div>
                            <div className="product-details__reviews-content wow animated fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">
                              <div className="product-details__reviews-inner-content">
                                <div className="product-details__reviews-info">
                                  <h3 className="product-details__reviews-name">
                                    {item.testimonials_name}
                                  </h3>
                                </div>
                                <div className="trevlo-ratings">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                                
                              </div>
                              <p className="product-details__reviews-text" dangerouslySetInnerHTML={{ __html: item.testimonials_details}}>
                               
                              </p>
                              <div className="product-details__reviews-date">
                                <p>
                                  - Written By <span className="product-details__reviews-date-text" dangerouslySetInnerHTML={{ __html: item.testimonials_author}}></span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <p className="destination-details__card-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" dangerouslySetInnerHTML={{ __html: data.general_content_bottom }}></p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
          <div className="sidebar-blog sidebar-blog--left">
            <aside className="widget-area">
              <div
                className="sidebar-blog__single sidebar-blog__single--posts wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
              >
                 <h4 className="sidebar-blog__title">Featured Article by HT</h4>
                <img src="./assets/img/HT feature1.jpg" alt="" className='w-100'/>
                <p className="sidebar-blog__posts-title pt-3">We are excited to be featured in Hindustan Times for our insights on sustainable travel practices. We feel honored to have the opportunity to share our perspectives on eco-conscious travel with a larger audience.@earthyhuestours we support sustainable travel that protects the environment supports local communities, preserves cultural heritage, and promotes personal enrichment.We can take some simple steps to reduce our impact and ensure that future generations can also enjoy the world's beauty and diversity.</p>
                
                <a href="https://www.earthyhues.com/sites/all/themes/bootstrap/HT feature1.jpg" className="comment-box__btn trevlo-btn trevlo-btn--white-two"><span className='px-5'>View my Article
                </span></a>
                <a href="https://www.earthyhues.com/sites/all/themes/bootstrap/HT feature.jpeg" className="comment-box__btn trevlo-btn trevlo-btn--white-two mt-3"><span className='px-5'>View whole Page</span></a>
                
              </div>
            </aside>
          </div>
        </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Conscious;
