import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

// import InfiniteScroll from 'react-infinite-scroll-component';

import InfiniteScroll from 'react-infinite-scroll-component';


function Blog() {
    const [data, setData] = useState([]);
    const [selectedBlogId, setSelectedBlogId] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
          try{
            const response = await axios.get('https://www.earthyhues.com/api-travel-blog')
            setData(response.data)
          }catch(error){
            console.error('Error fetching data:',error)
          }  
        }
        fetchData()
    },[])

    const handleBlogClick = (blogId) => {
      setSelectedBlogId(blogId);
    };

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
                        <li>Travel Blog</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="tour-listing-details tour-listing-details-right mx-5">
           
  <div className="blog-details-page section-space-top">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5">
          <div className="sidebar-blog sidebar-blog--left">
            <aside className="widget-area">
              {/* <div
                className="sidebar-blog__single sidebar-blog__single--search wow animated fadeInUp"
                data-wow-delay="0s"
                data-wow-duration="1500ms"
              >
                <form action="#" className="sidebar-blog__search">
                  <button type="submit" aria-label="search submit">
                    <span className="icon-search" />
                  </button>
                  <input type="text" placeholder="Type Here" />
                </form>
              </div> */}
              <div
                className="sidebar-blog__single sidebar-blog__single--posts wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
              >
                <h4 className="sidebar-blog__title">Latest posts</h4>
                <ul className="sidebar-blog__posts ">
                  {data.map((item)=>(
                  <li className="sidebar-blog__posts-item" key={item.blog_id}>
                    <div className="sidebar-blog__posts-image">
                      <img
                        src={item.blog_image}
                        alt="latest-post"
                        style={{width:'60px',height:'60px'}} />
                    </div>
                    <div className="sidebar-blog__posts-content">
                      <h4 className="sidebar-blog__posts-title" onClick={() => handleBlogClick(item.blog_id)}>
                        <a href={`#blog-${item.blog_id}`}>
                          {item.blog_head_name}
                        </a>
                      </h4>
                    </div>
                  </li>
                  ))}
                </ul>
              </div>
              <div
                className="sidebar-blog__single sidebar-blog__single--tags wow animated fadeInUp"
                data-wow-delay="0.3s"
                data-wow-duration="1500ms"
              >
                <h4 className="sidebar-blog__title">Tags</h4>
                {/* /.sidebar-blog__title */}
                <div className="sidebar-blog__tags">
                  <a
                    href="blog-details-right.html"
                    className="trevlo-btn trevlo-btn--white-two"
                  >
                    <span>Travel</span>
                  </a>
                  <a
                    href="blog-details-right.html"
                    className="trevlo-btn trevlo-btn--white-two"
                  >
                    <span>Travel guide</span>
                  </a>
                  <a
                    href="blog-details-right.html"
                    className="trevlo-btn trevlo-btn--white-two"
                  >
                    <span>Travel vibes</span>
                  </a>
                  <a
                    href="blog-details-right.html"
                    className="trevlo-btn trevlo-btn--white-two"
                  >
                    <span>Tourism</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
        
        <div className="col-xl-8 col-lg-7">
            {data.map((item)=>(
            <div id={`blog-${item.blog_id}`} className="sidebar-blog__single--search mb-5" key={item.blog_id}>
            <div className="blog-details">
                <div className="blog-card-three">
                    <div className="blog__card">
                        <div className="blog__card-img wow animated fadeInUp" data-wow-delay="0s" data-wow-duration="1500ms">
                    <img src={item.blog_image} alt={item.blog_head_name}/>
                    {/* <div className="blog__card-date">
                        <h4 className="blog__card-date-number">31</h4>
                        <p className="blog__card-date-month">July 2023</p>
                    </div> */}
                  {/* /.blog__card-date */}
                </div>
                {/* /.blog__card-img */}
                <div
                  className="blog__card-content wow animated fadeInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                >
                  <ul className="blog__card-meta">
                    {/* <li>
                      <span className="blog__card-meta-icon icon-user" />
                      <span className="blog__card-meta-author">By Admin</span>
                    </li>
                    <li>
                      <span className="blog__card-meta-icon icon-bubble-chat-1" />
                      <span className="blog__card-meta-author">2 Comment</span>
                    </li> */}
                  </ul>
                  {/* /.blog__card-meta */}

                  <h3 id={`blog-${item.blog_id}`} className="blog__card-title">
                    <Link to='/TravelBlogDetail'>
                      {item.blog_head_name}
                    </Link>

                  <h3 className="blog__card-title">
                   <Link to='/TravelBlogDetail'>
                   {item.blog_head_name}
                   </Link>

                  </h3>
                  <p className="blog__card-text" dangerouslySetInnerHTML={{__html: item.blog_intro}}>
                    {}
                  </p>
                </div>
                {/* /.blog-details__card-content */}
              </div>
              {/* /.blog-details__card */}
            </div>
            {/* /.blog-card-three */}
          </div>
          {/* /.blog-details */}
          <div className="post-info">
            <div className="post-category">
              <h3 className="post-category__title">Tags:</h3>
              <div className="post-category__btn-group">
              {item.blog_tags.map((tag) => (
                    <a key={tag.blog_nid} href="blog-list-right.html" className="post-category__btn trevlo-btn trevlo-btn--base">
                        <span>{tag.blog_tag}</span>
                    </a>
                ))}
              </div>
              {/* /.post-category__btn-group */}
            </div>
            {/* /.post-category */}
            <div className="post-tag">
              <h3 className="post-tag__title">Category:</h3>
              <div className="post-tag__text-box">
                <a href="blog-list-left.html" className="post-tag__text">
                  {item.blog_category}
                </a>
                
              </div>
              {/* /.post-tag__text-box */}
            </div>
            {/* /.post-tag */}
          </div>
        </div>
        ))}
        {/* /.col-xl-8 col-lg-7 */}
      </div>
      {/* /.row */}
    </div>
    </div>
    {/* /.container */}
  </div>
 

            </section>
        </div>
    )
}

export default Blog
