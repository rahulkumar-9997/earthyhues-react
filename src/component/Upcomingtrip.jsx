import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Upcomingtrip = () => {
  const[data,setData] = useState([])
  
  useEffect(()=>{
      const fetchData = async()=>{
        try{
          const response = await axios.get('https://www.earthyhues.com/api-upcoming-trip-home')
          setData(response.data)
        }catch(error){
          console.error('Error fetching Testimonial:',error)
        }
      }

      fetchData()
  },[])

  return (
    <div className="my-5">
        <div className="container">
            <div className="sec-title text-center">
                {/* <p className="sec-title__tagline">Upcoming Trips</p> */}
                <h2 className="sec-title__title">
                Upcoming Trips
                </h2>
            </div>
        </div>
    <section className="tour-type-two home_page">
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-lg-4 col-md-6 wow fadeInUp my-5" data-wow-delay="100ms">
            <div className="tour-type-two__box">
              <div className="tour-type-two__box__flipper">
                <div className="tour-type-two__box__front">
                  <div className="tour-type-two__box__front__image">
                    <img
                      src={item.upcomingtrip_image}
                      alt={item.upcomingtrip_name}
                      style={{aspectRatio: '3/2'}}
                    />
                  </div>
                  <div className="tour-type-two__box__front__content py-5">
                    {/* <div className="tour-type-two__box__front__icon">
                      <span className="icon-tent-Fill" />
                    </div> */}
                    <h5 className="tour-type-two__box__front__title">
                      {item.upcomingtrip_name}
                    </h5>
                    <p className="tour-type-two__box__front__text" dangerouslySetInnerHTML={{__html: item.dates_of_travel}}>
                      
                    </p>
                  </div>
                </div>
                <div className="tour-type-two__box__back">
                  <div className="tour-type-two__box__back__image">
                    <img
                      src={item.upcomingtrip_image}
                      alt="trevlo"
                    />
                  </div>
                  <div className="tour-type-two__box__back__content">
                    {/* <div className="tour-type-two__box__back__icon">
                      <span className="icon-tent-Fill" />
                    </div> */}
                    <h5 className="tour-type-two__box__back__title">
                      {item.upcomingtrip_name}
                    </h5>
                    <p className="tour-type-two__box__back__text">
                      {item.upcomingtrip_duration}
                    </p>
                    <p className="tour-type-two__box__back__text" dangerouslySetInnerHTML={{__html: item.cost_per_person_starting_from}}>
                    
                    </p>
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

export default Upcomingtrip
