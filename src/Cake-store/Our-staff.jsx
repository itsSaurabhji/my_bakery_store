import React from 'react'

const Ourstaff = () => {
  return (
    <>
    {/* <!--Page Title--> */}
        <section className="page-title" style={{backgroundImage:"url("+"assets/images/background/34.jpg"+")"}}>
            <div className="auto-container">
                <h1>Our Staff</h1>
                <ul className="page-breadcrumb">
                    <li><a href="index.html">home</a></li>
                    <li>Our Staff</li>
                </ul>
            </div>
        </section>
        {/* <!--End Page Title-->

        <!-- Team Section --> */}
        <section className="team-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
                    <h2>Our Staff</h2>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi et dolor ornare pellentesque. Nullam porttitor, <br/>odio id facilisis dapibus, mauris dolor rhoncus elit, ultricies nulla eros at dui. In suscipit leo sagittis
                        aliquam.</div>
                </div>

                <div className="row">
                    {/* <!-- Team Block --> */}
                    <div className="team-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/team-1.jpg" alt=""/></figure>
                                <ul className="social-links">
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
      <h3 className="name">
        <a href="staff-single.html">Ember Doe 
          <svg viewBox="0 0 50 15.8" xmlSpace="preserve">
            <path d="M9.1,0.9c6.6-0.6,11,3.3,16.6,6.1c5.3,2.6,11.9,4.3,17.7,2.6c2.2-0.7,6.1-2.5,4.8-5.7c-0.4-0.9-1.2-1.8-1.9-1 c-0.7,0.7-0.6,3.7-2.2,1.9C42.6,3,43.7-0.2,46.1,0c2.6,0.3,4.4,3.9,3.8,6.3c-1.5,6.4-10.8,7-15.8,6.3c-3.3-0.5-6.4-1.7-9.4-3.1 c-3-1.4-5.3-3.4-8-5.2C13.8,2.5,11,2.4,7.8,3.2C5.4,3.8,2.2,4.5,1.7,7.5c-0.4,2.7,1.3,5.1,3.7,6.1c1.3,0.5,2.4,0.4,3.6-0.2 c1.2-0.5,2.7-1.9,4-2.1c1.2-0.1,2.3,1.5,1.8,2.7c-0.5,1.1-2.7,1.6-3.7,1.7c-1.4,0.1-3.5-0.3-4.9-0.7c-1.4-0.4-2.7-1.1-3.8-2.2 c-1.7-1.7-2.9-4.6-2.1-7.1C1.2,2.6,6.4,1.9,9.1,0.9z"></path>
          </svg>
        </a>
      </h3>
      <span className="designation">Sous Chef</span>
    </div>
                        </div>
                    </div>

                    {/* <!-- Team Block --> */}
                    <div className="team-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/team-2.jpg" alt=""/></figure>
                                <ul className="social-links">
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
      <h3 className="name">
        <a href="staff-single.html">Peter Wood 
          <svg viewBox="0 0 50 15.8" xmlSpace="preserve">
            <path d="M9.1,0.9c6.6-0.6,11,3.3,16.6,6.1c5.3,2.6,11.9,4.3,17.7,2.6c2.2-0.7,6.1-2.5,4.8-5.7c-0.4-0.9-1.2-1.8-1.9-1 c-0.7,0.7-0.6,3.7-2.2,1.9C42.6,3,43.7-0.2,46.1,0c2.6,0.3,4.4,3.9,3.8,6.3c-1.5,6.4-10.8,7-15.8,6.3c-3.3-0.5-6.4-1.7-9.4-3.1 c-3-1.4-5.3-3.4-8-5.2C13.8,2.5,11,2.4,7.8,3.2C5.4,3.8,2.2,4.5,1.7,7.5c-0.4,2.7,1.3,5.1,3.7,6.1c1.3,0.5,2.4,0.4,3.6-0.2 c1.2-0.5,2.7-1.9,4-2.1c1.2-0.1,2.3,1.5,1.8,2.7c-0.5,1.1-2.7,1.6-3.7,1.7c-1.4,0.1-3.5-0.3-4.9-0.7c-1.4-0.4-2.7-1.1-3.8-2.2 c-1.7-1.7-2.9-4.6-2.1-7.1C1.2,2.6,6.4,1.9,9.1,0.9z"></path>
          </svg>
        </a>
      </h3>
      <span className="designation">Master Chef</span>
    </div>
                        </div>
                    </div>

                    {/* <!-- Team Block --> */}
                    <div className="team-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/team-3.jpg" alt=""/></figure>
                                <ul className="social-links">
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
      <h3 className="name">
        <a href="staff-single.html">Thomas White 
          <svg viewBox="0 0 50 15.8" xmlSpace="preserve">
            <path d="M9.1,0.9c6.6-0.6,11,3.3,16.6,6.1c5.3,2.6,11.9,4.3,17.7,2.6c2.2-0.7,6.1-2.5,4.8-5.7c-0.4-0.9-1.2-1.8-1.9-1 c-0.7,0.7-0.6,3.7-2.2,1.9C42.6,3,43.7-0.2,46.1,0c2.6,0.3,4.4,3.9,3.8,6.3c-1.5,6.4-10.8,7-15.8,6.3c-3.3-0.5-6.4-1.7-9.4-3.1 c-3-1.4-5.3-3.4-8-5.2C13.8,2.5,11,2.4,7.8,3.2C5.4,3.8,2.2,4.5,1.7,7.5c-0.4,2.7,1.3,5.1,3.7,6.1c1.3,0.5,2.4,0.4,3.6-0.2 c1.2-0.5,2.7-1.9,4-2.1c1.2-0.1,2.3,1.5,1.8,2.7c-0.5,1.1-2.7,1.6-3.7,1.7c-1.4,0.1-3.5-0.3-4.9-0.7c-1.4-0.4-2.7-1.1-3.8-2.2 c-1.7-1.7-2.9-4.6-2.1-7.1C1.2,2.6,6.4,1.9,9.1,0.9z"></path>
          </svg>
        </a>
      </h3>
      <span className="designation">Confectioner</span>
    </div>
                        </div>
                    </div>

                    {/* <!-- Team Block --> */}
                    <div className="team-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/team-4.jpg" alt=""/></figure>
                                <ul className="social-links">
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
      <h3 className="name">
        <a href="staff-single.html">Amy Lee 
          <svg viewBox="0 0 50 15.8" xmlSpace="preserve">
            <path d="M9.1,0.9c6.6-0.6,11,3.3,16.6,6.1c5.3,2.6,11.9,4.3,17.7,2.6c2.2-0.7,6.1-2.5,4.8-5.7c-0.4-0.9-1.2-1.8-1.9-1 c-0.7,0.7-0.6,3.7-2.2,1.9C42.6,3,43.7-0.2,46.1,0c2.6,0.3,4.4,3.9,3.8,6.3c-1.5,6.4-10.8,7-15.8,6.3c-3.3-0.5-6.4-1.7-9.4-3.1 c-3-1.4-5.3-3.4-8-5.2C13.8,2.5,11,2.4,7.8,3.2C5.4,3.8,2.2,4.5,1.7,7.5c-0.4,2.7,1.3,5.1,3.7,6.1c1.3,0.5,2.4,0.4,3.6-0.2 c1.2-0.5,2.7-1.9,4-2.1c1.2-0.1,2.3,1.5,1.8,2.7c-0.5,1.1-2.7,1.6-3.7,1.7c-1.4,0.1-3.5-0.3-4.9-0.7c-1.4-0.4-2.7-1.1-3.8-2.2 c-1.7-1.7-2.9-4.6-2.1-7.1C1.2,2.6,6.4,1.9,9.1,0.9z"></path>
          </svg>
        </a>
      </h3>
      <span className="designation">Executive Chef</span>
    </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End Team Section -->

        <!-- Chef Section --> */}
        <section className="chef-section-two">
            <div className="shape_wrapper shape_one">
                <div className="shape_inner menu_wave" style={{backgroundImage: "url("+"assets/images/background/37.jpg"+")"}}>
                    <div className="overlay"></div>
                </div>
            </div>

            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column">
                            <div className="content">
                                <div className="sec-title light text-center">
                                    <h2>Alex Doe</h2>
                                </div>
                                <h4>Masterchef</h4>
                                <p>Alex is a Roman-born pastry chef who spent 15 years in his city Rome perfecting his craft and exceptional creations. Vestibulum rhoncus ornare tincidunt. Etiam pretium metus sit amet est aliquet vulputate. Fusce et cursus
                                    ligula. Sed accumsan dictum porta. Aliquam rutrum ullamcorper velit hendrerit convallis.</p>
                                <div className="divider"><img src="assets/images/icons/icon-devider-light.png" alt=""/></div>
                            </div>
                        </div>
                    </div>

                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <figure className="image"><img src="assets/images/resource/hat.png" alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Chef Section -->

        <!-- Team Section --> */}
        <section className="team-section">
            <div className="auto-container">
                <div className="row">
                    {/* <!-- Team Block --> */}
                    <div className="team-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/team-1.jpg" alt=""/></figure>
                                <ul className="social-links">
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
      <h3 className="name">
        <a href="staff-single.html">Ember Doe 
          <svg viewBox="0 0 50 15.8" xmlSpace="preserve">
            <path d="M9.1,0.9c6.6-0.6,11,3.3,16.6,6.1c5.3,2.6,11.9,4.3,17.7,2.6c2.2-0.7,6.1-2.5,4.8-5.7c-0.4-0.9-1.2-1.8-1.9-1 c-0.7,0.7-0.6,3.7-2.2,1.9C42.6,3,43.7-0.2,46.1,0c2.6,0.3,4.4,3.9,3.8,6.3c-1.5,6.4-10.8,7-15.8,6.3c-3.3-0.5-6.4-1.7-9.4-3.1 c-3-1.4-5.3-3.4-8-5.2C13.8,2.5,11,2.4,7.8,3.2C5.4,3.8,2.2,4.5,1.7,7.5c-0.4,2.7,1.3,5.1,3.7,6.1c1.3,0.5,2.4,0.4,3.6-0.2 c1.2-0.5,2.7-1.9,4-2.1c1.2-0.1,2.3,1.5,1.8,2.7c-0.5,1.1-2.7,1.6-3.7,1.7c-1.4,0.1-3.5-0.3-4.9-0.7c-1.4-0.4-2.7-1.1-3.8-2.2 c-1.7-1.7-2.9-4.6-2.1-7.1C1.2,2.6,6.4,1.9,9.1,0.9z"></path>
          </svg>
        </a>
      </h3>
      <span className="designation">Sous Chef</span>
    </div>
                        </div>
                    </div>

                    {/* <!-- Team Block --> */}
                    <div className="team-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/team-5.jpg" alt=""/></figure>
                                <ul className="social-links">
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
      <h3 className="name">
        <a href="staff-single.html">Mary Thompson 
          <svg viewBox="0 0 50 15.8" xmlSpace="preserve">
            <path d="M9.1,0.9c6.6-0.6,11,3.3,16.6,6.1c5.3,2.6,11.9,4.3,17.7,2.6c2.2-0.7,6.1-2.5,4.8-5.7c-0.4-0.9-1.2-1.8-1.9-1 c-0.7,0.7-0.6,3.7-2.2,1.9C42.6,3,43.7-0.2,46.1,0c2.6,0.3,4.4,3.9,3.8,6.3c-1.5,6.4-10.8,7-15.8,6.3c-3.3-0.5-6.4-1.7-9.4-3.1 c-3-1.4-5.3-3.4-8-5.2C13.8,2.5,11,2.4,7.8,3.2C5.4,3.8,2.2,4.5,1.7,7.5c-0.4,2.7,1.3,5.1,3.7,6.1c1.3,0.5,2.4,0.4,3.6-0.2 c1.2-0.5,2.7-1.9,4-2.1c1.2-0.1,2.3,1.5,1.8,2.7c-0.5,1.1-2.7,1.6-3.7,1.7c-1.4,0.1-3.5-0.3-4.9-0.7c-1.4-0.4-2.7-1.1-3.8-2.2 c-1.7-1.7-2.9-4.6-2.1-7.1C1.2,2.6,6.4,1.9,9.1,0.9z"></path>
          </svg>
        </a>
      </h3>
      <span className="designation">Servant</span>
    </div>
                        </div>
                    </div>

                    {/* <!-- Team Block --> */}
                    <div className="team-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/team-4.jpg" alt=""/></figure>
                                <ul className="social-links">
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
      <h3 className="name">
        <a href="staff-single.html">Amy Lee 
          <svg viewBox="0 0 50 15.8" xmlSpace="preserve">
            <path d="M9.1,0.9c6.6-0.6,11,3.3,16.6,6.1c5.3,2.6,11.9,4.3,17.7,2.6c2.2-0.7,6.1-2.5,4.8-5.7c-0.4-0.9-1.2-1.8-1.9-1 c-0.7,0.7-0.6,3.7-2.2,1.9C42.6,3,43.7-0.2,46.1,0c2.6,0.3,4.4,3.9,3.8,6.3c-1.5,6.4-10.8,7-15.8,6.3c-3.3-0.5-6.4-1.7-9.4-3.1 c-3-1.4-5.3-3.4-8-5.2C13.8,2.5,11,2.4,7.8,3.2C5.4,3.8,2.2,4.5,1.7,7.5c-0.4,2.7,1.3,5.1,3.7,6.1c1.3,0.5,2.4,0.4,3.6-0.2 c1.2-0.5,2.7-1.9,4-2.1c1.2-0.1,2.3,1.5,1.8,2.7c-0.5,1.1-2.7,1.6-3.7,1.7c-1.4,0.1-3.5-0.3-4.9-0.7c-1.4-0.4-2.7-1.1-3.8-2.2 c-1.7-1.7-2.9-4.6-2.1-7.1C1.2,2.6,6.4,1.9,9.1,0.9z"></path>
          </svg>
        </a>
      </h3>
      <span className="designation">Executive Chef</span>
    </div>
                        </div>
                    </div>

                    {/* <!-- Team Block --> */}
                    <div className="team-block col-lg-3 col-md-6 col-sm-12"> 
                        <div className="inner-box">
                            <div className="image-box">
                                 <figure className="image"><img src="assets/images/resource/team-6.jpg" alt=""/></figure>
                                <ul className="social-links">
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
      <h3 className="name">
        <a href="staff-single.html">Tony Pony 
          <svg viewBox="0 0 50 15.8" xmlSpace="preserve">
            <path d="M9.1,0.9c6.6-0.6,11,3.3,16.6,6.1c5.3,2.6,11.9,4.3,17.7,2.6c2.2-0.7,6.1-2.5,4.8-5.7c-0.4-0.9-1.2-1.8-1.9-1 c-0.7,0.7-0.6,3.7-2.2,1.9C42.6,3,43.7-0.2,46.1,0c2.6,0.3,4.4,3.9,3.8,6.3c-1.5,6.4-10.8,7-15.8,6.3c-3.3-0.5-6.4-1.7-9.4-3.1 c-3-1.4-5.3-3.4-8-5.2C13.8,2.5,11,2.4,7.8,3.2C5.4,3.8,2.2,4.5,1.7,7.5c-0.4,2.7,1.3,5.1,3.7,6.1c1.3,0.5,2.4,0.4,3.6-0.2 c1.2-0.5,2.7-1.9,4-2.1c1.2-0.1,2.3,1.5,1.8,2.7c-0.5,1.1-2.7,1.6-3.7,1.7c-1.4,0.1-3.5-0.3-4.9-0.7c-1.4-0.4-2.7-1.1-3.8-2.2 c-1.7-1.7-2.9-4.6-2.1-7.1C1.2,2.6,6.4,1.9,9.1,0.9z"></path>
          </svg>
        </a>
      </h3>
      <span className="designation">Chef</span>
    </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End Team Section --> */}
    </>
  )
}

export default Ourstaff