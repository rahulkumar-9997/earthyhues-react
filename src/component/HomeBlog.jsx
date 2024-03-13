import React, { useState, useEffect }  from 'react'

const HomeBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://www.earthyhues.com/api-home-page-travel-blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

  return (
    <div className='my-5'>
        <div className="container">
            <div className="sec-title text-center">
                <p className="sec-title__tagline">World’s best Nature Travel Experience</p>
                
                <h2 className="sec-title__title">
                Check Our Travel Blogs
                </h2>
            </div>
        </div>
        <section class="tour-listing ">
            <div class="container">
                <div class="row">
                {blogs.map(blog => (
                    <div
                    className="col-xl-4 col-md-6 wow animated fadeInUp animated"
                    data-wow-delay="0.1s"
                    data-wow-duration="1500ms"
                    style={{
                        visibility: "visible",
                        animationDuration: "1500ms",
                        animationDelay: "0.1s",
                        animationName: "fadeInUp"
                    }}
                    >
                    <div className="tour-listing-two__card tour-listing__card">
                        <a
                        href="tour-listing-details-right.html"
                        className="tour-listing__card-image-box"
                        >
                        <img
                            src={blog.travel_blog_img}
                            alt={blog.travel_blog_url}
                            style={{height: '100%'}}
                        />
                        
                        <div className="tour-listing__card-image-overlay" />
                        </a>
                        
                        <div className="tour-listing-two__card-show-content">
                        <div className="tour-listing-two__card-show-title-box">
                            <h3 className="tour-listing-two__card-show-title tour-listing__card-title">
                            <a href="/">{blog.travel_blogs_title}</a>
                            </h3>
                            
                        </div>
                        <div className="tour-listing-two__card-show-divider" />
                        <div className="tour-listing__card-bottom">
                            <div className="tour-listing__card-bottom-left">
                            <div className="tour-listing__card-day">
                                <span className="icon-clock-1" />
                                <p className="tour-listing-two__card-show-day-text tour-listing__card-day-text text-small">
                                3 Day
                                </p>
                            </div>
                            <div className="tour-listing__card-people">
                                <span className="icon-Duration" />
                                <p className="tour-listing-two__card-show-people-text tour-listing__card-people-text text-small">
                                12+
                                </p>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                        <div className="tour-listing-two__card-hover-content tour-listing__card-content">
                        <h3 className="tour-listing__card-title">
                            <a href="/">{blog.travel_blogs_title}</a>
                        </h3>
                        <p className="tour-listing__card-text text-small" dangerouslySetInnerHTML={{__html:blog.travel_blog_details.substring(0,200) }}>
                        </p>
                        
                        <div className="tour-listing__card-divider" />
                        <div className="tour-listing__card-bottom">
                            <div className="tour-listing__card-bottom-left">
                            <div className="tour-listing__card-day">
                                <span className="icon-clock-1" />
                                <p className="tour-listing__card-day-text text-small">3 Day</p>
                            </div>
                            <div className="tour-listing__card-people">
                                <span className="icon-Duration" />
                                <p className="tour-listing__card-people-text text-small">12+</p>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomeBlog
