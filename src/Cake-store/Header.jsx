import React from 'react'
import {  Link } from 'react-router-dom';

const Header = () => {
  return (
   <>
   
   {/* <div className="page-wrapper">

       
<div className="preloader">
    <div className="loader_overlay"></div>
    <div className="loader_cogs">
        <div className="loader_cogs__top">
            <div className="top_part"></div>
            <div className="top_part"></div>
            <div className="top_part"></div>
            <div className="top_hole"></div>
        </div>
        <div className="loader_cogs__left">
            <div className="left_part"></div>
            <div className="left_part"></div>
            <div className="left_part"></div>
            <div className="left_hole"></div>
        </div>
        <div className="loader_cogs__bottom">
            <div className="bottom_part"></div>
            <div className="bottom_part"></div>
            <div className="bottom_part"></div>
            <div className="bottom_hole"></div>
        </div>
    </div>
</div>
</div> */}
    
 
 {/* Main Header*/}
 <header className="main-header">
            {/* Menu Wave */}
            <div className="menu_wave"></div>

            {/* Main box */}
            <div className="main-box">
                <div className="menu-box">
                    <div className="logo"><Link to="/"><img src="assets/images/logo.png" alt="" title="" /></Link></div>

                    {/*Nav Box*/}
                    <div className="nav-outer clearfix">
                        {/* Main Menu */}
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                <ul className="navigation menu-left clearfix">
                                    <li className="dropdown"><Link to="/">Home </Link>
                                        <ul>
                                            <li><Link to="/">Cakes</Link></li>
                                            <li><Link to="index-2.html">Lollipop</Link></li>
                                            <li><Link to="index-3.html">Wedding</Link></li>
                                            <li><Link to="index-4.html">Coffee</Link></li>
                                            <li><Link to="index-5.html">Ice-Cream</Link></li>
                                            <li><Link to="index-6.html">Macaron</Link></li>
                                            <li><Link to="index-7.html">Shop</Link></li>
                                            <li><Link to="index-8.html">Landing</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link to="About us">Pages</Link>
                                        <ul>
                                            <li><Link to="About us">About us</Link></li>
                                            <li><Link to="Our staff">Our Staff</Link></li>
                                            <li><Link to="Pricing table">Pricing Tables</Link></li>
                                            <li><Link to="Content element">Content Elements</Link></li>
                                            <li><Link to="Reciepes list">Recipes Grid</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link to="Portfolio single">Portfolio</Link>
                                        <ul>
                                            <li><Link to="portfolio masonry">Masonry</Link></li>
                                            <li><Link to="portfolio masonry-wide">Masonry Wide</Link></li>
                                            <li><Link to="portfolio wide">Wide</Link></li>
                                            <li><Link to="portfolio with filter">With Filter</Link></li>
                                            <li><Link to="portfolio two column">Two Columns</Link></li>
                                            <li><Link to="portfolio with sidebar">With Sidebar</Link></li>
                                            <li><Link to="portfolio square">Square</Link></li>
                                            <li><Link to="portfolio single">single Post</Link></li>
                                        </ul>
                                    </li>
                                </ul>

                                <ul className="navigation menu-right clearfix">
                                    <li className="dropdown current"><Link to="Blog_showcase">Blog</Link>
                                        <ul>
                                            <li className="current"><Link to="Blog showcase">Checkerboard</Link></li>
                                            <li><Link to="blog standard">Standard</Link></li>
                                            <li><Link to="blog masonry">Masonry</Link></li>
                                            <li><Link to="blog masonry full width">Masonry Full Width</Link></li>
                                            <li><Link to="blog-two-column">Two Columns Grid</Link></li>
                                            <li><Link to="blog three column wide">Three Columns Wide</Link></li>
                                            <li className="dropdown"><Link to=" post types">Post Types</Link>
                                                <ul>
                                                    <li><Link to="blog single">Standard Post</Link></li>
                                                    <li><Link to="blog single">Gallery Post</Link></li>
                                                    <li><Link to="blog single">Video Post</Link></li>
                                                    <li><Link to="blog single">Audio Post</Link></li>
                                                    <li><Link to="blog single">Quote Post</Link></li>
                                                    <li><Link to="blog single">Link Post</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link to="Shop">Shop</Link>
                                        <ul>
                                            <li><Link to="Shop">Shop</Link></li>
                                            <li><Link to="Shopingcard">Cart</Link></li>
                                            <li><Link to="Checkout">Checkout</Link></li>
                                            <li><Link to="login">My account</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="contact">Contacts</Link></li>
                                </ul>
                            </div>
                        </nav>
                        {/* Main Menu End*/}

                        <div className="outer-box clearfix">
                            {/* Shoppping Cart */}
                            <div className="cart-btn">
                                <Link to="Shopingcard"><i className="icon flaticon-commerce"></i> <span className="count">2</span></Link>

                                <div className="shopping-cart">
                                    <ul className="shopping-cart-items">
                                        <li className="cart-item">
                                            <img src="assets/images/resource/products/prod-thumb-1.jpg" alt="#" className="thumb" />
                                            <span className="item-name">Birthday Cake</span>
                                            <span className="item-quantity">1 x <span className="item-amount">$84.00</span></span>
                                            <Link to="Shopingcard" className="product-detail"></Link>
                                            <button className="remove-item"><span className="fa fa-times"></span></button>
                                        </li>

                                        <li className="cart-item">
                                            <img src="assets/images/resource/products/prod-thumb-2.jpg" alt="#" className="thumb" />
                                            <span className="item-name">French Macaroon</span>
                                            <span className="item-quantity">1 x <span className="item-amount">$13.00</span></span>
                                            <Link to="shop-single.html" className="product-detail"></Link>
                                            <button className="remove-item"><span className="fa fa-times"></span></button>
                                        </li>
                                    </ul>

                                    <div className="cart-footer">
                                        <div className="shopping-cart-total"><strong>Subtotal:</strong> $97.00</div>
                                        <Link to="*" className="theme-btn">View Cart</Link>
                                        <Link to="checkout" className="theme-btn">Checkout</Link>
                                    </div>
                                </div>
                                {/*end shopping-cart */}
                            </div>

                            {/* Search Btn */}
                            <div className="search-box">
                                <button className="search-btn"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Header  */}
            <div className="sticky-header" >
                <div className="auto-container clearfix">
                    {/*Logo*/}
                    <div className="logo">
                        <Link to="/" title="Sticky Logo"><img src="assets/images/logo-small.png" alt="Sticky Logo" /></Link>
                    </div>

                    {/*Right Col*/}
                    <div className="nav-outer">
                        {/*Mobile Navigation Toggler*/}
                        <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>

                        {/* Main Menu */}
                        <nav className="main-menu">
                            {/*Keep This Empty / Menu will come through Javascript*/}
                        </nav>
                        {/* Main Menu End*/}
                    </div>
                </div>
            </div>
            {/* End Sticky Menu */}

            {/* Mobile Header */}
            <div className="mobile-header">
                <div className="logo"><a href="index.html"><img src="assets/images/logo-small.png" alt="" title="" /></a></div>

                {/*Nav Box*/}
                <div className="nav-outer clearfix">
                    {/*Keep This Empty / Menu will come through Javascript*/}
                </div>
            </div>

            {/* Mobile Menu  */}
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div className="nav-logo"><a href="index.html"><img src="assets/images/logo-small.png" alt="" title="" /></a></div>
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                </nav>
            </div>
            {/* End Mobile Menu */}

            {/* Header Search */}
            <div className="search-popup">
                <span className="search-back-drop"></span>

                <div className="search-inner">
                    <button className="close-search"><span className="fa fa-times"></span></button>
                    <form method="post" action="Blog-showcase">
                        <div className="form-group">
                            <input type="search" name="search-field" value="" placeholder="Search..." required="" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
            {/* End Header Search */}
        </header>
        {/*End Main Header */}

       




 </>
  );
}

export default Header;
