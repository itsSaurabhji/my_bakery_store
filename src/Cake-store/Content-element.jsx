import React from 'react'

export default function Content_element() {
    const backgroundImageUrl = 'assets/images/background/34.jpg';
  return (
    <div>


       

        {/*Page Title*/}
        <section className="page-title" style={{ backgroundImage: `url(${backgroundImageUrl})`}}
        // style="background-image:url(images/background/34.jpg)"
        >
            <div className="auto-container">
                <h1>Content Elements</h1>
                <ul className="page-breadcrumb">
                    <li><a href="index.html">home</a></li>
                    <li>Content Elements</li>
                </ul>
            </div>
        </section>
        {/*End Page Title*/}

        {/* Content Elements */}
        <section className="content-elements" id="page">
            <div className="auto-container">
                {/* Sec title */}
                <div className="sec-title text-center">
                    <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
                    <h2>Our Creations</h2>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box with-icon info">
                            <div className="icon-box"><span className="icon fa fa-info"></span></div>
                            <h4>Information Box</h4>
                            <p>Vestibulum sodales pellentesque nibh quis</p>
                            <button className="close-btn"><span className="fa fa-times"></span></button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box with-icon sucess">
                            <div className="icon-box"><span className="icon fa fa-check"></span></div>
                            <h4>Confirmation Box</h4>
                            <p>Vestibulum sodales pellentesque nibh quis</p>
                            <button className="close-btn"><span className="fa fa-times"></span></button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box with-icon warning">
                            <div className="icon-box"><span className="icon fa fa-exclamation"></span></div>
                            <h4>Warning Box</h4>
                            <p>Vestibulum sodales pellentesque nibi</p>
                            <button className="close-btn"><span className="fa fa-times"></span></button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box with-icon error">
                            <div className="icon-box"><span className="icon fa fa-ban"></span></div>
                            <h4>Error Box</h4>
                            <p>Vestibulum sodales pellentesque nibi</p>
                            <button className="close-btn"><span className="fa fa-times"></span></button>
                        </div>
                    </div>
                </div>

                <div className="cws_divider margin-top-30"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>

                {/* Sec title */}
                <div className="sec-title text-center margin-top-50">
                    <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
                    <h2>Tabs & Accordions</h2>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 margin-bottom-50">
                        <div className="default-tabs tabs-box">
                            {/*Tabs Box*/}
                            <ul className="tab-buttons clearfix">
                                <li className="tab-btn active-btn" data-tab="#tab1">Description</li>
                                <li className="tab-btn" data-tab="#tab2">Reviews</li>
                                <li className="tab-btn" data-tab="#tab3">Tags</li>
                            </ul>

                            <div className="tabs-content">
                                {/*Tab*/}
                                <div className="tab active-tab" id="tab1">
                                    <p>Quisque dolor lacus, lobortis a urna non, iaculis ornare nunc. Maecenas rutrum vel augue id ornare. Mauris a justo interdum, ultricies mi ac, condimentum odio.</p>
                                    <ul className="list-style-one">
                                        <li>Leo, ornare at posuere in, malesuadaaliquet tempus odio.</li>
                                        <li>Sollicitudin quam, vitae tempor facilisi aliquet tempus.</li>
                                        <li>Lacinia, sodales pellentesque aliquet tempus odio.</li>
                                        <li>Donec ligula leo, ornare at posuere in, tempus odio.</li>
                                    </ul>
                                </div>

                                {/*Tab*/}
                                <div className="tab" id="tab2">
                                    <p>Quisque dolor lacus, lobortis a urna non, iaculis ornare nunc. Maecenas rutrum vel augue id ornare. Mauris a justo interdum, ultricies mi ac, condimentum odio.</p>
                                    <ul className="list-style-one">
                                        <li>Leo, ornare at posuere in, malesuadaaliquet tempus odio.</li>
                                        <li>Sollicitudin quam, vitae tempor facilisi aliquet tempus.</li>
                                        <li>Lacinia, sodales pellentesque aliquet tempus odio.</li>
                                        <li>Donec ligula leo, ornare at posuere in, tempus odio.</li>
                                    </ul>
                                </div>

                                {/*Tab*/}
                                <div className="tab" id="tab3">
                                    <p>Quisque dolor lacus, lobortis a urna non, iaculis ornare nunc. Maecenas rutrum vel augue id ornare. Mauris a justo interdum, ultricies mi ac, condimentum odio.</p>
                                    <ul className="list-style-one">
                                        <li>Leo, ornare at posuere in, malesuadaaliquet tempus odio.</li>
                                        <li>Sollicitudin quam, vitae tempor facilisi aliquet tempus.</li>
                                        <li>Lacinia, sodales pellentesque aliquet tempus odio.</li>
                                        <li>Donec ligula leo, ornare at posuere in, tempus odio.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 margin-bottom-50">
                        {/*Accordian Box*/}
                        <ul className="accordion-box">
                            {/*Block*/}
                            <li className="accordion block active-block">
                                <div className="acc-btn active">
                                    <div className="icon-outer"><span className="icon fa fa-plus"></span> </div> Etiam hendrerit auctor feugiat</div>
                                <div className="acc-content current">
                                    <div className="content">
                                        <div className="text">Nunc pharetra nisl non tellus venenatis, sit amet maximus libero bibendum. Nulla ac mattis eros, id malesuada dolor. Nulla sodales massa ipsum.</div>
                                    </div>
                                </div>
                            </li>

                            {/*Block*/}
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-outer"><span className="icon fa fa-plus"></span> </div>Maecenas ullamcorper lectus finibus</div>
                                <div className="acc-content">
                                    <div className="content">
                                        <div className="text">Lorem ipsum dolor amet consectur adipicing elit eiusmod tempor incididunt ut labore dolore magna aliqua.enim minim veniam quis nostrud exercitation ullamco laboris.</div>
                                    </div>
                                </div>
                            </li>

                            {/*Block*/}
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-outer"><span className="icon fa fa-plus"></span> </div> Nam cursus lacus malesuada ullamcorper</div>
                                <div className="acc-content">
                                    <div className="content">
                                        <div className="text">Lorem ipsum dolor amet consectur adipicing elit eiusmod tempor incididunt ut labore dolore magna aliqua.enim minim veniam quis nostrud exercitation ullamco laboris.</div>
                                    </div>
                                </div>
                            </li>

                            {/*Block*/}
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-outer"><span className="icon fa fa-plus"></span> </div> Nulla erat nibh, tempus in commodo rutrum</div>
                                <div className="acc-content">
                                    <div className="content">
                                        <div className="text">Lorem ipsum dolor amet consectur adipicing elit eiusmod tempor incididunt ut labore dolore magna aliqua.enim minim veniam quis nostrud exercitation ullamco laboris.</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="cws_divider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>

                {/* Sec title */}
                <div className="sec-title text-center margin-top-50">
                    <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
                    <h2>Dividers</h2>
                </div>

                <div className="deviders text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat lorem lorem. Pellentesque id iaculis orci, ut facilisis urna. Morbi vitae lorem ut felis semper consectetur. Nullam eget consectetur lorem, non convallis dolor.
                        Quisque ac enim nec purus cursus venenatis ut eget sapien. Vivamus ut nibh ut neque consequat faucibus at congue urna. Nullam in aliquet nibh, condimentum ornare lorem.</p>

                    <div className="cws_divider"></div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat lorem lorem. Pellentesque id iaculis orci, ut facilisis urna. Morbi vitae lorem ut felis semper consectetur. Nullam eget consectetur lorem, non convallis dolor.
                        Quisque ac enim nec purus cursus venenatis ut eget sapien. Vivamus ut nibh ut neque consequat faucibus at congue urna. Nullam in aliquet nibh, condimentum ornare lorem.</p>

                    <div className="cws_divider"><img src="assets/images/icons/divider_13.png" alt=""/></div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat lorem lorem. Pellentesque id iaculis orci, ut facilisis urna. Morbi vitae lorem ut felis semper consectetur. Nullam eget consectetur lorem, non convallis dolor.
                        Quisque ac enim nec purus cursus venenatis ut eget sapien. Vivamus ut nibh ut neque consequat faucibus at congue urna. Nullam in aliquet nibh, condimentum ornare lorem.</p>

                    <div className="cws_divider"><img src="assets/images/icons/divider_12.png" alt=""/></div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat lorem lorem. Pellentesque id iaculis orci, ut facilisis urna. Morbi vitae lorem ut felis semper consectetur. Nullam eget consectetur lorem, non convallis dolor.
                        Quisque ac enim nec purus cursus venenatis ut eget sapien. Vivamus ut nibh ut neque consequat faucibus at congue urna. Nullam in aliquet nibh, condimentum ornare lorem.</p>

                    <div className="cws_divider"><img src="assets/images/icons/divider_11.png" alt=""/></div>
                </div>

                {/* Sec title */}
                <div className="sec-title text-center margin-top-50">
                    <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
                    <h2>Buttons</h2>
                </div>

                {/* buttons */}
                <div className="buttons">
                    <div className="upper-box" 
                    // style="background-image: url(images/background/2.jpg);"
                    style={{backgroundImage:"url("+"assets/images/background/2.jpg"+")"}}>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <a href="#" className="theme-btn btn-style-two large"><span></span>large button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two regular"><span></span>Middle button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two small"><span></span>Small button<span></span></a>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <a href="#" className="theme-btn btn-style-two large border-pink"><span></span>large button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two regular border-pink"><span></span>Middle button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two small border-pink"><span></span>Small button<span></span></a>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <a href="#" className="theme-btn btn-style-two large with-bg"><span></span>large button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two regular with-bg"><span></span>Middle button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two small with-bg"><span></span>Small button<span></span></a>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <a href="#" className="theme-btn btn-style-one alt large"><span></span>large button<span></span></a>
                                <a href="#" className="theme-btn btn-style-one alt regular"><span></span>Middle button<span></span></a>
                                <a href="#" className="theme-btn btn-style-one alt small"><span></span>Small button<span></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="lower-box">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <a href="#" className="theme-btn btn-style-two large"><span></span>large button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two regular"><span></span>Middle button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two small"><span></span>Small button<span></span></a>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <a href="#" className="theme-btn btn-style-two large bg-pink"><span></span>large button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two regular bg-pink"><span></span>Middle button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two small bg-pink"><span></span>Small button<span></span></a>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <a href="#" className="theme-btn btn-style-two large bg-sky"><span></span>large button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two regular bg-sky"><span></span>Middle button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two small bg-sky"><span></span>Small button<span></span></a>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <a href="#" className="theme-btn btn-style-two large border-sky"><span></span>large button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two regular border-sky"><span></span>Middle button<span></span></a>
                                <a href="#" className="theme-btn btn-style-two small border-sky"><span></span>Small button<span></span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cws_divider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>

                {/* Sec title */}
                <div className="sec-title text-center margin-top-50">
                    <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
                    <h2>Progress Bar</h2>
                </div>

                {/*Skills*/}
                <div className="progress-bars row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        {/*Skill Item*/}
                        <div className="bar-item">
                            <div className="skill-header clearfix">
                                <div className="skill-title">Cheesecakes</div>
                            </div>
                            <div className="skill-bar">
                                <div className="bar-inner">
                                    <div className="bar progress-line" data-width="65">
                                        <div className="skill-percentage">
                                            <div className="count-box"><span className="count-text" data-speed="2000" data-stop="65">0</span>%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Skill Item*/}
                        <div className="bar-item">
                            <div className="skill-header clearfix">
                                <div className="skill-title">Cakes Pies</div>
                            </div>
                            <div className="skill-bar">
                                <div className="bar-inner">
                                    <div className="bar progress-line" data-width="85">
                                        <div className="skill-percentage">
                                            <div className="count-box"><span className="count-text" data-speed="2000" data-stop="85">0</span>%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Skill Item*/}
                        <div className="bar-item">
                            <div className="skill-header clearfix">
                                <div className="skill-title">Cake Pops</div>
                            </div>
                            <div className="skill-bar">
                                <div className="bar-inner">
                                    <div className="bar progress-line" data-width="70">
                                        <div className="skill-percentage">
                                            <div className="count-box"><span className="count-text" data-speed="2000" data-stop="70">0</span>%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        {/*Skill Item*/}
                        <div className="bar-item style-two">
                            <div className="skill-header clearfix">
                                <div className="skill-title">Fruitcakes</div>
                            </div>
                            <div className="skill-bar">
                                <div className="bar-inner">
                                    <div className="bar progress-line" data-width="90">
                                        <div className="skill-percentage">
                                            <div className="count-box"><span className="count-text" data-speed="2000" data-stop="90">0</span>%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Skill Item*/}
                        <div className="bar-item style-two">
                            <div className="skill-header clearfix">
                                <div className="skill-title">Chocolates</div>
                            </div>
                            <div className="skill-bar">
                                <div className="bar-inner">
                                    <div className="bar progress-line" data-width="80">
                                        <div className="skill-percentage">
                                            <div className="count-box"><span className="count-text" data-speed="2000" data-stop="80">0</span>%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Skill Item*/}
                        <div className="bar-item style-two">
                            <div className="skill-header clearfix">
                                <div className="skill-title">Lollypops</div>
                            </div>
                            <div className="skill-bar">
                                <div className="bar-inner">
                                    <div className="bar progress-line" data-width="99">
                                        <div className="skill-percentage">
                                            <div className="count-box"><span className="count-text" data-speed="2000" data-stop="99">0</span>%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cws_divider margin-top-70"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>

                {/* Sec title */}
                <div className="sec-title text-center margin-top-50">
                    <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
                    <h2>Portfolio</h2>
                </div>

                {/* Portfolio Carousel */}
                <div className="four-items-carousel owl-carousel owl-theme default-dots">
                    {/* Portfolio Block */}
                    <div className="portfolio-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/gallery/1-1.jpg" alt=""/></figure>
                            </div>

                            <div className="portfolio-hover">
                                <div className="hover-effect">
                                    <svg x="0px" y="0px" viewBox="79 -202.7 1000 1000">
                                    <path d="M5459-1110.4L579.1-202.7c10.7,0,21.6,1.5,32.5,4.4c22.3,6,41.3,17,58,26.6c11.9,6.9,23,13.3,31.1,15.5 c6.8,1.8,19.4,1.8,26.2,1.8h12.9c27.5,0,59.4,1.4,89.3,18.7c32.8,19,50.2,49.3,64.1,73.7c6.2,10.9,12.6,22.1,17.8,27.3 c5.9,5.9,17.1,12.3,28.9,19.1c24,13.8,53.8,31,72.2,63c18.6,32.3,18.5,67,18.4,94.8c0,13.5-0.1,26.1,2,33.7 c2.1,7.7,8.4,18.7,15.2,30.3c14,24.1,31.4,54.1,31.4,91.3c0,36.8-17.2,66.6-31,90.6c-6.9,11.9-13.3,23-15.5,31.1 c-1.6,6.1-1.9,16.3-1.9,26.9c5.5,35.9-0.9,71-18.5,101.6c-18.9,32.7-49.1,50-73.4,63.9c-11.4,6.5-22.5,12.9-27.8,18.2 c-5.9,5.9-12.3,17-19,28.7c-14,24.2-31.1,54.1-63.1,72.5c-29.5,17-60.5,18.5-89.7,18.5h-10.3c-10.6,0-21.6,0.2-28.4,2 c-7.6,2-18.5,6.5-30.1,13.2c-24.1,14-54,29.6-91.3,29.6H579c-36.8,0-66.6-15.3-90.6-29.2c-11.8-6.8-22.9-12.3-31-14.4 c-6-1.6-16.1-1.4-26.1-1.4l-12.8,0.3c-17.5,0-37.9-0.3-58.4-5.8c-11.2-3-21.4-7.1-31-12.7c-33-19.1-50.3-49.4-64.3-73.8 c-6.2-10.8-12.6-22-17.8-27.2c-5.9-5.9-17-12.3-28.8-19.1c-24-13.8-53.8-31-72.3-63c-18.6-32.3-18.5-67-18.4-94.9 c0-13.4,0.1-26.1-2-33.7c-2-7.7-8.4-18.6-15.2-30.2c-14-24.1-31.4-54-31.4-91.3c0-36.8,17.2-66.7,31.1-90.7 c6.8-11.8,13.3-22.9,15.4-31c1.9-7.2,1.9-20.1,1.8-32.6c-0.1-28.1-0.2-63.1,18.8-95.9c19-32.9,49.3-50.2,73.6-64.2 c10.9-6.2,22.1-12.7,27.3-17.9c5.9-5.9,12.3-17.1,19.2-28.9c13.8-24,31-53.8,62.9-72.2c29.5-17,60.3-18.5,89.3-18.5h11 c10,0,21.3-0.2,28.2-2c7.6-2.1,18.6-8.4,30.1-15.1c24.3-14.1,54.3-31.5,91.4-31.6l4856-83.7l64-2888l-12016,96l-16,7000l7344,32 l4760,96L5459-1110.4z M909.2,106.8c-10.2-17.7-28.5-28.3-46.3-38.5c-12.2-7.1-23.8-13.7-32.4-22.3c-8.1-8.1-14.5-19.3-21.3-31.2 C798.8-3.3,788.1-22,769.7-32.7s-40-10.6-60.8-10.5c-13.7,0.1-26.6,0.1-37.7-2.9c-11.8-3.2-23.3-9.8-35.6-16.9 C623-70.3,610-77.8,596.2-81.5c-5.6-1.5-11.3-2.4-17.1-2.4c-20.7,0-39.2,10.8-57,21.1c-12.1,7-23.5,13.7-35,16.8s-24.7,3-38.6,3 c-20.6-0.1-42-0.1-59.9,10.3c-17.7,10.2-28.3,28.6-38.5,46.3c-7.1,12.3-13.7,23.8-22.3,32.5c-8.1,8.1-19.4,14.6-31.2,21.4 c-18.1,10.4-36.8,21.1-47.4,39.5c-10.7,18.5-10.6,40-10.5,60.9c0,13.7,0.1,26.6-2.9,37.8c-3.2,11.8-9.8,23.3-16.9,35.5 C208.6,259,198,277.4,198,297.8c0,20.8,10.7,39.2,21.1,57.1c7,12.1,13.6,23.5,16.7,35c3.1,11.5,3,24.6,3,38.6 c-0.1,20.7-0.1,42,10.2,60.1c10.2,17.7,28.5,28.3,46.3,38.5c12.2,7.1,23.8,13.7,32.4,22.3c8.1,8.1,14.5,19.3,21.3,31.2 c10.4,18.2,21.1,36.9,39.5,47.5c5.1,2.9,10.6,5.2,16.7,6.8c14.1,3.8,29.3,3.7,44,3.7c13.8-0.1,26.7-0.1,37.8,2.9 c11.8,3.2,23.3,9.8,35.5,16.9c17.8,10.3,36.1,20.9,56.6,20.9c20.8,0,39.2-10.8,57-21.2c12.1-7,23.5-13.7,35-16.7 c11.5-3.1,24.6-3,38.6-3c20.7,0,42.1,0.1,60.1-10.3c17.7-10.2,28.4-28.6,38.6-46.3c7.1-12.3,13.9-23.8,22.5-32.4 c8.1-8.1,19.6-14.5,31.5-21.3c18.2-10.4,37.7-21.1,48.4-39.6c10.6-18.5,8.9-87.6,11.9-98.7c3.2-11.8,9.8-23.3,16.9-35.6 c10.3-17.8,20.9-36.1,20.9-56.6c0-20.8-10.7-39.2-21.1-57.1c-7-12.1-13.6-23.5-16.7-35c-3.1-11.5-3-24.7-3-38.7 C919.5,146.2,919.5,124.8,909.2,106.8z"></path>
                                </svg>
                                </div>
                                <a href="assets/images/gallery/1-1.jpg" className="lightbox-image link" data-fancybox="portfolio"></a>
                                <h3><a href="portfolio-single.html">Dapibus lectus</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Block */}
                    <div className="portfolio-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/gallery/1-2.jpg" alt=""/></figure>
                            </div>

                            <div className="portfolio-hover">
                                <div className="hover-effect">
                                    <svg x="0px" y="0px" viewBox="79 -202.7 1000 1000">
                                    <path d="M5459-1110.4L579.1-202.7c10.7,0,21.6,1.5,32.5,4.4c22.3,6,41.3,17,58,26.6c11.9,6.9,23,13.3,31.1,15.5 c6.8,1.8,19.4,1.8,26.2,1.8h12.9c27.5,0,59.4,1.4,89.3,18.7c32.8,19,50.2,49.3,64.1,73.7c6.2,10.9,12.6,22.1,17.8,27.3 c5.9,5.9,17.1,12.3,28.9,19.1c24,13.8,53.8,31,72.2,63c18.6,32.3,18.5,67,18.4,94.8c0,13.5-0.1,26.1,2,33.7 c2.1,7.7,8.4,18.7,15.2,30.3c14,24.1,31.4,54.1,31.4,91.3c0,36.8-17.2,66.6-31,90.6c-6.9,11.9-13.3,23-15.5,31.1 c-1.6,6.1-1.9,16.3-1.9,26.9c5.5,35.9-0.9,71-18.5,101.6c-18.9,32.7-49.1,50-73.4,63.9c-11.4,6.5-22.5,12.9-27.8,18.2 c-5.9,5.9-12.3,17-19,28.7c-14,24.2-31.1,54.1-63.1,72.5c-29.5,17-60.5,18.5-89.7,18.5h-10.3c-10.6,0-21.6,0.2-28.4,2 c-7.6,2-18.5,6.5-30.1,13.2c-24.1,14-54,29.6-91.3,29.6H579c-36.8,0-66.6-15.3-90.6-29.2c-11.8-6.8-22.9-12.3-31-14.4 c-6-1.6-16.1-1.4-26.1-1.4l-12.8,0.3c-17.5,0-37.9-0.3-58.4-5.8c-11.2-3-21.4-7.1-31-12.7c-33-19.1-50.3-49.4-64.3-73.8 c-6.2-10.8-12.6-22-17.8-27.2c-5.9-5.9-17-12.3-28.8-19.1c-24-13.8-53.8-31-72.3-63c-18.6-32.3-18.5-67-18.4-94.9 c0-13.4,0.1-26.1-2-33.7c-2-7.7-8.4-18.6-15.2-30.2c-14-24.1-31.4-54-31.4-91.3c0-36.8,17.2-66.7,31.1-90.7 c6.8-11.8,13.3-22.9,15.4-31c1.9-7.2,1.9-20.1,1.8-32.6c-0.1-28.1-0.2-63.1,18.8-95.9c19-32.9,49.3-50.2,73.6-64.2 c10.9-6.2,22.1-12.7,27.3-17.9c5.9-5.9,12.3-17.1,19.2-28.9c13.8-24,31-53.8,62.9-72.2c29.5-17,60.3-18.5,89.3-18.5h11 c10,0,21.3-0.2,28.2-2c7.6-2.1,18.6-8.4,30.1-15.1c24.3-14.1,54.3-31.5,91.4-31.6l4856-83.7l64-2888l-12016,96l-16,7000l7344,32 l4760,96L5459-1110.4z M909.2,106.8c-10.2-17.7-28.5-28.3-46.3-38.5c-12.2-7.1-23.8-13.7-32.4-22.3c-8.1-8.1-14.5-19.3-21.3-31.2 C798.8-3.3,788.1-22,769.7-32.7s-40-10.6-60.8-10.5c-13.7,0.1-26.6,0.1-37.7-2.9c-11.8-3.2-23.3-9.8-35.6-16.9 C623-70.3,610-77.8,596.2-81.5c-5.6-1.5-11.3-2.4-17.1-2.4c-20.7,0-39.2,10.8-57,21.1c-12.1,7-23.5,13.7-35,16.8s-24.7,3-38.6,3 c-20.6-0.1-42-0.1-59.9,10.3c-17.7,10.2-28.3,28.6-38.5,46.3c-7.1,12.3-13.7,23.8-22.3,32.5c-8.1,8.1-19.4,14.6-31.2,21.4 c-18.1,10.4-36.8,21.1-47.4,39.5c-10.7,18.5-10.6,40-10.5,60.9c0,13.7,0.1,26.6-2.9,37.8c-3.2,11.8-9.8,23.3-16.9,35.5 C208.6,259,198,277.4,198,297.8c0,20.8,10.7,39.2,21.1,57.1c7,12.1,13.6,23.5,16.7,35c3.1,11.5,3,24.6,3,38.6 c-0.1,20.7-0.1,42,10.2,60.1c10.2,17.7,28.5,28.3,46.3,38.5c12.2,7.1,23.8,13.7,32.4,22.3c8.1,8.1,14.5,19.3,21.3,31.2 c10.4,18.2,21.1,36.9,39.5,47.5c5.1,2.9,10.6,5.2,16.7,6.8c14.1,3.8,29.3,3.7,44,3.7c13.8-0.1,26.7-0.1,37.8,2.9 c11.8,3.2,23.3,9.8,35.5,16.9c17.8,10.3,36.1,20.9,56.6,20.9c20.8,0,39.2-10.8,57-21.2c12.1-7,23.5-13.7,35-16.7 c11.5-3.1,24.6-3,38.6-3c20.7,0,42.1,0.1,60.1-10.3c17.7-10.2,28.4-28.6,38.6-46.3c7.1-12.3,13.9-23.8,22.5-32.4 c8.1-8.1,19.6-14.5,31.5-21.3c18.2-10.4,37.7-21.1,48.4-39.6c10.6-18.5,8.9-87.6,11.9-98.7c3.2-11.8,9.8-23.3,16.9-35.6 c10.3-17.8,20.9-36.1,20.9-56.6c0-20.8-10.7-39.2-21.1-57.1c-7-12.1-13.6-23.5-16.7-35c-3.1-11.5-3-24.7-3-38.7 C919.5,146.2,919.5,124.8,909.2,106.8z"></path>
                                </svg>
                                </div>
                                <a href="assets/images/gallery/5-2.jpg" className="lightbox-image link" data-fancybox="portfolio"></a>
                                <h3><a href="portfolio-single.html">Dapibus lectus</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Block */}
                    <div className="portfolio-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/gallery/1-3.jpg" alt=""/></figure>
                            </div>

                            <div className="portfolio-hover">
                                <div className="hover-effect">
                                    <svg x="0px" y="0px" viewBox="79 -202.7 1000 1000">
                                    <path d="M5459-1110.4L579.1-202.7c10.7,0,21.6,1.5,32.5,4.4c22.3,6,41.3,17,58,26.6c11.9,6.9,23,13.3,31.1,15.5 c6.8,1.8,19.4,1.8,26.2,1.8h12.9c27.5,0,59.4,1.4,89.3,18.7c32.8,19,50.2,49.3,64.1,73.7c6.2,10.9,12.6,22.1,17.8,27.3 c5.9,5.9,17.1,12.3,28.9,19.1c24,13.8,53.8,31,72.2,63c18.6,32.3,18.5,67,18.4,94.8c0,13.5-0.1,26.1,2,33.7 c2.1,7.7,8.4,18.7,15.2,30.3c14,24.1,31.4,54.1,31.4,91.3c0,36.8-17.2,66.6-31,90.6c-6.9,11.9-13.3,23-15.5,31.1 c-1.6,6.1-1.9,16.3-1.9,26.9c5.5,35.9-0.9,71-18.5,101.6c-18.9,32.7-49.1,50-73.4,63.9c-11.4,6.5-22.5,12.9-27.8,18.2 c-5.9,5.9-12.3,17-19,28.7c-14,24.2-31.1,54.1-63.1,72.5c-29.5,17-60.5,18.5-89.7,18.5h-10.3c-10.6,0-21.6,0.2-28.4,2 c-7.6,2-18.5,6.5-30.1,13.2c-24.1,14-54,29.6-91.3,29.6H579c-36.8,0-66.6-15.3-90.6-29.2c-11.8-6.8-22.9-12.3-31-14.4 c-6-1.6-16.1-1.4-26.1-1.4l-12.8,0.3c-17.5,0-37.9-0.3-58.4-5.8c-11.2-3-21.4-7.1-31-12.7c-33-19.1-50.3-49.4-64.3-73.8 c-6.2-10.8-12.6-22-17.8-27.2c-5.9-5.9-17-12.3-28.8-19.1c-24-13.8-53.8-31-72.3-63c-18.6-32.3-18.5-67-18.4-94.9 c0-13.4,0.1-26.1-2-33.7c-2-7.7-8.4-18.6-15.2-30.2c-14-24.1-31.4-54-31.4-91.3c0-36.8,17.2-66.7,31.1-90.7 c6.8-11.8,13.3-22.9,15.4-31c1.9-7.2,1.9-20.1,1.8-32.6c-0.1-28.1-0.2-63.1,18.8-95.9c19-32.9,49.3-50.2,73.6-64.2 c10.9-6.2,22.1-12.7,27.3-17.9c5.9-5.9,12.3-17.1,19.2-28.9c13.8-24,31-53.8,62.9-72.2c29.5-17,60.3-18.5,89.3-18.5h11 c10,0,21.3-0.2,28.2-2c7.6-2.1,18.6-8.4,30.1-15.1c24.3-14.1,54.3-31.5,91.4-31.6l4856-83.7l64-2888l-12016,96l-16,7000l7344,32 l4760,96L5459-1110.4z M909.2,106.8c-10.2-17.7-28.5-28.3-46.3-38.5c-12.2-7.1-23.8-13.7-32.4-22.3c-8.1-8.1-14.5-19.3-21.3-31.2 C798.8-3.3,788.1-22,769.7-32.7s-40-10.6-60.8-10.5c-13.7,0.1-26.6,0.1-37.7-2.9c-11.8-3.2-23.3-9.8-35.6-16.9 C623-70.3,610-77.8,596.2-81.5c-5.6-1.5-11.3-2.4-17.1-2.4c-20.7,0-39.2,10.8-57,21.1c-12.1,7-23.5,13.7-35,16.8s-24.7,3-38.6,3 c-20.6-0.1-42-0.1-59.9,10.3c-17.7,10.2-28.3,28.6-38.5,46.3c-7.1,12.3-13.7,23.8-22.3,32.5c-8.1,8.1-19.4,14.6-31.2,21.4 c-18.1,10.4-36.8,21.1-47.4,39.5c-10.7,18.5-10.6,40-10.5,60.9c0,13.7,0.1,26.6-2.9,37.8c-3.2,11.8-9.8,23.3-16.9,35.5 C208.6,259,198,277.4,198,297.8c0,20.8,10.7,39.2,21.1,57.1c7,12.1,13.6,23.5,16.7,35c3.1,11.5,3,24.6,3,38.6 c-0.1,20.7-0.1,42,10.2,60.1c10.2,17.7,28.5,28.3,46.3,38.5c12.2,7.1,23.8,13.7,32.4,22.3c8.1,8.1,14.5,19.3,21.3,31.2 c10.4,18.2,21.1,36.9,39.5,47.5c5.1,2.9,10.6,5.2,16.7,6.8c14.1,3.8,29.3,3.7,44,3.7c13.8-0.1,26.7-0.1,37.8,2.9 c11.8,3.2,23.3,9.8,35.5,16.9c17.8,10.3,36.1,20.9,56.6,20.9c20.8,0,39.2-10.8,57-21.2c12.1-7,23.5-13.7,35-16.7 c11.5-3.1,24.6-3,38.6-3c20.7,0,42.1,0.1,60.1-10.3c17.7-10.2,28.4-28.6,38.6-46.3c7.1-12.3,13.9-23.8,22.5-32.4 c8.1-8.1,19.6-14.5,31.5-21.3c18.2-10.4,37.7-21.1,48.4-39.6c10.6-18.5,8.9-87.6,11.9-98.7c3.2-11.8,9.8-23.3,16.9-35.6 c10.3-17.8,20.9-36.1,20.9-56.6c0-20.8-10.7-39.2-21.1-57.1c-7-12.1-13.6-23.5-16.7-35c-3.1-11.5-3-24.7-3-38.7 C919.5,146.2,919.5,124.8,909.2,106.8z"></path>
                                </svg>
                                </div>
                                <a href="assets/images/gallery/5-3.jpg" className="lightbox-image link" data-fancybox="portfolio"></a>
                                <h3><a href="portfolio-single.html">Dapibus lectus</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Block */}
                    <div className="portfolio-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/gallery/1-4.jpg" alt=""/></figure>
                            </div>

                            <div className="portfolio-hover">
                                <div className="hover-effect">
                                    <svg x="0px" y="0px" viewBox="79 -202.7 1000 1000">
                                    <path d="M5459-1110.4L579.1-202.7c10.7,0,21.6,1.5,32.5,4.4c22.3,6,41.3,17,58,26.6c11.9,6.9,23,13.3,31.1,15.5 c6.8,1.8,19.4,1.8,26.2,1.8h12.9c27.5,0,59.4,1.4,89.3,18.7c32.8,19,50.2,49.3,64.1,73.7c6.2,10.9,12.6,22.1,17.8,27.3 c5.9,5.9,17.1,12.3,28.9,19.1c24,13.8,53.8,31,72.2,63c18.6,32.3,18.5,67,18.4,94.8c0,13.5-0.1,26.1,2,33.7 c2.1,7.7,8.4,18.7,15.2,30.3c14,24.1,31.4,54.1,31.4,91.3c0,36.8-17.2,66.6-31,90.6c-6.9,11.9-13.3,23-15.5,31.1 c-1.6,6.1-1.9,16.3-1.9,26.9c5.5,35.9-0.9,71-18.5,101.6c-18.9,32.7-49.1,50-73.4,63.9c-11.4,6.5-22.5,12.9-27.8,18.2 c-5.9,5.9-12.3,17-19,28.7c-14,24.2-31.1,54.1-63.1,72.5c-29.5,17-60.5,18.5-89.7,18.5h-10.3c-10.6,0-21.6,0.2-28.4,2 c-7.6,2-18.5,6.5-30.1,13.2c-24.1,14-54,29.6-91.3,29.6H579c-36.8,0-66.6-15.3-90.6-29.2c-11.8-6.8-22.9-12.3-31-14.4 c-6-1.6-16.1-1.4-26.1-1.4l-12.8,0.3c-17.5,0-37.9-0.3-58.4-5.8c-11.2-3-21.4-7.1-31-12.7c-33-19.1-50.3-49.4-64.3-73.8 c-6.2-10.8-12.6-22-17.8-27.2c-5.9-5.9-17-12.3-28.8-19.1c-24-13.8-53.8-31-72.3-63c-18.6-32.3-18.5-67-18.4-94.9 c0-13.4,0.1-26.1-2-33.7c-2-7.7-8.4-18.6-15.2-30.2c-14-24.1-31.4-54-31.4-91.3c0-36.8,17.2-66.7,31.1-90.7 c6.8-11.8,13.3-22.9,15.4-31c1.9-7.2,1.9-20.1,1.8-32.6c-0.1-28.1-0.2-63.1,18.8-95.9c19-32.9,49.3-50.2,73.6-64.2 c10.9-6.2,22.1-12.7,27.3-17.9c5.9-5.9,12.3-17.1,19.2-28.9c13.8-24,31-53.8,62.9-72.2c29.5-17,60.3-18.5,89.3-18.5h11 c10,0,21.3-0.2,28.2-2c7.6-2.1,18.6-8.4,30.1-15.1c24.3-14.1,54.3-31.5,91.4-31.6l4856-83.7l64-2888l-12016,96l-16,7000l7344,32 l4760,96L5459-1110.4z M909.2,106.8c-10.2-17.7-28.5-28.3-46.3-38.5c-12.2-7.1-23.8-13.7-32.4-22.3c-8.1-8.1-14.5-19.3-21.3-31.2 C798.8-3.3,788.1-22,769.7-32.7s-40-10.6-60.8-10.5c-13.7,0.1-26.6,0.1-37.7-2.9c-11.8-3.2-23.3-9.8-35.6-16.9 C623-70.3,610-77.8,596.2-81.5c-5.6-1.5-11.3-2.4-17.1-2.4c-20.7,0-39.2,10.8-57,21.1c-12.1,7-23.5,13.7-35,16.8s-24.7,3-38.6,3 c-20.6-0.1-42-0.1-59.9,10.3c-17.7,10.2-28.3,28.6-38.5,46.3c-7.1,12.3-13.7,23.8-22.3,32.5c-8.1,8.1-19.4,14.6-31.2,21.4 c-18.1,10.4-36.8,21.1-47.4,39.5c-10.7,18.5-10.6,40-10.5,60.9c0,13.7,0.1,26.6-2.9,37.8c-3.2,11.8-9.8,23.3-16.9,35.5 C208.6,259,198,277.4,198,297.8c0,20.8,10.7,39.2,21.1,57.1c7,12.1,13.6,23.5,16.7,35c3.1,11.5,3,24.6,3,38.6 c-0.1,20.7-0.1,42,10.2,60.1c10.2,17.7,28.5,28.3,46.3,38.5c12.2,7.1,23.8,13.7,32.4,22.3c8.1,8.1,14.5,19.3,21.3,31.2 c10.4,18.2,21.1,36.9,39.5,47.5c5.1,2.9,10.6,5.2,16.7,6.8c14.1,3.8,29.3,3.7,44,3.7c13.8-0.1,26.7-0.1,37.8,2.9 c11.8,3.2,23.3,9.8,35.5,16.9c17.8,10.3,36.1,20.9,56.6,20.9c20.8,0,39.2-10.8,57-21.2c12.1-7,23.5-13.7,35-16.7 c11.5-3.1,24.6-3,38.6-3c20.7,0,42.1,0.1,60.1-10.3c17.7-10.2,28.4-28.6,38.6-46.3c7.1-12.3,13.9-23.8,22.5-32.4 c8.1-8.1,19.6-14.5,31.5-21.3c18.2-10.4,37.7-21.1,48.4-39.6c10.6-18.5,8.9-87.6,11.9-98.7c3.2-11.8,9.8-23.3,16.9-35.6 c10.3-17.8,20.9-36.1,20.9-56.6c0-20.8-10.7-39.2-21.1-57.1c-7-12.1-13.6-23.5-16.7-35c-3.1-11.5-3-24.7-3-38.7 C919.5,146.2,919.5,124.8,909.2,106.8z"></path>
                                </svg>
                                </div>
                                <a href="assets/images/gallery/5-4.jpg" className="lightbox-image link" data-fancybox="portfolio"></a>
                                <h3><a href="portfolio-single.html">Dapibus lectus</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Block */}
                    <div className="portfolio-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/gallery/1-5.jpg" alt=""/></figure>
                            </div>

                            <div className="portfolio-hover">
                                <div className="hover-effect">
                                    <svg x="0px" y="0px" viewBox="79 -202.7 1000 1000">
                                    <path d="M5459-1110.4L579.1-202.7c10.7,0,21.6,1.5,32.5,4.4c22.3,6,41.3,17,58,26.6c11.9,6.9,23,13.3,31.1,15.5 c6.8,1.8,19.4,1.8,26.2,1.8h12.9c27.5,0,59.4,1.4,89.3,18.7c32.8,19,50.2,49.3,64.1,73.7c6.2,10.9,12.6,22.1,17.8,27.3 c5.9,5.9,17.1,12.3,28.9,19.1c24,13.8,53.8,31,72.2,63c18.6,32.3,18.5,67,18.4,94.8c0,13.5-0.1,26.1,2,33.7 c2.1,7.7,8.4,18.7,15.2,30.3c14,24.1,31.4,54.1,31.4,91.3c0,36.8-17.2,66.6-31,90.6c-6.9,11.9-13.3,23-15.5,31.1 c-1.6,6.1-1.9,16.3-1.9,26.9c5.5,35.9-0.9,71-18.5,101.6c-18.9,32.7-49.1,50-73.4,63.9c-11.4,6.5-22.5,12.9-27.8,18.2 c-5.9,5.9-12.3,17-19,28.7c-14,24.2-31.1,54.1-63.1,72.5c-29.5,17-60.5,18.5-89.7,18.5h-10.3c-10.6,0-21.6,0.2-28.4,2 c-7.6,2-18.5,6.5-30.1,13.2c-24.1,14-54,29.6-91.3,29.6H579c-36.8,0-66.6-15.3-90.6-29.2c-11.8-6.8-22.9-12.3-31-14.4 c-6-1.6-16.1-1.4-26.1-1.4l-12.8,0.3c-17.5,0-37.9-0.3-58.4-5.8c-11.2-3-21.4-7.1-31-12.7c-33-19.1-50.3-49.4-64.3-73.8 c-6.2-10.8-12.6-22-17.8-27.2c-5.9-5.9-17-12.3-28.8-19.1c-24-13.8-53.8-31-72.3-63c-18.6-32.3-18.5-67-18.4-94.9 c0-13.4,0.1-26.1-2-33.7c-2-7.7-8.4-18.6-15.2-30.2c-14-24.1-31.4-54-31.4-91.3c0-36.8,17.2-66.7,31.1-90.7 c6.8-11.8,13.3-22.9,15.4-31c1.9-7.2,1.9-20.1,1.8-32.6c-0.1-28.1-0.2-63.1,18.8-95.9c19-32.9,49.3-50.2,73.6-64.2 c10.9-6.2,22.1-12.7,27.3-17.9c5.9-5.9,12.3-17.1,19.2-28.9c13.8-24,31-53.8,62.9-72.2c29.5-17,60.3-18.5,89.3-18.5h11 c10,0,21.3-0.2,28.2-2c7.6-2.1,18.6-8.4,30.1-15.1c24.3-14.1,54.3-31.5,91.4-31.6l4856-83.7l64-2888l-12016,96l-16,7000l7344,32 l4760,96L5459-1110.4z M909.2,106.8c-10.2-17.7-28.5-28.3-46.3-38.5c-12.2-7.1-23.8-13.7-32.4-22.3c-8.1-8.1-14.5-19.3-21.3-31.2 C798.8-3.3,788.1-22,769.7-32.7s-40-10.6-60.8-10.5c-13.7,0.1-26.6,0.1-37.7-2.9c-11.8-3.2-23.3-9.8-35.6-16.9 C623-70.3,610-77.8,596.2-81.5c-5.6-1.5-11.3-2.4-17.1-2.4c-20.7,0-39.2,10.8-57,21.1c-12.1,7-23.5,13.7-35,16.8s-24.7,3-38.6,3 c-20.6-0.1-42-0.1-59.9,10.3c-17.7,10.2-28.3,28.6-38.5,46.3c-7.1,12.3-13.7,23.8-22.3,32.5c-8.1,8.1-19.4,14.6-31.2,21.4 c-18.1,10.4-36.8,21.1-47.4,39.5c-10.7,18.5-10.6,40-10.5,60.9c0,13.7,0.1,26.6-2.9,37.8c-3.2,11.8-9.8,23.3-16.9,35.5 C208.6,259,198,277.4,198,297.8c0,20.8,10.7,39.2,21.1,57.1c7,12.1,13.6,23.5,16.7,35c3.1,11.5,3,24.6,3,38.6 c-0.1,20.7-0.1,42,10.2,60.1c10.2,17.7,28.5,28.3,46.3,38.5c12.2,7.1,23.8,13.7,32.4,22.3c8.1,8.1,14.5,19.3,21.3,31.2 c10.4,18.2,21.1,36.9,39.5,47.5c5.1,2.9,10.6,5.2,16.7,6.8c14.1,3.8,29.3,3.7,44,3.7c13.8-0.1,26.7-0.1,37.8,2.9 c11.8,3.2,23.3,9.8,35.5,16.9c17.8,10.3,36.1,20.9,56.6,20.9c20.8,0,39.2-10.8,57-21.2c12.1-7,23.5-13.7,35-16.7 c11.5-3.1,24.6-3,38.6-3c20.7,0,42.1,0.1,60.1-10.3c17.7-10.2,28.4-28.6,38.6-46.3c7.1-12.3,13.9-23.8,22.5-32.4 c8.1-8.1,19.6-14.5,31.5-21.3c18.2-10.4,37.7-21.1,48.4-39.6c10.6-18.5,8.9-87.6,11.9-98.7c3.2-11.8,9.8-23.3,16.9-35.6 c10.3-17.8,20.9-36.1,20.9-56.6c0-20.8-10.7-39.2-21.1-57.1c-7-12.1-13.6-23.5-16.7-35c-3.1-11.5-3-24.7-3-38.7 C919.5,146.2,919.5,124.8,909.2,106.8z"></path>
                                </svg>
                                </div>
                                <a href="assets/images/gallery/5-5.jpg" className="lightbox-image link" data-fancybox="portfolio"></a>
                                <h3><a href="portfolio-single.html">Dapibus lectus</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Block */}
                    <div className="portfolio-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/gallery/1-6.jpg" alt=""/></figure>
                            </div>

                            <div className="portfolio-hover">
                                <div className="hover-effect">
                                    <svg x="0px" y="0px" viewBox="79 -202.7 1000 1000">
                                    <path d="M5459-1110.4L579.1-202.7c10.7,0,21.6,1.5,32.5,4.4c22.3,6,41.3,17,58,26.6c11.9,6.9,23,13.3,31.1,15.5 c6.8,1.8,19.4,1.8,26.2,1.8h12.9c27.5,0,59.4,1.4,89.3,18.7c32.8,19,50.2,49.3,64.1,73.7c6.2,10.9,12.6,22.1,17.8,27.3 c5.9,5.9,17.1,12.3,28.9,19.1c24,13.8,53.8,31,72.2,63c18.6,32.3,18.5,67,18.4,94.8c0,13.5-0.1,26.1,2,33.7 c2.1,7.7,8.4,18.7,15.2,30.3c14,24.1,31.4,54.1,31.4,91.3c0,36.8-17.2,66.6-31,90.6c-6.9,11.9-13.3,23-15.5,31.1 c-1.6,6.1-1.9,16.3-1.9,26.9c5.5,35.9-0.9,71-18.5,101.6c-18.9,32.7-49.1,50-73.4,63.9c-11.4,6.5-22.5,12.9-27.8,18.2 c-5.9,5.9-12.3,17-19,28.7c-14,24.2-31.1,54.1-63.1,72.5c-29.5,17-60.5,18.5-89.7,18.5h-10.3c-10.6,0-21.6,0.2-28.4,2 c-7.6,2-18.5,6.5-30.1,13.2c-24.1,14-54,29.6-91.3,29.6H579c-36.8,0-66.6-15.3-90.6-29.2c-11.8-6.8-22.9-12.3-31-14.4 c-6-1.6-16.1-1.4-26.1-1.4l-12.8,0.3c-17.5,0-37.9-0.3-58.4-5.8c-11.2-3-21.4-7.1-31-12.7c-33-19.1-50.3-49.4-64.3-73.8 c-6.2-10.8-12.6-22-17.8-27.2c-5.9-5.9-17-12.3-28.8-19.1c-24-13.8-53.8-31-72.3-63c-18.6-32.3-18.5-67-18.4-94.9 c0-13.4,0.1-26.1-2-33.7c-2-7.7-8.4-18.6-15.2-30.2c-14-24.1-31.4-54-31.4-91.3c0-36.8,17.2-66.7,31.1-90.7 c6.8-11.8,13.3-22.9,15.4-31c1.9-7.2,1.9-20.1,1.8-32.6c-0.1-28.1-0.2-63.1,18.8-95.9c19-32.9,49.3-50.2,73.6-64.2 c10.9-6.2,22.1-12.7,27.3-17.9c5.9-5.9,12.3-17.1,19.2-28.9c13.8-24,31-53.8,62.9-72.2c29.5-17,60.3-18.5,89.3-18.5h11 c10,0,21.3-0.2,28.2-2c7.6-2.1,18.6-8.4,30.1-15.1c24.3-14.1,54.3-31.5,91.4-31.6l4856-83.7l64-2888l-12016,96l-16,7000l7344,32 l4760,96L5459-1110.4z M909.2,106.8c-10.2-17.7-28.5-28.3-46.3-38.5c-12.2-7.1-23.8-13.7-32.4-22.3c-8.1-8.1-14.5-19.3-21.3-31.2 C798.8-3.3,788.1-22,769.7-32.7s-40-10.6-60.8-10.5c-13.7,0.1-26.6,0.1-37.7-2.9c-11.8-3.2-23.3-9.8-35.6-16.9 C623-70.3,610-77.8,596.2-81.5c-5.6-1.5-11.3-2.4-17.1-2.4c-20.7,0-39.2,10.8-57,21.1c-12.1,7-23.5,13.7-35,16.8s-24.7,3-38.6,3 c-20.6-0.1-42-0.1-59.9,10.3c-17.7,10.2-28.3,28.6-38.5,46.3c-7.1,12.3-13.7,23.8-22.3,32.5c-8.1,8.1-19.4,14.6-31.2,21.4 c-18.1,10.4-36.8,21.1-47.4,39.5c-10.7,18.5-10.6,40-10.5,60.9c0,13.7,0.1,26.6-2.9,37.8c-3.2,11.8-9.8,23.3-16.9,35.5 C208.6,259,198,277.4,198,297.8c0,20.8,10.7,39.2,21.1,57.1c7,12.1,13.6,23.5,16.7,35c3.1,11.5,3,24.6,3,38.6 c-0.1,20.7-0.1,42,10.2,60.1c10.2,17.7,28.5,28.3,46.3,38.5c12.2,7.1,23.8,13.7,32.4,22.3c8.1,8.1,14.5,19.3,21.3,31.2 c10.4,18.2,21.1,36.9,39.5,47.5c5.1,2.9,10.6,5.2,16.7,6.8c14.1,3.8,29.3,3.7,44,3.7c13.8-0.1,26.7-0.1,37.8,2.9 c11.8,3.2,23.3,9.8,35.5,16.9c17.8,10.3,36.1,20.9,56.6,20.9c20.8,0,39.2-10.8,57-21.2c12.1-7,23.5-13.7,35-16.7 c11.5-3.1,24.6-3,38.6-3c20.7,0,42.1,0.1,60.1-10.3c17.7-10.2,28.4-28.6,38.6-46.3c7.1-12.3,13.9-23.8,22.5-32.4 c8.1-8.1,19.6-14.5,31.5-21.3c18.2-10.4,37.7-21.1,48.4-39.6c10.6-18.5,8.9-87.6,11.9-98.7c3.2-11.8,9.8-23.3,16.9-35.6 c10.3-17.8,20.9-36.1,20.9-56.6c0-20.8-10.7-39.2-21.1-57.1c-7-12.1-13.6-23.5-16.7-35c-3.1-11.5-3-24.7-3-38.7 C919.5,146.2,919.5,124.8,909.2,106.8z"></path>
                                </svg>
                                </div>
                                <a href="assets/images/gallery/5-6.jpg" className="lightbox-image link" data-fancybox="portfolio"></a>
                                <h3><a href="portfolio-single.html">Dapibus lectus</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Block */}
                    <div className="portfolio-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/gallery/1-7.jpg" alt=""/></figure>
                            </div>

                            <div className="portfolio-hover">
                                <div className="hover-effect">
                                    <svg x="0px" y="0px" viewBox="79 -202.7 1000 1000">
                                    <path d="M5459-1110.4L579.1-202.7c10.7,0,21.6,1.5,32.5,4.4c22.3,6,41.3,17,58,26.6c11.9,6.9,23,13.3,31.1,15.5 c6.8,1.8,19.4,1.8,26.2,1.8h12.9c27.5,0,59.4,1.4,89.3,18.7c32.8,19,50.2,49.3,64.1,73.7c6.2,10.9,12.6,22.1,17.8,27.3 c5.9,5.9,17.1,12.3,28.9,19.1c24,13.8,53.8,31,72.2,63c18.6,32.3,18.5,67,18.4,94.8c0,13.5-0.1,26.1,2,33.7 c2.1,7.7,8.4,18.7,15.2,30.3c14,24.1,31.4,54.1,31.4,91.3c0,36.8-17.2,66.6-31,90.6c-6.9,11.9-13.3,23-15.5,31.1 c-1.6,6.1-1.9,16.3-1.9,26.9c5.5,35.9-0.9,71-18.5,101.6c-18.9,32.7-49.1,50-73.4,63.9c-11.4,6.5-22.5,12.9-27.8,18.2 c-5.9,5.9-12.3,17-19,28.7c-14,24.2-31.1,54.1-63.1,72.5c-29.5,17-60.5,18.5-89.7,18.5h-10.3c-10.6,0-21.6,0.2-28.4,2 c-7.6,2-18.5,6.5-30.1,13.2c-24.1,14-54,29.6-91.3,29.6H579c-36.8,0-66.6-15.3-90.6-29.2c-11.8-6.8-22.9-12.3-31-14.4 c-6-1.6-16.1-1.4-26.1-1.4l-12.8,0.3c-17.5,0-37.9-0.3-58.4-5.8c-11.2-3-21.4-7.1-31-12.7c-33-19.1-50.3-49.4-64.3-73.8 c-6.2-10.8-12.6-22-17.8-27.2c-5.9-5.9-17-12.3-28.8-19.1c-24-13.8-53.8-31-72.3-63c-18.6-32.3-18.5-67-18.4-94.9 c0-13.4,0.1-26.1-2-33.7c-2-7.7-8.4-18.6-15.2-30.2c-14-24.1-31.4-54-31.4-91.3c0-36.8,17.2-66.7,31.1-90.7 c6.8-11.8,13.3-22.9,15.4-31c1.9-7.2,1.9-20.1,1.8-32.6c-0.1-28.1-0.2-63.1,18.8-95.9c19-32.9,49.3-50.2,73.6-64.2 c10.9-6.2,22.1-12.7,27.3-17.9c5.9-5.9,12.3-17.1,19.2-28.9c13.8-24,31-53.8,62.9-72.2c29.5-17,60.3-18.5,89.3-18.5h11 c10,0,21.3-0.2,28.2-2c7.6-2.1,18.6-8.4,30.1-15.1c24.3-14.1,54.3-31.5,91.4-31.6l4856-83.7l64-2888l-12016,96l-16,7000l7344,32 l4760,96L5459-1110.4z M909.2,106.8c-10.2-17.7-28.5-28.3-46.3-38.5c-12.2-7.1-23.8-13.7-32.4-22.3c-8.1-8.1-14.5-19.3-21.3-31.2 C798.8-3.3,788.1-22,769.7-32.7s-40-10.6-60.8-10.5c-13.7,0.1-26.6,0.1-37.7-2.9c-11.8-3.2-23.3-9.8-35.6-16.9 C623-70.3,610-77.8,596.2-81.5c-5.6-1.5-11.3-2.4-17.1-2.4c-20.7,0-39.2,10.8-57,21.1c-12.1,7-23.5,13.7-35,16.8s-24.7,3-38.6,3 c-20.6-0.1-42-0.1-59.9,10.3c-17.7,10.2-28.3,28.6-38.5,46.3c-7.1,12.3-13.7,23.8-22.3,32.5c-8.1,8.1-19.4,14.6-31.2,21.4 c-18.1,10.4-36.8,21.1-47.4,39.5c-10.7,18.5-10.6,40-10.5,60.9c0,13.7,0.1,26.6-2.9,37.8c-3.2,11.8-9.8,23.3-16.9,35.5 C208.6,259,198,277.4,198,297.8c0,20.8,10.7,39.2,21.1,57.1c7,12.1,13.6,23.5,16.7,35c3.1,11.5,3,24.6,3,38.6 c-0.1,20.7-0.1,42,10.2,60.1c10.2,17.7,28.5,28.3,46.3,38.5c12.2,7.1,23.8,13.7,32.4,22.3c8.1,8.1,14.5,19.3,21.3,31.2 c10.4,18.2,21.1,36.9,39.5,47.5c5.1,2.9,10.6,5.2,16.7,6.8c14.1,3.8,29.3,3.7,44,3.7c13.8-0.1,26.7-0.1,37.8,2.9 c11.8,3.2,23.3,9.8,35.5,16.9c17.8,10.3,36.1,20.9,56.6,20.9c20.8,0,39.2-10.8,57-21.2c12.1-7,23.5-13.7,35-16.7 c11.5-3.1,24.6-3,38.6-3c20.7,0,42.1,0.1,60.1-10.3c17.7-10.2,28.4-28.6,38.6-46.3c7.1-12.3,13.9-23.8,22.5-32.4 c8.1-8.1,19.6-14.5,31.5-21.3c18.2-10.4,37.7-21.1,48.4-39.6c10.6-18.5,8.9-87.6,11.9-98.7c3.2-11.8,9.8-23.3,16.9-35.6 c10.3-17.8,20.9-36.1,20.9-56.6c0-20.8-10.7-39.2-21.1-57.1c-7-12.1-13.6-23.5-16.7-35c-3.1-11.5-3-24.7-3-38.7 C919.5,146.2,919.5,124.8,909.2,106.8z"></path>
                                </svg>
                                </div>
                                <a href="assets/images/gallery/5-7.jpg" className="lightbox-image link" data-fancybox="portfolio"></a>
                                <h3><a href="portfolio-single.html">Dapibus lectus</a></h3>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Block */}
                    <div className="portfolio-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/gallery/1-8.jpg" alt=""/></figure>
                            </div>

                            <div className="portfolio-hover">
                                <div className="hover-effect">
                                    <svg x="0px" y="0px" viewBox="79 -202.7 1000 1000">
                                    <path d="M5459-1110.4L579.1-202.7c10.7,0,21.6,1.5,32.5,4.4c22.3,6,41.3,17,58,26.6c11.9,6.9,23,13.3,31.1,15.5 c6.8,1.8,19.4,1.8,26.2,1.8h12.9c27.5,0,59.4,1.4,89.3,18.7c32.8,19,50.2,49.3,64.1,73.7c6.2,10.9,12.6,22.1,17.8,27.3 c5.9,5.9,17.1,12.3,28.9,19.1c24,13.8,53.8,31,72.2,63c18.6,32.3,18.5,67,18.4,94.8c0,13.5-0.1,26.1,2,33.7 c2.1,7.7,8.4,18.7,15.2,30.3c14,24.1,31.4,54.1,31.4,91.3c0,36.8-17.2,66.6-31,90.6c-6.9,11.9-13.3,23-15.5,31.1 c-1.6,6.1-1.9,16.3-1.9,26.9c5.5,35.9-0.9,71-18.5,101.6c-18.9,32.7-49.1,50-73.4,63.9c-11.4,6.5-22.5,12.9-27.8,18.2 c-5.9,5.9-12.3,17-19,28.7c-14,24.2-31.1,54.1-63.1,72.5c-29.5,17-60.5,18.5-89.7,18.5h-10.3c-10.6,0-21.6,0.2-28.4,2 c-7.6,2-18.5,6.5-30.1,13.2c-24.1,14-54,29.6-91.3,29.6H579c-36.8,0-66.6-15.3-90.6-29.2c-11.8-6.8-22.9-12.3-31-14.4 c-6-1.6-16.1-1.4-26.1-1.4l-12.8,0.3c-17.5,0-37.9-0.3-58.4-5.8c-11.2-3-21.4-7.1-31-12.7c-33-19.1-50.3-49.4-64.3-73.8 c-6.2-10.8-12.6-22-17.8-27.2c-5.9-5.9-17-12.3-28.8-19.1c-24-13.8-53.8-31-72.3-63c-18.6-32.3-18.5-67-18.4-94.9 c0-13.4,0.1-26.1-2-33.7c-2-7.7-8.4-18.6-15.2-30.2c-14-24.1-31.4-54-31.4-91.3c0-36.8,17.2-66.7,31.1-90.7 c6.8-11.8,13.3-22.9,15.4-31c1.9-7.2,1.9-20.1,1.8-32.6c-0.1-28.1-0.2-63.1,18.8-95.9c19-32.9,49.3-50.2,73.6-64.2 c10.9-6.2,22.1-12.7,27.3-17.9c5.9-5.9,12.3-17.1,19.2-28.9c13.8-24,31-53.8,62.9-72.2c29.5-17,60.3-18.5,89.3-18.5h11 c10,0,21.3-0.2,28.2-2c7.6-2.1,18.6-8.4,30.1-15.1c24.3-14.1,54.3-31.5,91.4-31.6l4856-83.7l64-2888l-12016,96l-16,7000l7344,32 l4760,96L5459-1110.4z M909.2,106.8c-10.2-17.7-28.5-28.3-46.3-38.5c-12.2-7.1-23.8-13.7-32.4-22.3c-8.1-8.1-14.5-19.3-21.3-31.2 C798.8-3.3,788.1-22,769.7-32.7s-40-10.6-60.8-10.5c-13.7,0.1-26.6,0.1-37.7-2.9c-11.8-3.2-23.3-9.8-35.6-16.9 C623-70.3,610-77.8,596.2-81.5c-5.6-1.5-11.3-2.4-17.1-2.4c-20.7,0-39.2,10.8-57,21.1c-12.1,7-23.5,13.7-35,16.8s-24.7,3-38.6,3 c-20.6-0.1-42-0.1-59.9,10.3c-17.7,10.2-28.3,28.6-38.5,46.3c-7.1,12.3-13.7,23.8-22.3,32.5c-8.1,8.1-19.4,14.6-31.2,21.4 c-18.1,10.4-36.8,21.1-47.4,39.5c-10.7,18.5-10.6,40-10.5,60.9c0,13.7,0.1,26.6-2.9,37.8c-3.2,11.8-9.8,23.3-16.9,35.5 C208.6,259,198,277.4,198,297.8c0,20.8,10.7,39.2,21.1,57.1c7,12.1,13.6,23.5,16.7,35c3.1,11.5,3,24.6,3,38.6 c-0.1,20.7-0.1,42,10.2,60.1c10.2,17.7,28.5,28.3,46.3,38.5c12.2,7.1,23.8,13.7,32.4,22.3c8.1,8.1,14.5,19.3,21.3,31.2 c10.4,18.2,21.1,36.9,39.5,47.5c5.1,2.9,10.6,5.2,16.7,6.8c14.1,3.8,29.3,3.7,44,3.7c13.8-0.1,26.7-0.1,37.8,2.9 c11.8,3.2,23.3,9.8,35.5,16.9c17.8,10.3,36.1,20.9,56.6,20.9c20.8,0,39.2-10.8,57-21.2c12.1-7,23.5-13.7,35-16.7 c11.5-3.1,24.6-3,38.6-3c20.7,0,42.1,0.1,60.1-10.3c17.7-10.2,28.4-28.6,38.6-46.3c7.1-12.3,13.9-23.8,22.5-32.4 c8.1-8.1,19.6-14.5,31.5-21.3c18.2-10.4,37.7-21.1,48.4-39.6c10.6-18.5,8.9-87.6,11.9-98.7c3.2-11.8,9.8-23.3,16.9-35.6 c10.3-17.8,20.9-36.1,20.9-56.6c0-20.8-10.7-39.2-21.1-57.1c-7-12.1-13.6-23.5-16.7-35c-3.1-11.5-3-24.7-3-38.7 C919.5,146.2,919.5,124.8,909.2,106.8z"></path>
                                </svg>
                                </div>
                                <a href="assets/images/gallery/5-8.jpg" className="lightbox-image link" data-fancybox="portfolio"></a>
                                <h3><a href="portfolio-single.html">Dapibus lectus</a></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cws_divider margin-top-40"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>

                {/* Sec title */}
                <div className="sec-title text-center margin-top-50">
                    <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
                    <h2>Gallery</h2>
                </div>

                {/* Gallery Carousel */}
                <div className="single-item-carousel owl-carousel owl-theme default-arrows">
                    <div className="gallery-item">
                        <figure className="image"><a href="assets/images/gallery/1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/gallery/1.jpg" alt=""/></a></figure>
                    </div>

                    <div className="gallery-item">
                        <figure className="image"><a href="assets/images/gallery/2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/gallery/2.jpg" alt=""/></a></figure>
                    </div>

                    <div className="gallery-item">
                        <figure className="image"><a href="assets/images/gallery/3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/gallery/3.jpg" alt=""/></a></figure>
                    </div>
                </div>

                <div className="cws_divider margin-top-50"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>

                {/* Sec title */}
                <div className="sec-title text-center margin-top-50">
                    <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
                    <h2>Pie Chart</h2>
                </div>

                <div className="row">
                    {/* Pie Graph */}
                    <div className="pie-graph col-lg-3 col-md-6 col-sm-12">
                        <div className="graph-outer">
                            <input type="text" className="dial" data-fgColor="#5fcac7" data-bgColor="#f9f9f9" data-width="216" data-height="216" data-linecap="normal" value="75"/>
                            <div className="inner-text count-box"><span className="count-text txt" data-stop="75" data-speed="2000"></span>%</div>
                        </div>
                        <h4>Occasion Cakes</h4>
                    </div>

                    {/* Pie Graph */}
                    <div className="pie-graph col-lg-3 col-md-6 col-sm-12">
                        <div className="graph-outer">
                            <input type="text" className="dial" data-fgColor="#ff91a4" data-bgColor="#f9f9f9" data-width="216" data-height="216" data-linecap="normal" value="45"/>
                            <div className="inner-text count-box"><span className="count-text txt" data-stop="45" data-speed="2000"></span>%</div>
                        </div>
                        <h4>Cupcakes</h4>
                    </div>

                    {/* Pie Graph */}
                    <div className="pie-graph col-lg-3 col-md-6 col-sm-12">
                        <div className="graph-outer">
                            <input type="text" className="dial" data-fgColor="#5fcac7" data-bgColor="#f9f9f9" data-width="216" data-height="216" data-linecap="normal" value="80"/>
                            <div className="inner-text count-box"><span className="count-text txt" data-stop="80" data-speed="2000"></span>%</div>
                        </div>
                        <h4>Macarons</h4>
                    </div>

                    {/* Pie Graph */}
                    <div className="pie-graph col-lg-3 col-md-6 col-sm-12">
                        <div className="graph-outer">
                            <input type="text" className="dial" data-fgColor="#ff91a4" data-bgColor="#f9f9f9" data-width="216" data-height="216" data-linecap="normal" value="50"/>
                            <div className="inner-text count-box"><span className="count-text txt" data-stop="50" data-speed="2000"></span>%</div>
                        </div>
                        <h4>Small Cakes</h4>
                    </div>
                </div>

                <div className="cws_divider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>

                {/* Sec title */}
                <div className="sec-title text-center margin-top-50">
                    <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
                    <h2>Banners</h2>
                </div>

                <div className="row">
                    {/* Banner Box */}
                    <div className="banner-box col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-box text-right"
                         style={{backgroundImage:"url("+"assets/images/resource/banner-1.jpg"+")"}}
                        // style="background-image: url(images/resource/banner-1.jpg);"
                        >
                            <h4>Sweet<br/>For Your<br/> Party</h4>
                            <a href="shop.html" className="theme-btn btn-style-two small bg-pink"><span></span>Shop Now<span></span></a>
                        </div>
                    </div>

                    {/* Banner Box */}
                    <div className="banner-box col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-box" 
                        style={{backgroundImage:"url("+"assets/images/resource/banner-2.jpg"+")"}}
                        // style="background-image: url(images/resource/banner-2.jpg);"
                        >
                            <h4>Any Design<br/>For You</h4>
                            <a href="shop.html" className="theme-btn btn-style-two small bg-sky"><span></span>Shop Now<span></span></a>
                        </div>
                    </div>

                    {/* Banner Box */}
                    <div className="banner-box col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-box text-center" 
                        style={{backgroundImage:"url("+"assets/images/resource/banner-3.jpg"+")"}}
                        // style="background-image: url(images/resource/banner-3.jpg);"
                        >
                            <h2>-50%</h2>
                            <h4>Just Today</h4>
                            <a href="shop.html" className="theme-btn btn-style-two small bg-pink"><span></span>Shop Now<span></span></a>
                        </div>
                    </div>
                </div>

                <div className="cws_divider margin-top-20"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>

                {/* Sec title */}
                <div className="sec-title text-center margin-top-50">
                    <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
                    <h2>Testimonials</h2>
                </div>

                {/* Testimonial Carousel */}
                <div className="testimonial-carousel-two owl-carousel owl-theme default-dots no-arrows text-center">

                    {/* Testimonial Block */}
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="testimonial_img">
                                <svg className="div_left" fill="#ffffff" viewBox="0 0 25 8"><path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path></svg>

                                {/* Thumb Box */}
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-5.jpg" alt=""/></figure>

                                <svg className="div_right" fill="#ffffff" viewBox="0 0 25 8"><path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path></svg>
                            </div>
                            <div className="text">Quisque eros ligula, tincidunt eget feugiat non, suscipit a odio. Morbi mattis.</div>
                            <div className="name">Maria Doe</div>
                        </div>
                    </div>

                    {/* Testimonial Block */}
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="testimonial_img">
                                <svg className="div_left" fill="#ffffff" viewBox="0 0 25 8"><path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path></svg>

                                {/* Thumb Box */}
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-3.jpg" alt=""/></figure>

                                <svg className="div_right" fill="#ffffff" viewBox="0 0 25 8"><path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path></svg>
                            </div>
                            <div className="text">Quisque eros ligula, tincidunt eget feugiat non, suscipit a odio. Morbi mattis.</div>
                            <div className="name">Anna Doe</div>
                        </div>
                    </div>

                    {/* Testimonial Block */}
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="testimonial_img">
                                <svg className="div_left" fill="#ffffff" viewBox="0 0 25 8"><path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path></svg>

                                {/* Thumb Box */}
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-4.jpg" alt=""/></figure>

                                <svg className="div_right" fill="#ffffff" viewBox="0 0 25 8"><path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path></svg>
                            </div>
                            <div className="text">Quisque eros ligula, tincidunt eget feugiat non, suscipit a odio. Morbi mattis.</div>
                            <div className="name">Diana Doe</div>
                        </div>
                    </div>

                    {/* Testimonial Block */}
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="testimonial_img">
                                <svg className="div_left" fill="#ffffff" viewBox="0 0 25 8"><path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path></svg>

                                {/* Thumb Box */}
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-1.jpg" alt=""/></figure>

                                <svg className="div_right" fill="#ffffff" viewBox="0 0 25 8"><path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path></svg>
                            </div>
                            <div className="text">Quisque eros ligula, tincidunt eget feugiat non, suscipit a odio. Morbi mattis.</div>
                            <div className="name">Thomas Doe</div>
                        </div>
                    </div>

                    {/* Testimonial Block */}
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="testimonial_img">
                                <svg className="div_left" fill="#ffffff" viewBox="0 0 25 8"><path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path></svg>

                                {/* Thumb Box */}
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-2.jpg" alt=""/></figure>

                                <svg className="div_right" fill="#ffffff" viewBox="0 0 25 8"><path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path></svg>
                            </div>
                            <div className="text">Quisque eros ligula, tincidunt eget feugiat non, suscipit a odio. Morbi mattis.</div>
                            <div className="name">Mr Twinkle</div>
                        </div>
                    </div>
                </div>

                <div className="cws_divider margin-top-30 margin-bottom-50"><img src="assets/images/icons/divider_12.png" alt=""/></div>

                {/* Testimonial Carousel */}
                <div className="single-item-carousel owl-carousel owl-theme default-dots no-arrows">

                    {/* Testimonial Block */}
                    <div className="testimonial-block-two style-two">
                        <div className="inner-box">
                            <div className="testimonial_img">
                                <svg className="div_left" fill="#ffffff" viewBox="0 0 25 8"><path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path></svg>

                                {/* Thumb Box */}
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-5.jpg" alt=""/></figure>

                                <svg className="div_right" fill="#ffffff" viewBox="0 0 25 8"><path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path></svg>
                            </div>
                            <div className="text">Quisque eros ligula, tincidunt eget feugiat non, suscipit a odio. Morbi mattis quam non metus pretium, gravida tristique ante <br/> tempor.imperdiet, venenatis eros ac, mattis mauris. Nam ac purus justo.</div>
                            <div className="name">Maria Doe</div>
                        </div>
                    </div>

                    {/* Testimonial Block */}
                    <div className="testimonial-block-two style-two">
                        <div className="inner-box">
                            <div className="testimonial_img">
                                <svg className="div_left" fill="#ffffff" viewBox="0 0 25 8"><path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path></svg>

                                {/* Thumb Box */}
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-3.jpg" alt=""/></figure>

                                <svg className="div_right" fill="#ffffff" viewBox="0 0 25 8"><path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path></svg>
                            </div>
                            <div className="text">Quisque eros ligula, tincidunt eget feugiat non, suscipit a odio. Morbi mattis quam non metus pretium, gravida tristique ante <br/> tempor.imperdiet, venenatis eros ac, mattis mauris. Nam ac purus justo.</div>
                            <div className="name">Anna Doe</div>
                        </div>
                    </div>

                    {/* Testimonial Block */}
                    <div className="testimonial-block-two style-two">
                        <div className="inner-box">
                            <div className="testimonial_img">
                                <svg className="div_left" fill="#ffffff" viewBox="0 0 25 8"><path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path></svg>

                                {/* Thumb Box */}
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-4.jpg" alt=""/></figure>

                                <svg className="div_right" fill="#ffffff" viewBox="0 0 25 8"><path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path></svg>
                            </div>
                            <div className="text">Quisque eros ligula, tincidunt eget feugiat non, suscipit a odio. Morbi mattis quam non metus pretium, gravida tristique ante <br/> tempor.imperdiet, venenatis eros ac, mattis mauris. Nam ac purus justo.</div>
                            <div className="name">Diana Doe</div>
                        </div>
                    </div>

                    {/* Testimonial Block */}
                    <div className="testimonial-block-two style-two">
                        <div className="inner-box">
                            <div className="testimonial_img">
                                <svg className="div_left" fill="#ffffff" viewBox="0 0 25 8"><path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path></svg>

                                {/* Thumb Box */}
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-1.jpg" alt=""/></figure>

                                <svg className="div_right" fill="#ffffff" viewBox="0 0 25 8"><path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path></svg>
                            </div>
                            <div className="text">Quisque eros ligula, tincidunt eget feugiat non, suscipit a odio. Morbi mattis quam non metus pretium, gravida tristique ante <br/> tempor.imperdiet, venenatis eros ac, mattis mauris. Nam ac purus justo.</div>
                            <div className="name">Thomas Doe</div>
                        </div>
                    </div>

                    {/* Testimonial Block */}
                    <div className="testimonial-block-two style-two">
                        <div className="inner-box">
                            <div className="testimonial_img">
                                <svg className="div_left" fill="#ffffff" viewBox="0 0 25 8"><path d="M1.7,5.2C2,5.4,2.1,5.7,1.9,6C1.8,6.2,1.7,6.3,1.5,6.3c-0.4,0.1-1-0.4-0.7,0.4c0.1,0.4,0.6,0.4,0.9,0.5 c1.8,0.2,3.6-1.2,5.1-1.9c-0.9-0.5-2-1.1-2.3-2.1c-0.2-0.8,0-1.8,0.6-2.4C5.7,0,6.8-0.2,7.7,0.3C8,0.6,8.2,1.2,8.1,1.6 C7.9,2.3,7.6,2.5,7,2.5C7,2.1,7.2,1.3,6.8,1C6.5,0.8,6,0.9,5.7,1.2C4.8,1.9,5.2,3.1,6,3.7C6.5,4,6.9,4.2,7.4,4.4 c0.6,0.2,0.9,0,1.5-0.2c1.3-0.6,2.6-1,3.9-1.4c1.4-0.4,2.8-0.5,4.2-0.4c1.1,0.1,2.2,0.5,3.2,1.1c1,0.6,2.1,0.9,3.2,0.9 c0.4,0,1.6,0,1.6,0.4c0,0.4-1.5,0.1-1.7,0.5c0.2,0.1,0.9,0.3,0.7,0.7c-0.2,0.4-0.9,0-1-0.2c-0.4-0.4-1-0.7-1.6-0.6 c-1,0.1-2.1,0.3-3.1,0.4c-1,0.1-1.8,0.1-2.7,0.2C13.7,6.1,11.7,6.2,9.8,6C9.1,5.7,8.2,5.8,7.5,6.1C6.7,6.5,6,7,5.2,7.3 C4,7.9,1.7,8.4,0.5,7.4S0.5,4.3,1.7,5.2z M20.3,4.2c-1.3-1-3-1.4-4.6-1.1c-0.9,0.2-1.9,0.5-2.8,0.7c-0.5,0.1-1,0.3-1.6,0.5 S10.3,4.5,10.4,5L20.3,4.2z"></path></svg>

                                {/* Thumb Box */}
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-2.jpg" alt=""/></figure>

                                <svg className="div_right" fill="#ffffff" viewBox="0 0 25 8"><path d="M23.31,5.22a.59.59,0,0,0,.22,1.1c.36.08,1-.38.75.38-.13.4-.57.43-.93.46-1.77.17-3.6-1.21-5.11-1.95.87-.51,2-1.09,2.33-2.1A2.43,2.43,0,0,0,19.94.73,2,2,0,0,0,17.36.34a1.25,1.25,0,0,0-.43,1.29c.17.67.5.84,1.13.88-.05-.42-.28-1.17.12-1.49a1,1,0,0,1,1.17.15c.91.76.42,1.94-.38,2.54a4.91,4.91,0,0,1-1.37.66c-.64.22-.89,0-1.51-.22a25.55,25.55,0,0,0-3.94-1.39,13.51,13.51,0,0,0-4.2-.44A7.77,7.77,0,0,0,4.77,3.43a6.29,6.29,0,0,1-3.21.87c-.37,0-1.59,0-1.56.43s1.48.08,1.74.54c-.24.07-.89.29-.66.71s.86,0,1-.18a1.85,1.85,0,0,1,1.58-.6c1,.06,2.06.33,3.09.44s1.81.11,2.72.19a21.75,21.75,0,0,0,5.7.13,3.18,3.18,0,0,1,2.39.15c.76.37,1.47.84,2.23,1.2,1.25.6,3.56,1.12,4.74.13S24.51,4.34,23.31,5.22Zm-18.64-1a6.16,6.16,0,0,1,4.58-1.1c.93.19,1.86.45,2.78.69.52.14,1,.28,1.55.46s1.14.21,1.08.75Z"></path></svg>
                            </div>
                            <div className="text">Quisque eros ligula, tincidunt eget feugiat non, suscipit a odio. Morbi mattis quam non metus pretium, gravida tristique ante <br/> tempor.imperdiet, venenatis eros ac, mattis mauris. Nam ac purus justo.</div>
                            <div className="name">Mr Twinkle</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Content Elements */}

      
    
    {/* End Page Wrapper */}

    {/* Scroll To Top */}
    <div className="scroll-to-top scroll-to-target" data-target="html">
        <svg viewBox="0 0 500 500">
        <path d="M488.5,274.5L488.5,274.5l1.8-0.5l-2,0.5c-2.4-8.7-4.5-16.9-4.5-24.5c0-8,2.3-16.5,4.7-25.5
        c3.5-13,7.1-26.5,3.7-39.5c-3.6-13.2-13.5-23.1-23.1-32.7c-6.5-6.5-12.6-12.6-16.6-19.4c-3.9-6.8-6.1-15.2-8.5-24.1
        c-3.5-13.1-7.1-26.7-16.7-36.3c-9.5-9.5-22.9-13.1-35.9-16.6c-9-2.4-17.5-4.6-24.4-8.7c-6.5-3.8-12.5-9.8-18.9-16.2
        c-9.7-9.8-19.6-19.8-33.2-23.4c-13.5-3.7-27.3,0.1-40.4,3.7c-8.7,2.4-16.9,4.6-24.5,4.6c-8,0-16.5-2.3-25.5-4.7
        c-9.3-2.5-18.8-5-28.1-5c-3.8,0-7.6,0.4-11.3,1.4C172,11.1,162,21.1,152.4,30.7c-6.5,6.5-12.6,12.6-19.4,16.6
        c-6.8,3.9-15.2,6.1-24.1,8.5c-13.1,3.5-26.7,7.1-36.3,16.7c-9.5,9.5-13.1,23-16.6,36c-2.4,9-4.6,17.5-8.7,24.4
        c-3.8,6.5-9.8,12.5-16.2,18.9c-9.8,9.7-19.7,19.6-23.4,33.2c-3.7,13.5,0.1,27.3,3.7,40.5c2.4,8.7,4.6,16.9,4.6,24.5
        c0,8-2.3,16.5-4.6,25.5c-3.5,13-7.1,26.6-3.7,39.5c3.6,13.2,13.5,23.1,23.1,32.7c6.5,6.5,12.6,12.6,16.6,19.4
        c3.9,6.8,6.1,15.1,8.5,24c3.5,13.1,7.1,26.8,16.7,36.4c9.5,9.5,23,13.1,35.9,16.6c9,2.4,17.5,4.6,24.4,8.7
        c6.5,3.8,12.5,9.8,18.9,16.2c9.7,9.8,19.6,19.8,33.2,23.5c3.8,1,7.6,1.5,11.8,1.5c9.6,0,19.3-2.7,28.5-5.1c8.8-2.4,17-4.6,24.5-4.6 c8,0,16.5,2.3,25.5,4.6c13,3.6,26.6,7.1,39.5,3.7c13.2-3.6,23.1-13.5,32.7-23.1c6.5-6.5,12.6-12.6,19.4-16.6 c6.7-3.9,15.1-6.1,24-8.5c13.1-3.5,26.8-7.1,36.4-16.8c9.5-9.5,13.1-23,16.6-36c2.4-9,4.6-17.5,8.7-24.4c3.8-6.5,9.8-12.5,16.2-18.9 c9.8-9.7,19.9-19.7,23.6-33.3C495.7,301.4,494.4,287.7,488.5,274.5z"></path>
    </svg>
        <span className="fa fa-angle-up"></span>
    </div>

   

    </div>
  )
}
