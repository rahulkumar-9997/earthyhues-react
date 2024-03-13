import React,{useState, useEffect} from 'react'
import './PackageDetail.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PackageDetail = () => {
    const { package_id } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.earthyhues.com/api-packages/${package_id}`);
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log('Error while loading:', error.response.data);
            }
        };
        fetchData();
    }, [ package_id ]);


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
                            <li>Package Detail</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="tour-listing-details tour-listing-details-right mt-5">
                <div className="container">
                {/* {data.map((item) => ( */}
                     <div className="tour-listing-details__row row">
                     <div className="col-xl-4">
                             <aside className="tour-listing-details__sidebar">
                                  <div className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp text-center"
                                     data-wow-delay="0.1s" data-wow-duration="1500ms">
                                         <img src="./assets/images/about/about-4-2.jpg" alt="image" />
                                     <div className="result" />
                                 </div> 
                             </aside>
                         </div>
                     <div className="col-xl-8">
                         <div className="tour-listing-details__overview">
                         <div
                             className="wow animated fadeIn"
                             data-wow-delay="0.1s"
                             data-wow-duration="1500ms"
                         >
                             <h3 className="tour-listing-details__title tour-listing-details__overview-title">
                             Spectacles of the Thar
                             </h3>
                         </div>
                         <p
                             className="tour-listing-details__overview-text wow animated fadeInUp"
                             data-wow-delay="0.1s"
                             data-wow-duration="1500ms"
                         >
                             “The Blue City of Jodhpur” has a rich history and land of may marvels makes it a place worth visiting in your tour. Key attractions are: the majestic Mehrangarh Fort, the Umaid Bhawan Palace- part museum, part royal residence and part hotel, cenotaph and royal crematorium built in the memory of Maharaja Jaswant Singh and fascinating bazars.
                         </p>
                         </div>
                         {/* /.tour-listing-details__explore */}
                         <div className="tour-listing-details__included">
                         {/* <h3 className="tour-listing-details__title tour-listing-details__included-title">
                             Included/Exclude
                         </h3> */}
                         <div className="row">
                             <div
                             className="col-lg-12 col-md-12 wow animated fadeInUp"
                             data-wow-delay="0.1s"
                             data-wow-duration="1500ms"
                             >
                             <ul className="tour-listing-details__included-list-one">
                                 <li>
                                 <i className="fas fa-check-circle" />
                                 <p>Jaisalmer, the exuberant past, culture, dunes and the heritage of “The Golden City” has so much to offer. The exquisite fort and the havelis with their enchanting architecture, the magical beauty of the sand dunes, the haunted trail, sunset boat ride at the lake, colorful markets and the flavorful local food.</p>
                                 </li>
                                 <li>
                                 <i className="fas fa-check-circle" />
                                 <p>Bikaner, is famous for the magnificent palaces, forts, lakes and desert safaris. Also known as the “Camel Country” as it serves as the breeding ground for some of the best riding camels in the world. Your visit is incomplete without tasting the “Bikaneri Bhujia”- crispy, light weight, spicy, mouth-watering snacks.</p>
                                 </li>
                                 <li>
                                 <i className="fas fa-check-circle" />
                                 <p>Mandawa, is often known as Open Art Gallery because of the outstanding forts and havelis. Mandawa is a delight for those with a combined love for art and shopping. Must look out for paintings, cloth art, brilliantly encarved wood art, metal utensils and bangles.</p>
                                 </li>
                                 {/* <li>
                                 <i className="fas fa-check-circle" />
                                 <p>Visit 7 Best Places in the City with Group</p>
                                 </li> */}
                             </ul>
                             </div>
                         </div>
                         </div>
                         </div>
                         {/* /.col-xl-8 */}
                         
                     {/* /.col-xl-4 */}
                     </div>
                {/* ))} */}


                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>

            {/* TimeLine */}
            <section style={{backgroundColor: 'rgba(13, 169, 201, 1)'}}>
                <div class="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="./assets/images/about/about-4-1.jpg" alt="image" />
                        </div>
                        <div className="col-lg-8">
                            <div class="main-timeline-5">
                            <div class="timeline-5 right-5">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <div className="d-flex">
                                        <h5>Day 1</h5>
                                        <button class="btn ms-auto dropdown-toggle" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseExample1" aria-expanded="false"
                                            aria-controls="collapseExample1">
                                            
                                        </button>
                                        </div>
                                        <h4>Fly from Delhi to Jodhpur</h4>
                                        <div class="collapse" id="collapseExample1">
                                            <p class="mt-2">Fly from Delhi to Jodhpur. Our representative will meet you at the airport and brief you on the program. Transfer to the hotel. Rest of the day at leisure. Visit the most famous Clock Tower or Ghanta Ghar to see the local shops. Return back to the resort for dinner and overnight stay. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-5 right-5">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <div className="d-flex">
                                        <h5>Day 2</h5>
                                        <button class="btn ms-auto dropdown-toggle" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseExample2" aria-expanded="false"
                                            aria-controls="collapseExample">
                                            
                                        </button>
                                        </div>
                                        <h4>Jodhpur</h4>
                                        <div class="collapse" id="collapseExample2">
                                            <p class="mt-2">After breakfast, leave for sightseeing to Mehrangarh Fort. There is a museum inside which has huge collections of artefacts, miniature paintings and other antiques. Next proceed to visit Jaswant Thada, a white marble cenotaph and Umaid Bhawan Palace which is a spectacular building and a paragon of Indo Sarcenic style of architecture. Dinner and overnight stay at the hotel. (B, D)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-5 right-5">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <div className="d-flex">
                                        <h5>Day 3</h5>
                                        <button class="btn  ms-auto dropdown-toggle" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseExample3" aria-expanded="false"
                                            aria-controls="collapseExample">
                                        </button>
                                        </div>
                                        <h4>Jaisalmer</h4>
                                        <div class="collapse" id="collapseExample3">
                                            <p class="mb-0">Depart after early breakfast for Jaisalmer, arriving in 5 hours. After few hours of relaxation leave for guide to tour of the Golden city. Visit the Jaisalmer Fort, splendid havelis- Patwon Ki Haveli, Salim Singh Ki Haveli and Nathmal Ki Haveli. Spend the evening at Gadisar lake – can opt for the boat ride to view the beautiful sun setting beyond the horizon. Transfer to the hotel. Dinner and overnight stay at hotel (B, D)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-5 right-5">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <div className="d-flex">
                                        <h5>Day 4</h5>
                                        <button class="btn  ms-auto dropdown-toggle" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseExample4" aria-expanded="false"
                                            aria-controls="collapseExample">
                                        </button>
                                        </div>
                                        <h4>Jaisalmer</h4>
                                        <div class="collapse" id="collapseExample4">
                                            <p class="mb-0">Full day at Jaisalmer. Enjoy the dunes of the golden city today. Optional excursion to Desert National Park. Camel safari and overnight in a desert camp, enjoying the fire dance, local tribal dance, music performances, puppet shows during the evening on the dunes. Dinner and overnight at the camp on the dunes. (B, D)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-5 right-5">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <div className="d-flex">
                                        <h5>Day 5</h5>
                                        <button class="btn  ms-auto dropdown-toggle" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseExample5" aria-expanded="false"
                                            aria-controls="collapseExample">
                                        </button>
                                        </div>
                                        <h4>Bikaner</h4>
                                        <div class="collapse" id="collapseExample5">
                                            <p class="mb-0">After leisurely breakfast, you proceed for Bikaner arriving in 5 hours. Later in the afternoon, visit Forts and Palaces of Bikaner with your tour guide, starting with the magnificent Junagarh Fort and extending to many interesting sights like Anup Mahal, Badal Mahal and Har Mandir where weddings were celebrated. Later you visit Lallgarh Palace, princely Rajput palace of red sandstone. The rest of the time is spent at Junagarh Fort Museum, Camel breeding farm, havelis and Bhandeshwar Jain Temple. After a long day, you spend the night at the hotel. (B, D)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-5 right-5">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <div className="d-flex">
                                        <h5>Day 6</h5>
                                        <button class="btn  ms-auto dropdown-toggle" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseExample6" aria-expanded="false"
                                            aria-controls="collapseExample">
                                        </button>
                                        </div>
                                        <h4>Mandawa</h4>
                                        <div class="collapse" id="collapseExample6">
                                            <p class="mb-0">After breakfast, you checkout from your hotel and drive to the royal city of Mandawa, arriving in 3.5 hours. Later in the day, after you’ve freshened up, your guide will take you for a guided tour of the Mandawa fort which is famous for beautiful frescos, colourful bazaars, exquisite carvings and mirror work, and the majestic havelis or mansions that are well known for their lavishly painted walls. (B, D)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-5 right-5">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <div className="d-flex">
                                        <h5>Day 7</h5>
                                        <button class="btn  ms-auto dropdown-toggle" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseExample7" aria-expanded="false"
                                            aria-controls="collapseExample">
                                        </button>
                                        </div>
                                        <h4>Mandawa to Delhi</h4>
                                        <div class="collapse" id="collapseExample7">
                                            <p class="mb-0">Breakfast, depart for Delhi to board your flight for onward journey. (B)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* TimeLine End*/}

            <section className=" mt-5">
                <div className="container">
                    <div className="tour-listing-details__row row">
                    <div className="col-xl-8">
                        <div className="tour-listing-details__amenities">
                            <h3 className="tour-listing-details__title tour-listing-details__amenities-title">
                                Tour Activities
                            </h3>
                            <div className="tour-listing-details__amenities-row row">
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.1s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Visits to forts, palaces and vibrant markets
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.3s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Desert safari
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Camel safari
                                    </h4>
                                </div>
                                </div>
                                
                            </div>
                            </div>
                            <div className="tour-listing-details__amenities">
                            <h3 className="tour-listing-details__title tour-listing-details__amenities-title">
                            Possible Extensions
                            </h3>
                            <div className="tour-listing-details__amenities-row row">
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.1s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Visit to Kuldhara- “the haunted village” in Jaisalmer
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.3s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Jeep safari in the dunes
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Sand surfing
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.1s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Quad biking
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.3s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Desert National Park excursion
                                    </h4>
                                </div>
                                </div>
                                
                            </div>
                            </div>
                            <div className="tour-listing-details__amenities">
                            <h3 className="tour-listing-details__title tour-listing-details__amenities-title">
                            What’s Included
                            </h3>
                            <div className="tour-listing-details__amenities-row row">
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.1s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    6 nights’ Accommodation
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.3s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Daily breakfast and dinner
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    English speaking guide
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.1s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Air-conditioned vehicle
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.3s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Monument entrance fees
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Airport transfers
                                    </h4>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="tour-listing-details__amenities">
                            <h3 className="tour-listing-details__title tour-listing-details__amenities-title">
                            Things to Carry
                            </h3>
                            <div className="tour-listing-details__amenities-row row">
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.1s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Travel documents
                                    </h4>
                                </div>
                                </div>
                                
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.3s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    T-shirts, Loose fitting shirts
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Long Skirts, Culottes
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Long loose-fitting trousers
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Shawl/ Scarf or anything you can throw over your shoulders for entering temples
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Something warm to put on in the evenings
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Comfortable and lightweight footwear, strong hiking/walking sandals
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Protection from cold air, sun- sunglasses, hat and sunscreen
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Camera – you will need extra storage for digital photos
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    3-way adapters – we use 220 volts and rectangular pins
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Bathroom slippers
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Medication and toiletries (lodge provides basic toiletries)
                                    </h4>
                                </div>
                                </div>
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="1500ms"
                                >
                                <div className="tour-listing-details__amenities-content ">
                                    <i className="fas fa-check-circle" />
                                    <h4 className="tour-listing-details__amenities-content-title">
                                    Mosquito/insect repellent
                                    </h4>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* /.col-xl-8 */}
                        <div className="col-xl-4">
                            <aside className="tour-listing-details__sidebar">
                                <div className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp"
                                    data-wow-delay="0.1s" data-wow-duration="1500ms">
                                    <h3 className="tour-listing-details__sidebar-title">Book Tours</h3>
                                    <form
                                    action="https://bracketweb.com/trevlo-html/assets/inc/sendemail.php"
                                    className="tour-listing-details__sidebar-form contact-form-validated"
                                    >
                                    <div className="tour-listing-details__sidebar-form-input">
                                        <input type="text" placeholder="Contact Person" name="Phone" />
                                    </div>
                                    <div className="tour-listing-details__sidebar-form-input">
                                        <input type="text" placeholder="Phone" name="Phone" />
                                    </div>
                                    <div className="tour-listing-details__sidebar-form-input">
                                        <input type="text" placeholder="Email" name="Email" />
                                    </div>
                                    <div className="tour-listing-details__sidebar-form-input">
                                        <input type="text" placeholder="Your Requirement" name="text" />
                                    </div>
                                    
                                    
                                    <button
                                        type="submit"
                                        className="tour-listing-details__sidebar-btn trevlo-btn trevlo-btn--base"
                                    >
                                        <span>Book Now</span>
                                    </button>
                                    </form>
                                    <div className="result" />
                                    {/* /.result */}
                                </div>
                            </aside>
                        </div>
                    {/* /.col-xl-4 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>

            <div className='tour-listing-details tour-listing-details-right'>
        <div className="container">
            <div className="sec-title text-center">
                <p className="sec-title__tagline">World’s best Nature Travel Experience</p>
                
                <h2 className="sec-title__title">
                Similar Packages
                </h2>
            </div>
        </div>
        <section class="tour-listing ">
            <div class="container">
                <div class="row">
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
                            src="assets/images/tours/tour-4-1.jpg"
                            alt="assets/images/tours/tour-4-1.jpg"
                            className="tour-listing__card-image"
                        />
                        <div className="tour-listing__card-btn-group @@extraClassName">
                            <div className="tour-listing__card-discount @@innerExtraClassName">
                            10% Off
                            </div>
                            <div className="tour-listing__card-featured">Featured</div>
                        </div>
                        <div className="tour-listing__card-image-overlay" />
                        </a>
                        <a href="/" className="tour-listing__card-wishlist">
                        <span className="icon-heart" />
                        </a>
                        <div className="tour-listing-two__card-show-content">
                        <div className="tour-listing-two__card-show-title-box">
                            <h3 className="tour-listing-two__card-show-title tour-listing__card-title">
                            <a href="/">Turkey Balloons flying</a>
                            </h3>
                            <div className="tour-listing__card-camera-group">
                            <a
                                href="/"
                                className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn trevlo-image-popup"
                                data-gallery-options='{
                                    "items": [
                                        {
                                        "src": "assets/images/tours/tour-4-1.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-2.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-3.jpg"
                                        }
                                    ],
                                    "gallery": {
                                        "enabled": true
                                    },
                                    "type": "image"
                                }'
                            >
                                <span className="icon-photo-camera-1" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                                className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn video-popup"
                            >
                                <span className="icon-video-camera-1-1" />
                            </a>
                            </div>
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
                            <div className="tour-listing__card-bottom-right">
                            <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                                $160
                            </h4>
                            </div>
                        </div>
                        </div>
                        <div className="tour-listing-two__card-hover-content tour-listing__card-content">
                        <h3 className="tour-listing__card-title">
                            <a href="tour-listing-details-right.html">Turkey Balloons flying</a>
                        </h3>
                        <p className="tour-listing__card-text text-small">
                            There are many variations of passages of Lorem Ipsum agtilable
                        </p>
                        <div className="tour-listing-two__card-info">
                            <div>
                            <div className="tour-listing__card-review-box">
                                <span className="icon-star" />
                                <p className="tour-listing__card-review-text text-small">
                                4.5 (30 Reviews)
                                </p>
                            </div>
                            <div className="tour-listing__card-location-box">
                                <span className="icon-location-1" />
                                <p className="tour-listing__card-location-text text-small">
                                Main Street, Brooklyn, NY
                                </p>
                            </div>
                            </div>
                            <div className="tour-listing__card-camera-group">
                            <a
                                href="/"
                                className="tour-listing__card-camera-btn trevlo-image-popup"
                                data-gallery-options='{
                                    "items": [
                                        {
                                        "src": "assets/images/tours/tour-4-1.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-2.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-3.jpg"
                                        }
                                    ],
                                    "gallery": {
                                        "enabled": true
                                    },
                                    "type": "image"
                                }'
                            >
                                <span className="icon-photo-camera-1" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                                className="tour-listing__card-camera-btn video-popup"
                            >
                                <span className="icon-video-camera-1-1" />
                            </a>
                            </div>
                        </div>
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
                            <div className="tour-listing__card-bottom-right">
                            <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                                $160
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
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
                            src="assets/images/tours/tour-4-1.jpg"
                            alt="assets/images/tours/tour-4-1.jpg"
                            className="tour-listing__card-image"
                        />
                        <div className="tour-listing__card-btn-group @@extraClassName">
                            <div className="tour-listing__card-discount @@innerExtraClassName">
                            10% Off
                            </div>
                            <div className="tour-listing__card-featured">Featured</div>
                        </div>
                        <div className="tour-listing__card-image-overlay" />
                        </a>
                        <a href="/" className="tour-listing__card-wishlist">
                        <span className="icon-heart" />
                        </a>
                        <div className="tour-listing-two__card-show-content">
                        <div className="tour-listing-two__card-show-title-box">
                            <h3 className="tour-listing-two__card-show-title tour-listing__card-title">
                            <a href="/">Turkey Balloons flying</a>
                            </h3>
                            <div className="tour-listing__card-camera-group">
                            <a
                                href="/"
                                className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn trevlo-image-popup"
                                data-gallery-options='{
                                    "items": [
                                        {
                                        "src": "assets/images/tours/tour-4-1.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-2.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-3.jpg"
                                        }
                                    ],
                                    "gallery": {
                                        "enabled": true
                                    },
                                    "type": "image"
                                }'
                            >
                                <span className="icon-photo-camera-1" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                                className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn video-popup"
                            >
                                <span className="icon-video-camera-1-1" />
                            </a>
                            </div>
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
                            <div className="tour-listing__card-bottom-right">
                            <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                                $160
                            </h4>
                            </div>
                        </div>
                        </div>
                        <div className="tour-listing-two__card-hover-content tour-listing__card-content">
                        <h3 className="tour-listing__card-title">
                            <a href="tour-listing-details-right.html">Turkey Balloons flying</a>
                        </h3>
                        <p className="tour-listing__card-text text-small">
                            There are many variations of passages of Lorem Ipsum agtilable
                        </p>
                        <div className="tour-listing-two__card-info">
                            <div>
                            <div className="tour-listing__card-review-box">
                                <span className="icon-star" />
                                <p className="tour-listing__card-review-text text-small">
                                4.5 (30 Reviews)
                                </p>
                            </div>
                            <div className="tour-listing__card-location-box">
                                <span className="icon-location-1" />
                                <p className="tour-listing__card-location-text text-small">
                                Main Street, Brooklyn, NY
                                </p>
                            </div>
                            </div>
                            <div className="tour-listing__card-camera-group">
                            <a
                                href="/"
                                className="tour-listing__card-camera-btn trevlo-image-popup"
                                data-gallery-options='{
                                    "items": [
                                        {
                                        "src": "assets/images/tours/tour-4-1.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-2.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-3.jpg"
                                        }
                                    ],
                                    "gallery": {
                                        "enabled": true
                                    },
                                    "type": "image"
                                }'
                            >
                                <span className="icon-photo-camera-1" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                                className="tour-listing__card-camera-btn video-popup"
                            >
                                <span className="icon-video-camera-1-1" />
                            </a>
                            </div>
                        </div>
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
                            <div className="tour-listing__card-bottom-right">
                            <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                                $160
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
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
                            src="assets/images/tours/tour-4-1.jpg"
                            alt="assets/images/tours/tour-4-1.jpg"
                            className="tour-listing__card-image"
                        />
                        <div className="tour-listing__card-btn-group @@extraClassName">
                            <div className="tour-listing__card-discount @@innerExtraClassName">
                            10% Off
                            </div>
                            <div className="tour-listing__card-featured">Featured</div>
                        </div>
                        <div className="tour-listing__card-image-overlay" />
                        </a>
                        <a href="/" className="tour-listing__card-wishlist">
                        <span className="icon-heart" />
                        </a>
                        <div className="tour-listing-two__card-show-content">
                        <div className="tour-listing-two__card-show-title-box">
                            <h3 className="tour-listing-two__card-show-title tour-listing__card-title">
                            <a href="/">Turkey Balloons flying</a>
                            </h3>
                            <div className="tour-listing__card-camera-group">
                            <a
                                href="/"
                                className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn trevlo-image-popup"
                                data-gallery-options='{
                                    "items": [
                                        {
                                        "src": "assets/images/tours/tour-4-1.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-2.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-3.jpg"
                                        }
                                    ],
                                    "gallery": {
                                        "enabled": true
                                    },
                                    "type": "image"
                                }'
                            >
                                <span className="icon-photo-camera-1" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                                className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn video-popup"
                            >
                                <span className="icon-video-camera-1-1" />
                            </a>
                            </div>
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
                            <div className="tour-listing__card-bottom-right">
                            <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                                $160
                            </h4>
                            </div>
                        </div>
                        </div>
                        <div className="tour-listing-two__card-hover-content tour-listing__card-content">
                        <h3 className="tour-listing__card-title">
                            <a href="tour-listing-details-right.html">Turkey Balloons flying</a>
                        </h3>
                        <p className="tour-listing__card-text text-small">
                            There are many variations of passages of Lorem Ipsum agtilable
                        </p>
                        <div className="tour-listing-two__card-info">
                            <div>
                            <div className="tour-listing__card-review-box">
                                <span className="icon-star" />
                                <p className="tour-listing__card-review-text text-small">
                                4.5 (30 Reviews)
                                </p>
                            </div>
                            <div className="tour-listing__card-location-box">
                                <span className="icon-location-1" />
                                <p className="tour-listing__card-location-text text-small">
                                Main Street, Brooklyn, NY
                                </p>
                            </div>
                            </div>
                            <div className="tour-listing__card-camera-group">
                            <a
                                href="/"
                                className="tour-listing__card-camera-btn trevlo-image-popup"
                                data-gallery-options='{
                                    "items": [
                                        {
                                        "src": "assets/images/tours/tour-4-1.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-2.jpg"
                                        },
                                        {
                                        "src": "assets/images/tours/tour-4-3.jpg"
                                        }
                                    ],
                                    "gallery": {
                                        "enabled": true
                                    },
                                    "type": "image"
                                }'
                            >
                                <span className="icon-photo-camera-1" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                                className="tour-listing__card-camera-btn video-popup"
                            >
                                <span className="icon-video-camera-1-1" />
                            </a>
                            </div>
                        </div>
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
                            <div className="tour-listing__card-bottom-right">
                            <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                                $160
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    </div>
  )
}

export default PackageDetail;
