<<<<<<< HEAD
import React from 'react'

const TravelBlogDetail = () => {
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
                        <li>Travel Blog Details</li>
                    </ul>
                </div>
            </div>
        </section>
            <section className="tour-listing-details tour-listing-details-right mt-5">
                <div className="container">
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
                            Bhutan Travel Guide: Essential Tips and Information for Visitors
                            </h3>
                            <h5>Embrace Breathtaking Bhutan, Responsibly</h5>
                        </div>
                        <p className="tour-listing-details__overview-text wow animated fadeInUp"
                            data-wow-delay="0.1s" data-wow-duration="1500ms">
                          Travel that is sustainable and regenerative is better for the planet. It’s not only responsible, but also more interesting and memorable. If you’re a nature and culture enthusiast, and are environment-conscious, there’s a charming destination you can explore responsibly – Bhutan, a Himalayan kingdom that’s small in size, but mammoth in stature.</p>
                           <p className="tour-listing-details__overview-text wow animated fadeInUp"
                            data-wow-delay="0.1s" data-wow-duration="1500ms">Although Bhutan’s climate crisis is a concern, the authorities have ensured that every decision is taken with eco-consciousness. The result is a country abundant in nature’s blessings; replete with forests, mountain ranges, waterfalls and streams that will take your breath away! Add to that cultural sites like monasteries, fortresses and dazzling festivals and you have a holiday that will be etched in your memories for a lifetime.</p>
                        <p className="tour-listing-details__overview-text wow animated fadeInUp"
                            data-wow-delay="0.1s" data-wow-duration="1500ms">Bhutan’s unique approach to development places a strong emphasis on sustainability and preserving the country’s natural and cultural heritage. This encourages slow travel, opening its lands to be savoured by eco-savvy travellers, who wish to explore unhurriedly and with open minds. If you enjoy taking off on hiking trails, where you discover remote villages, interact with local communities, enjoy ethnic food at small eateries, all while making a meaningful impact, Bhutan is for you.</p>
                        </div>
                        
                        </div>
                        </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>

            <section className="tour-listing-details">
                <div className="container">
                    <div className="tour-listing-details__row row">
                    
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="tour-listing-details__overview">
                            <div className="wow animated fadeIn" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                <h3 className="tour-listing-details__title tour-listing-details__overview-title mb-5">
                                Top places to visit in Bhutan</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="tour-listing-details__reviews-comment-box">
                                        <div className="tour-listing-details__reviews-image wow animated fadeInUp animated"
                                            data-wow-delay="0.1s" data-wow-duration="1500ms"
                                            style={{
                                            visibility: "visible",
                                            animationDuration: "1500ms",
                                            animationDelay: "0.1s",
                                            animationName: "fadeInUp"
                                            }}>
                                            <img src="assets/images/tours/review-1.jpg" alt="Cherie S. Cullen" />
                                        </div>
                                        <div
                                            className="tour-listing-details__reviews-content wow animated fadeInUp animated"
                                            data-wow-delay="0.3s"
                                            data-wow-duration="1500ms"
                                            style={{
                                            visibility: "visible",
                                            animationDuration: "1500ms",
                                            animationDelay: "0.3s",
                                            animationName: "fadeInUp"
                                            }}
                                        >
                                            <div className="tour-listing-details__reviews-inner-content">
                                            <div className="tour-listing-details__reviews-info">
                                                <h3 className="tour-listing-details__reviews-name">Belly Wave</h3>    
                                            </div>
                                            
                                            </div>
                                            <p className="tour-listing-details__reviews-text">The capital city of Bhutan, Thimphu is also the largest in the country, and offers a blend of traditional Bhutanese culture and modern lifestyle.</p>

                                            <p className="tour-listing-details__reviews-text">Head to Tashichho Dzong, a beautiful fortress and Buddhist monastery, situated at the northern edge of the city. Here, you can explore typical Bhutanese architecture, with intricate woodwork and murals.</p>

                                            <p className="tour-listing-details__reviews-text">At the National Memorial Chorten, a revered Buddhist shrine, witness the daily prayers of the locals and learn more about Buddhism.</p>

                                            <p className="tour-listing-details__reviews-text">Take a hike to the Buddha Dordenma Statue, situated in the ruins of Kuensel Phodrang. This statue is one of the largest Buddha rupas in the world, at a height of 52 metres. Made of gilded bronze, the structure houses over one hundred thousand smaller Buddha statues.</p>

                                            <p className="tour-listing-details__reviews-text">Other interesting sites in Thimphu include the Folk Heritage Museum, the Bhutan Textile Museum and the Bhutan Postal Museum. There are a number of hiking, trekking and biking opportunities too that will allow you to experience Thimphu’s natural beauty, architecture, cultural sites and local communities.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="tour-listing-details__reviews-comment-box">
                                        <div className="tour-listing-details__reviews-image wow animated fadeInUp animated"
                                            data-wow-delay="0.1s" data-wow-duration="1500ms"
                                            style={{
                                            visibility: "visible",
                                            animationDuration: "1500ms",
                                            animationDelay: "0.1s",
                                            animationName: "fadeInUp"
                                            }}>
                                            <img src="assets/images/tours/review-1.jpg" alt="Cherie S. Cullen" />
                                        </div>
                                        <div
                                            className="tour-listing-details__reviews-content wow animated fadeInUp animated"
                                            data-wow-delay="0.3s"
                                            data-wow-duration="1500ms"
                                            style={{
                                            visibility: "visible",
                                            animationDuration: "1500ms",
                                            animationDelay: "0.3s",
                                            animationName: "fadeInUp"
                                            }}
                                        >
                                            <div className="tour-listing-details__reviews-inner-content">
                                            <div className="tour-listing-details__reviews-info">
                                                <h3 className="tour-listing-details__reviews-name">Belly Wave</h3>    
                                            </div>
                                            </div>
                                            <p className="tour-listing-details__reviews-text">
                                            Immerse yourself in the beauty of Paro, a small yet stunning town, located in the Paro Valley.</p>
                                            <p className="tour-listing-details__reviews-text">Paro’s star attraction is the Taktsang Palphug Monastery, popularly known as Tiger’s Nest. The monastery structure sits precariously on a cliff; and although it looks unapproachable and even intimidating on a misty day, there are paths that lead you to it and offer some truly stunning views.</p> 
                                            <p className="tour-listing-details__reviews-text">Other must-visit sites in Paro are Rinpung Dzong, a fortress-monastery that is over 400 years old; Chele La Pass, the highest motorable point in Bhutan, which also offers beautiful views of the Himalayas and the Paro Valley; Drukgyel Dzong, another fortress and Buddhist monastery that now lies in ruins; and the National Museum of Bhutan, which houses a collection of traditional Bhutanese art, textiles and artifacts
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
    </div>
  )
}

