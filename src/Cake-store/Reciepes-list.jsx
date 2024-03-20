import React from 'react'

const reciepes_list = () => {
    const backgroundImageUrl = 'assets/images/background/34.jpg';
    
  return (
    <div>
        

    
      
        {/*Page Title*/}
        <section className="page-title" style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        // style="background-image:url(images/background/34.jpg)"
        >
            <div className="auto-container">
                <h1>Recipes List</h1>
                <ul className="page-breadcrumb">
                    <li><a href="index.html">home</a></li>
                    <li>Recipes List</li>
                </ul>
            </div>
        </section>
        {/*End Page Title*/}

        {/* Recipes Section Two */}
        <section className="recipes-section-two">
            <div className="auto-container">

                <div className="cooked-recipe-search clearfix">
                    <div className="browse-recipe">
                        <div className="dropdown">
                            <button className="browse-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Browse</button>
                            <div className="dropdown-menu browse-dropdown" aria-labelledby="dropdownMenuButton">
                                <span className="cooked-title">Categories</span>
                                <a href="#">Cakes</a>
                                <a href="#">Cupcakes</a>
                                <a href="#">Ice-cream</a>
                                <a href="#">Lollipops</a>
                                <a href="#">Macarons</a>
                            </div>
                        </div>
                    </div>

                    {/* Search Recipe Form */}
                    <div className="search-recipe-form">
                        <form method="post" action="recipes-list.html">
                            <div className="form-group cooked-sortby-wrap">
                                <select className="sortby-select select2-offscreen" name="cooked_browse_sort_by" tabindex="-1" title="">
                                <option value="date_desc" selected="">Newest first</option>
                                <option value="date_asc">Oldest first</option>
                                <option value="title_asc">Alphabetical (A-Z)</option>
                                <option value="title_desc">Alphabetical (Z-A)</option>
                            </select>
                            </div>

                            <div className="form-group">
                                <input className="cooked-browse-search" type="text" name="cooked_search_s" placeholder="Find a recipe..." />
                            </div>

                            <div className="form-group search-recipe-submit">
                                <button className="theme-btn" type="submit" name="submit-form"><span className="fa fa-search"></span></button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                            <figure className="image"><a href="recipe-single.html"><img src="assets/images/resource/recipe_1.jpg" alt="" /></a></figure >
                            <div className="caption-box">
                                <h3 className="recipe-title"><a href="recipe-single.html">Red Velvet Cake</a></h3>
                                <span className="devider"></span>
                                <div className="author">By <strong>admin</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                            <figure className="image"><a href="recipe-single.html"><img src="assets/images/resource/recipe_2.jpg" alt="" /></a></figure >
                            <div className="caption-box">
                                <h3 className="recipe-title"><a href="recipe-single.html">Avocado Ice Cream</a></h3>
                                <span className="devider"></span>
                                <div className="author">By <strong>admin</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                            <figure className="image"><a href="recipe-single.html"><img src="assets/images/resource/recipe_3.jpg" alt=""/></a></figure>
                            <div className="caption-box">
                                <h3 className="recipe-title"><a href="recipe-single.html">Vanilla Ice Cream</a></h3>
                                <span className="devider"></span>
                                <div className="author">By <strong>admin</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                            <figure className="image"><a href="recipe-single.html"><img src="assets/images/resource/recipe_4.jpg" alt=""/></a></figure>
                            <div className="caption-box">
                                <h3 className="recipe-title"><a href="recipe-single.html">Chocolate Macarons</a></h3>
                                <span className="devider"></span>
                                <div className="author">By <strong>admin</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                            <figure className="image"><a href="recipe-single.html"><img src="assets/images/resource/recipe_5.jpg" alt=""/></a></figure>
                            <div className="caption-box">
                                <h3 className="recipe-title"><a href="recipe-single.html">Homemade Ice Cream</a></h3>
                                <span className="devider"></span>
                                <div className="author">By <strong>admin</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                            <figure className="image"><a href="recipe-single.html"><img src="assets/images/resource/recipe_6.jpg" alt=""/></a></figure>
                            <div className="caption-box">
                                <h3 className="recipe-title"><a href="recipe-single.html">Endless Flavor Capcakes</a></h3>
                                <span className="devider"></span>
                                <div className="author">By <strong>admin</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                            <figure className="image"><a href="recipe-single.html"><img src="assets/images/resource/recipe_7.jpg" alt=""/></a></figure>
                            <div className="caption-box">
                                <h3 className="recipe-title"><a href="recipe-single.html">Colored Lollipops</a></h3>
                                <span className="devider"></span>
                                <div className="author">By <strong>admin</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                            <figure className="image"><a href="recipe-single.html"><img src="assets/images/resource/recipe_8.jpg" alt=""/></a></figure>
                            <div className="caption-box">
                                <h3 className="recipe-title"><a href="recipe-single.html">Basic French Macarons</a></h3>
                                <span className="devider"></span>
                                <div className="author">By <strong>admin</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                            <figure className="image"><a href="recipe-single.html"><img src="assets/images/resource/recipe_9.jpg" alt=""/></a></figure>
                            <div className="caption-box">
                                <h3 className="recipe-title"><a href="recipe-single.html">Cake with Caramel Icing</a></h3>
                                <span className="devider"></span>
                                <div className="author">By <strong>admin</strong></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Styled Pagination */}
                <div className="styled-pagination text-center">
                    <ul>
                        <li><a href="#"><span className="current">1</span></a></li>
                        <li><a href="#">2</a></li>
                        <li><a className="next" href="#"><i className="fa fa-chevron-right"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
        {/* End Recipes Section Two */}

       

    
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

export default reciepes_list;
