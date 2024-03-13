import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Testimonial() {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get('https://www.earthyhues.com/api-testimonials')
                setData(response.data)
            }catch(error){
                console.error('Error fetching Testimonial:',error)
            }
        };
        fetchData() 
    },[])


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
                    <li>Testimonials</li>
                    </ul>
                </div>
                </div>
            </section>
            <section className='my-5 '>
                <div className="container">
                    <div className="row">
                        {data.map((index) => (
                        <div className="col-lg-4" key={index.testimonials_id}>
                           <div className="card">
                               <img className="card-img-top" src={index.testimonials_image} alt={index.testimonials_url} />
                               <div className="card-body">

                                   <h4 className='blog-card__title'><a href='/TestimonialDetail'>{index.testimonials_name}</a></h4>
                                   <p style={{color:'#13a5b6'}}>{index.testimonials_customer_name}</p>
                                   <p className="card-text" dangerouslySetInnerHTML={{__html: index.testimonials_details.substring(0,150)}}></p>
                                   <h4 className='blog-card__title'><a href="/TestimonialDetail">{index.testimonials_name}</a></h4>
                                   <p style={{color:'#13a5b6'}}>{index.testimonials_customer_name}</p>
                                   <p className="card-text" dangerouslySetInnerHTML={{__html: index.testimonials_details.substring(0,150)}}>{}</p>

                                   <a href="/TestimonialDetail">Explore More</a>
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

export default Testimonial
