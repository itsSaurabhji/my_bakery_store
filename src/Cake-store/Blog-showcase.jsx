import React from 'react'
import { Link } from 'react-router-dom';

const blog_showcase = () => {
    const backgroundImageUrl = 'assets/images/background/34.jpg';
    
  return (
    <div>
       

    
       
        {/*Page Title*/}
        <section className="page-title" style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        // style="background-image:url(images/background/34.jpg)"
        >
            <div className="auto-container">
                <h1>Blog Checkerboard</h1>
                <ul className="page-breadcrumb">
                    <li><limk to="/">home</limk></li>
                    <li>Blog Checkerboard</li>
                </ul>
            </div>
        </section>
        {/*End Page Title*/}

        {/* Blog Showcase */}
        <section className="blog-section blog-showcase">
            <div className="auto-container">
                {/* News Block */}
                <div className="news-block">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-1.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><a href="blog-single.html">Consequat vel donec</a></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><Link to="/"><span className="icon fa fa-heart"></span> 5 likes</Link></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block style-two">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-2.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><a href="blog-single.html">Nulla amet massa</a></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><Link to="/"><span className="icon fa fa-heart"></span> 16 likes</Link></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-3.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><a href="blog-single.html">Vitae aenean nulla</a></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><Link to="/"><span className="icon fa fa-heart"></span> 5 likes</Link></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block style-two">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-4.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><Link to="blog-single.html">Morbi etiam suada</Link></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><a href="#"><span className="icon fa fa-heart"></span> 16 likes</a></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-5.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><a href="blog-single.html">Et imperdiet auctor</a></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><a href="#"><span className="icon fa fa-heart"></span> 5 likes</a></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block style-two">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-6.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><a href="blog-single.html">Turpis harum nunc</a></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><a href="#"><span className="icon fa fa-heart"></span> 16 likes</a></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-7.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><a href="blog-single.html">Porta bibend prae</a></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><a href="#"><span className="icon fa fa-heart"></span> 5 likes</a></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block style-two">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-8.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><a href="blog-single.html">Non et vivamus fusce</a></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><a href="#"><span className="icon fa fa-heart"></span> 16 likes</a></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-9.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><a href="blog-single.html">Vitae ac vitae sed sed</a></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><a href="#"><span className="icon fa fa-heart"></span> 5 likes</a></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block style-two">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-10.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><a href="blog-single.html">Consectetuer risus justo</a></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><a href="#"><span className="icon fa fa-heart"></span> 16 likes</a></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-11.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><a href="blog-single.html">Duis taciti praesent</a></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><a href="#"><span className="icon fa fa-heart"></span> 5 likes</a></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block style-two">
                    <div className="inner-box row">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image"><img src="assets/images/resource/blog-12.jpg" alt=""/></figure>
                                <div className="date">04 <span>Dec</span></div>
                            </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3><a href="blog-single.html">Scelerisque tempor est</a></h3>
                                <ul className="post-info">
                                    <li><span className="icon fa fa-user"></span> by admin</li>
                                    <li><a href="#"><span className="icon fa fa-heart"></span> 16 likes</a></li>
                                </ul>
                                <div className="text">Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.
                                    Dignissim lobortis</div>
                                <div className="devider"><img src="assets/images/icons/icon-devider-gray.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Blog Showcase */}

        

    
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

export default blog_showcase;
