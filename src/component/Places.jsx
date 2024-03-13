import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Places = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await axios.get('https://www.earthyhues.com/api-popular-destinations-home')
        setData(response.data)
      }catch(error){
        console.error('Error fetching Testimonial:',error)
      }
    }

    fetchData()
},[])

  return (
    <section>
      <div className="sec-title text-center pb-4">
        <p className="sec-title__tagline">Explore by Popular Destinations</p>
        <h2 className="sec-title__title">
        Book one of these unique spots to 
          <br /> scape the ordinary
        </h2>
      </div>
      <div className="tabs-content mt-5">
  {/*Marketing Solution-tab-start*/}
  <div
    className="tab fadeInUp animated"
    data-wow-delay="200ms"
    id="MonthlyPricing"
    style={{ display: "none" }}
  >
    <div className="pricing-page__row row">
      {data.map((item)=>(
      <div
        key={item.popular_destinations_id}
        className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp animated"
        data-wow-delay="0.1s"
        data-wow-duration="1500ms"
        style={{
          visibility: "visible",
          animationDuration: "1500ms",
          animationDelay: "0.1s",
          animationName: "fadeInUp"
        }}
      >
        <div className="pricing-card">
          <div className="pricing-card__image-wrapper">
            <div
              className="pricing-card__image"
              style={{
                backgroundImage:
                `url(${item.popular_des_image})`
              }}
            />
            {/* <div className="pricing-card__content">
              <p className="pricing-card__title">Silver Package</p>
              <h3 className="pricing-card__price">$300</h3>
            </div> */}
            {/* /.pricing-card__image-inner-content */}
          </div>
          {/* /.pricing-card__image-bg */}
          <ul className="pricing-card__list pt-5">
            <li>
              <p dangerouslySetInnerHTML={{__html: item.popular_des_content}}></p>
            </li>
            
          </ul>
          {/* /.pricing-card__list */}
          <div className="pricing-card__btn-box">
            <a
              href="contact.html"
              className="pricing-card__btn trevlo-btn trevlo-btn--base"
            >
              <span>Book Now</span>
            </a>
          </div>
          {/* /.pricing-card__btn-box */}
          <div className="pricing-card__overlay" />
          {/* /.pricing-card__overlay */}
        </div>
        {/* /.pricing-card */}
      </div>
      ))}
      {/* /.col-xl-4 col-lg-4 col-md-6 */}
    </div>
    {/* /.row */}
  </div>
  {/*Marketing Solution-tab-end*/}
  {/*Business Solution-tab-start*/}
  <div
    className="tab fadeInUp animated active-tab"
    data-wow-delay="200ms"
    id="YearlyPricing"
    style={{ display: "block" }}
  >
    <div className="pricing-page__row row">
      {data.map((item)=>(
      <div key={item.popular_destinations_id}
        className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp animated my-5" 
        data-wow-delay="0.1s"
        data-wow-duration="1500ms"
        style={{
          visibility: "visible",
          animationDuration: "1500ms",
          animationDelay: "0.1s",
          animationName: "fadeInUp"
        }}>
        <div className="pricing-card">
          <div className="pricing-card__image-wrapper">
            <div
              className="pricing-card__image"
              style={{
                backgroundImage:
                  `url(${item.popular_des_image})`
              }}
            />
            {/* <div className="pricing-card__content">
              <p className="pricing-card__title">Silver Package</p>
              <h3 className="pricing-card__price">$500</h3>
            </div> */}
            {/* /.pricing-card__image-inner-content */}
          </div>
          {/* /.pricing-card__image-bg */}
          <ul className="pricing-card__list pt-5">
            <li>
              <p dangerouslySetInnerHTML={{__html: item.popular_des_content.substring(0,200)}}></p>
            </li>
            
          </ul>
          {/* /.pricing-card__list */}
          <div className="pricing-card__btn-box">
            <a
              href="contact.html"
              className="pricing-card__btn trevlo-btn trevlo-btn--base"
            >
              <span>Book Now</span>
            </a>
          </div>
          <div className="pricing-card__overlay" />
        </div>
      </div>
      ))}
    </div>
  </div>
</div>

    </section>
  )
}

export default Places