export default TravelBlogDetail
=======
import React from 'react'

const TravelBlogDetail = () => {
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
                        <li>Travel Blog Details</li>
                    </ul>
                </div>
            </div>
        </section>
            <section className="tour-listing-details tour-listing-details-right mt-5">
                <div className="container">
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
                            Bhutan Travel Guide: Essential Tips and Information for Visitors
                            </h3>
                            <h5>Embrace Breathtaking Bhutan, Responsibly</h5>
                        </div>
                        <p className="tour-listing-details__overview-text wow animated fadeInUp"
                            data-wow-delay="0.1s" data-wow-duration="1500ms">
                          Travel that is sustainable and regenerative is better for the planet. It’s not only responsible, but also more interesting and memorable. If you’re a nature and culture enthusiast, and are environment-conscious, there’s a charming destination you can explore responsibly – Bhutan, a Himalayan kingdom that’s small in size, but mammoth in stature.</p>
                           <p className="tour-listing-details__overview-text wow animated fadeInUp"
                            data-wow-delay="0.1s" data-wow-duration="1500ms">Although Bhutan’s climate crisis is a concern, the authorities have ensured that every decision is taken with eco-consciousness. The result is a country abundant in nature’s blessings; replete with forests, mountain ranges, waterfalls and streams that will take your breath away! Add to that cultural sites like monasteries, fortresses and dazzling festivals and you have a holiday that will be etched in your memories for a lifetime.</p>
                        <p className="tour-listing-details__overview-text wow animated fadeInUp"
                            data-wow-delay="0.1s" data-wow-duration="1500ms">Bhutan’s unique approach to development places a strong emphasis on sustainability and preserving the country’s natural and cultural heritage. This encourages slow travel, opening its lands to be savoured by eco-savvy travellers, who wish to explore unhurriedly and with open minds. If you enjoy taking off on hiking trails, where you discover remote villages, interact with local communities, enjoy ethnic food at small eateries, all while making a meaningful impact, Bhutan is for you.</p>
                        </div>
                        
                        </div>
                        </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>

            <section className="tour-listing-details">
                <div className="container">
                    <div className="tour-listing-details__row row">
                    
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="tour-listing-details__overview">
                            <div className="wow animated fadeIn" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                <h3 className="tour-listing-details__title tour-listing-details__overview-title mb-5">
                                Top places to visit in Bhutan</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="tour-listing-details__reviews-comment-box">
                                        <div className="tour-listing-details__reviews-image wow animated fadeInUp animated"
                                            data-wow-delay="0.1s" data-wow-duration="1500ms"
                                            style={{
                                            visibility: "visible",
                                            animationDuration: "1500ms",
                                            animationDelay: "0.1s",
                                            animationName: "fadeInUp"
                                            }}>
                                            <img src="assets/images/tours/review-1.jpg" alt="Cherie S. Cullen" />
                                        </div>
                                        <div
                                            className="tour-listing-details__reviews-content wow animated fadeInUp animated"
                                            data-wow-delay="0.3s"
                                            data-wow-duration="1500ms"
                                            style={{
                                            visibility: "visible",
                                            animationDuration: "1500ms",
                                            animationDelay: "0.3s",
                                            animationName: "fadeInUp"
                                            }}
                                        >
                                            <div className="tour-listing-details__reviews-inner-content">
                                            <div className="tour-listing-details__reviews-info">
                                                <h3 className="tour-listing-details__reviews-name">Belly Wave</h3>    
                                            </div>
                                            
                                            </div>
                                            <p className="tour-listing-details__reviews-text">The capital city of Bhutan, Thimphu is also the largest in the country, and offers a blend of traditional Bhutanese culture and modern lifestyle.</p>

                                            <p className="tour-listing-details__reviews-text">Head to Tashichho Dzong, a beautiful fortress and Buddhist monastery, situated at the northern edge of the city. Here, you can explore typical Bhutanese architecture, with intricate woodwork and murals.</p>

                                            <p className="tour-listing-details__reviews-text">At the National Memorial Chorten, a revered Buddhist shrine, witness the daily prayers of the locals and learn more about Buddhism.</p>

                                            <p className="tour-listing-details__reviews-text">Take a hike to the Buddha Dordenma Statue, situated in the ruins of Kuensel Phodrang. This statue is one of the largest Buddha rupas in the world, at a height of 52 metres. Made of gilded bronze, the structure houses over one hundred thousand smaller Buddha statues.</p>

                                            <p className="tour-listing-details__reviews-text">Other interesting sites in Thimphu include the Folk Heritage Museum, the Bhutan Textile Museum and the Bhutan Postal Museum. There are a number of hiking, trekking and biking opportunities too that will allow you to experience Thimphu’s natural beauty, architecture, cultural sites and local communities.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="tour-listing-details__reviews-comment-box">
                                        <div className="tour-listing-details__reviews-image wow animated fadeInUp animated"
                                            data-wow-delay="0.1s" data-wow-duration="1500ms"
                                            style={{
                                            visibility: "visible",
                                            animationDuration: "1500ms",
                                            animationDelay: "0.1s",
                                            animationName: "fadeInUp"
                                            }}>
                                            <img src="assets/images/tours/review-1.jpg" alt="Cherie S. Cullen" />
                                        </div>
                                        <div
                                            className="tour-listing-details__reviews-content wow animated fadeInUp animated"
                                            data-wow-delay="0.3s"
                                            data-wow-duration="1500ms"
                                            style={{
                                            visibility: "visible",
                                            animationDuration: "1500ms",
                                            animationDelay: "0.3s",
                                            animationName: "fadeInUp"
                                            }}
                                        >
                                            <div className="tour-listing-details__reviews-inner-content">
                                            <div className="tour-listing-details__reviews-info">
                                                <h3 className="tour-listing-details__reviews-name">Belly Wave</h3>    
                                            </div>
                                            </div>
                                            <p className="tour-listing-details__reviews-text">
                                            Immerse yourself in the beauty of Paro, a small yet stunning town, located in the Paro Valley.</p>
                                            <p className="tour-listing-details__reviews-text">Paro’s star attraction is the Taktsang Palphug Monastery, popularly known as Tiger’s Nest. The monastery structure sits precariously on a cliff; and although it looks unapproachable and even intimidating on a misty day, there are paths that lead you to it and offer some truly stunning views.</p> 
                                            <p className="tour-listing-details__reviews-text">Other must-visit sites in Paro are Rinpung Dzong, a fortress-monastery that is over 400 years old; Chele La Pass, the highest motorable point in Bhutan, which also offers beautiful views of the Himalayas and the Paro Valley; Drukgyel Dzong, another fortress and Buddhist monastery that now lies in ruins; and the National Museum of Bhutan, which houses a collection of traditional Bhutanese art, textiles and artifacts
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
    </div>
  )
}

export default TravelBlogDetail
>>>>>>> 9327b30bf6aeffa07a34f29bcb3101bd903ffd89
