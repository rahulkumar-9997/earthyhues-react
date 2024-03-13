import React from 'react'

const Article = () => {
  return (
    <div className="blog-two">
    <div className="container">
      <div className="sec-title text-center">
        <p className="sec-title__tagline">Articles</p>
        {/* /.sec-title__tagline */}
        <h2 className="sec-title__title">
          Latest News &amp; Articles from
          <br /> the Blog Posts
        </h2>
        {/* /.sec-title__title */}
      </div>
      {/* /.sec-title */}
      <div
        className="blog-two__carousel trevlo-owl__carousel trevlo-owl__carousel--basic-nav owl-theme owl-carousel"
        data-owl-options='{
            "items": 2,
            "margin": 30,
            "smartSpeed": 700,
            "loop":false,
            "autoplay": 6000,
            "nav":false,
            "dots":true,
            "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
            "responsive":{
            "0":{
            "items": 1
            },
            "992":{
            "items": 2
            }
            }
            }'
      >
        <div className="item">
          <div className="blog-card-two">
            <div className="row d-flex align-items-center">
              <div className="col-md-7">
                <div className="blog-card-two__content">
                  <div className="blog-card-two__comment">
                    <span className="icon-chat" />2 Comment
                  </div>
                  <h3 className="blog-card-two__title">
                    <a href="/">You Should See Things when visiting Japan</a>
                  </h3>
                  {/* /.blog-card__title */}
                  <p className="blog-card-two__text">
                    There are many variations of passages of Lorem Ipsum
                    available,
                  </p>
                  {/* /.blog-card__text */}
                  <div className="blog-card-two__meta">
                    <div className="blog-card-two__author">
                      <img
                        src="assets/images/blog/blog-2-author.jpg"
                        alt="trevlo"
                      />
                      <h5 className="blog-card-two__author__name">
                        <a href="blog-list-right.html">Darrell Steward</a>
                      </h5>
                      <p className="blog-card-two__author__designation">
                        Teacher
                      </p>
                    </div>
                    <a href="/" className="blog-card-two__rm">
                      <span className="icon-right-arrow" />
                    </a>
                    {/* /.blog-card__link */}
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <a href="/" className="blog-card-two__image">
                  <img
                    src="assets/images/blog/blog-2-1.jpg"
                    alt="You Should See Things when visiting Japan"
                  />
                  <div className="blog-card-two__image__overlay">
                    <span className="icon-plus" />
                  </div>
                  {/* /.blog-card__overlay */}
                  <div className="blog-card-two__image__date">
                    31
                    <span className="blog-card-two__image__date__month">
                      July 2023
                    </span>
                  </div>
                  {/* /.blog-card__date */}
                </a>
                {/* /.blog-card__image */}
              </div>
            </div>
          </div>
          {/* /.blog-card */}
        </div>
        {/* /.col-md-12 col-xl-6 */}
        <div className="item">
          <div className="blog-card-two">
            <div className="row d-flex align-items-center">
              <div className="col-md-7">
                <div className="blog-card-two__content">
                  <div className="blog-card-two__comment">
                    <span className="icon-chat" />2 Comment
                  </div>
                  <h3 className="blog-card-two__title">
                    <a href="/">The complete kindearn design guideline 2023</a>
                  </h3>
                  {/* /.blog-card__title */}
                  <p className="blog-card-two__text">
                    There are many variations of passages of Lorem Ipsum
                    available,
                  </p>
                  {/* /.blog-card__text */}
                  <div className="blog-card-two__meta">
                    <div className="blog-card-two__author">
                      <img
                        src="assets/images/blog/blog-2-author.jpg"
                        alt="trevlo"
                      />
                      <h5 className="blog-card-two__author__name">
                        <a href="blog-list-right.html">Darrell Steward</a>
                      </h5>
                      <p className="blog-card-two__author__designation">
                        Teacher
                      </p>
                    </div>
                    <a href="/" className="blog-card-two__rm">
                      <span className="icon-right-arrow" />
                    </a>
                    {/* /.blog-card__link */}
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <a href="/" className="blog-card-two__image">
                  <img
                    src="assets/images/blog/blog-2-2.jpg"
                    alt="The complete kindearn design guideline 2023"
                  />
                  <div className="blog-card-two__image__overlay">
                    <span className="icon-plus" />
                  </div>
                  {/* /.blog-card__overlay */}
                  <div className="blog-card-two__image__date">
                    31
                    <span className="blog-card-two__image__date__month">
                      July 2023
                    </span>
                  </div>
                  {/* /.blog-card__date */}
                </a>
                {/* /.blog-card__image */}
              </div>
            </div>
          </div>
          {/* /.blog-card */}
        </div>
        {/* /.col-md-12 col-xl-6 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  )
}

export default Article
