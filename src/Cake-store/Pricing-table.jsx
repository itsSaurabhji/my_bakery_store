import React from 'react'

export default function Pricing_table() {
    const backgroundImageUrl = 'assets/images/background/34.jpg'
  return (
    <div>



       


{/*Page Title*/}
<section className="page-title" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
    <div className="auto-container">
        <h1>Pricing Tables</h1>
        <ul className="page-breadcrumb">
            <li><a href="index.html">home</a></li>
            <li>Pricing Tables</li>
        </ul>
    </div>
</section>
{/*End Page Title*/}

{/** Pricing Section **/}
<section className="pricing-section alternate">
    <div className="auto-container">
        <div className="sec-title text-center">
            <div className="divider"><img src="assets/images/icons/divider_1.png" alt=""/></div>
            <h2>Flexible Prices</h2>
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi et dolor ornare pellentesque. Nullam porttitor,<br/> odio id facilisis dapibus, mauris dolor rhoncus elit, ultricies nulla eros at dui.</div>
        </div>

        <div className="row">
            {/** Pricing Table **/}
            <div className="pricing-table col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><img src="assets/images/resource/pr-table1.png" alt=""/></figure>
                    </div>
                    <div className="pricing-svg">
                        <svg viewBox="0 0 1000 690">
                        <path className="st0" d="M1503-747c-669.3,0-1338.7,0-2008,0c0.3,425,0.7,850,1,1275c0,7.7,0,15.3,0,23c168.3,0.1,336.7,0.3,505,0.4 c18.1-10.6,32.9-15.9,58.4-10.8c80.7,16.2,160.7,100.3,240.4,93.8c93-7.5,184.6-116.6,284.6-96c88.9,18.3,101.9,175.6,227.2,147.5 c79.9-17.9,68.2-118.2,149.1-138.7c12.8-3.3,20.2-4.2,38.4-3.4c167.7,0.7,335.3,1.5,503,2.2c0.3-6,0.7-12,1-18 C1503,103,1503-322,1503-747z"></path>
                    </svg>
                    </div>
                    <div className="title-box">
                        <h3>Occasion Cakes</h3>
                    </div>
                    <div className="price-box">
                        <div className="price"> 15<sup>$</sup></div>
                        <span className="title">FOR 1 CAKE</span>
                    </div>
                    <div className="table-content">
                        <ul>
                            <li><span>1 x Sweet Aniseed</span></li>
                            <li><span>1 x Soft Fruits </span></li>
                            <li><span>1 x Assorted </span></li>
                            <li><span>1 x Flavour Mix  </span></li>
                        </ul>
                    </div>
                    <div className="table-footer">
                        <a href="#" className="theme-btn btn-style-two regular"><span></span>Order Now<span></span></a>
                    </div>
                </div>
            </div>

            {/** Pricing Table **/}
            <div className="pricing-table col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><img src="assets/images/resource/pr-table2.png" alt=""/></figure>
                    </div>
                    <div className="pricing-svg">
                        <svg viewBox="0 0 1000 690">
                        <path className="st0" d="M1503-747c-669.3,0-1338.7,0-2008,0c0.3,425,0.7,850,1,1275c0,7.7,0,15.3,0,23c168.3,0.1,336.7,0.3,505,0.4 c18.1-10.6,32.9-15.9,58.4-10.8c80.7,16.2,160.7,100.3,240.4,93.8c93-7.5,184.6-116.6,284.6-96c88.9,18.3,101.9,175.6,227.2,147.5 c79.9-17.9,68.2-118.2,149.1-138.7c12.8-3.3,20.2-4.2,38.4-3.4c167.7,0.7,335.3,1.5,503,2.2c0.3-6,0.7-12,1-18 C1503,103,1503-322,1503-747z"></path>
                    </svg>
                    </div>
                    <div className="title-box">
                        <h3>Cupcakes</h3>
                    </div>
                    <div className="price-box">
                        <div className="price"> 35<sup>$</sup></div>
                        <span className="title">FOR 1 CAKE</span>
                    </div>
                    <div className="table-content">
                        <ul>
                            <li><span>2 x Sweet Aniseed</span></li>
                            <li><span>2 x Soft Fruits </span></li>
                            <li><span>2 x Assorted </span></li>
                            <li><span>2 x Flavour Mix  </span></li>
                        </ul>
                    </div>
                    <div className="table-footer">
                        <a href="#" className="theme-btn btn-style-two regular"><span></span>Order Now<span></span></a>
                    </div>
                </div>
            </div>

            {/** Pricing Table **/}
            <div className="pricing-table tagged col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    {/** Pricing Highlight **/}
                    <div className="pricing-highlight">
                        <svg viewBox="0 0 67.3 67.3">
                        <path className="st0" d="M40.7,2.8c0.4,0,0.7,0,1.1,0.1c1.3,0.4,2.4,1.5,3.6,2.6c0.9,1,1.9,1.8,3,2.5c1.2,0.6,2.5,1.1,3.8,1.4 c1.6,0.4,3.1,0.8,4,1.7s1.3,2.4,1.7,4c0.3,1.3,0.7,2.5,1.3,3.7c0.7,1.1,1.6,2.1,2.6,3c1.2,1.2,2.3,2.2,2.6,3.5 c0.3,1.3-0.1,2.7-0.5,4.3c-0.4,1.3-0.6,2.6-0.7,3.9c0.1,1.2,0.3,2.5,0.6,3.7v0.1v0.1l0,0l0.5,1.9h0.1c0.2,0.9,0.1,1.7-0.1,2.6 c-0.3,1.3-1.4,2.4-2.6,3.6l0,0c-1,0.9-1.8,1.9-2.5,3c-0.6,1.2-1.1,2.5-1.4,3.8c-0.4,1.6-0.8,3.1-1.7,4s-2.5,1.2-4.1,1.7 c-1.3,0.3-2.5,0.7-3.7,1.3c-1.1,0.7-2.1,1.6-3,2.6c-1.2,1.2-2.2,2.3-3.5,2.6c-0.3,0.1-0.7,0.1-1,0.1c-1.1-0.1-2.2-0.3-3.3-0.6 c-1.3-0.4-2.6-0.6-3.9-0.7c-1.3,0.1-2.6,0.3-3.8,0.7c-1.1,0.3-2.2,0.6-3.3,0.6c-0.4,0-0.7,0-1.1-0.1c-1.3-0.4-2.4-1.5-3.6-2.6 c-0.9-1-1.9-1.8-3-2.5c-1.2-0.6-2.5-1.1-3.8-1.4c-1.6-0.4-3-0.8-4-1.7c-0.9-0.9-1.3-2.4-1.8-4c-0.3-1.3-0.7-2.5-1.3-3.7 c-0.7-1.1-1.6-2.1-2.6-3c-1.2-1.2-2.3-2.2-2.6-3.5s0.1-2.7,0.5-4.3c0.4-1.3,0.6-2.6,0.7-4c-0.1-1.3-0.3-2.6-0.7-3.8 c-0.4-1.6-0.8-3.1-0.5-4.4c0.4-1.3,1.5-2.4,2.6-3.6c1-0.9,1.8-1.9,2.5-3c0.6-1.2,1.1-2.5,1.4-3.8c0.4-1.6,0.8-3.1,1.7-4 s2.4-1.2,4-1.7c1.3-0.3,2.5-0.7,3.7-1.3c1.1-0.7,2.1-1.6,3-2.6c1.2-1.2,2.3-2.3,3.5-2.6c0.3-0.1,0.7-0.1,1-0.1 c1.1,0.1,2.2,0.3,3.3,0.6c1.3,0.4,2.6,0.6,4,0.7c1.3-0.1,2.6-0.3,3.8-0.7C38.5,3,39.6,2.8,40.7,2.8L40.7,2.8"></path>
                    </svg>
                        <h5>Best</h5>
                    </div>

                    <div className="image-box">
                        <figure className="image"><img src="assets/images/resource/pr-table3.png" alt=""/></figure>
                    </div>
                    <div className="pricing-svg">
                        <svg viewBox="0 0 1000 690">
                        <path className="st0" d="M1503-747c-669.3,0-1338.7,0-2008,0c0.3,425,0.7,850,1,1275c0,7.7,0,15.3,0,23c168.3,0.1,336.7,0.3,505,0.4 c18.1-10.6,32.9-15.9,58.4-10.8c80.7,16.2,160.7,100.3,240.4,93.8c93-7.5,184.6-116.6,284.6-96c88.9,18.3,101.9,175.6,227.2,147.5 c79.9-17.9,68.2-118.2,149.1-138.7c12.8-3.3,20.2-4.2,38.4-3.4c167.7,0.7,335.3,1.5,503,2.2c0.3-6,0.7-12,1-18 C1503,103,1503-322,1503-747z"></path>
                    </svg>
                    </div>
                    <div className="title-box">
                        <h3>Macarons</h3>
                    </div>
                    <div className="price-box">
                        <div className="price"> 55<sup>$</sup></div>
                        <span className="title">FOR 1 CAKE</span>
                    </div>
                    <div className="table-content">
                        <ul>
                            <li><span>5 x Sweet Aniseed</span></li>
                            <li><span>5 x Soft Fruits </span></li>
                            <li><span>5 x Assorted </span></li>
                            <li><span>5 x Flavour Mix  </span></li>
                        </ul>
                    </div>
                    <div className="table-footer">
                        <a href="#" className="theme-btn btn-style-two regular"><span></span>Order Now<span></span></a>
                    </div>
                </div>
            </div>

            {/** Pricing Table **/}
            <div className="pricing-table col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><img src="assets/images/resource/pr-table4.png" alt=""/></figure>
                    </div>
                    <div className="pricing-svg">
                        <svg viewBox="0 0 1000 690">
                        <path className="st0" d="M1503-747c-669.3,0-1338.7,0-2008,0c0.3,425,0.7,850,1,1275c0,7.7,0,15.3,0,23c168.3,0.1,336.7,0.3,505,0.4 c18.1-10.6,32.9-15.9,58.4-10.8c80.7,16.2,160.7,100.3,240.4,93.8c93-7.5,184.6-116.6,284.6-96c88.9,18.3,101.9,175.6,227.2,147.5 c79.9-17.9,68.2-118.2,149.1-138.7c12.8-3.3,20.2-4.2,38.4-3.4c167.7,0.7,335.3,1.5,503,2.2c0.3-6,0.7-12,1-18 C1503,103,1503-322,1503-747z"></path>
                    </svg>
                    </div>
                    <div className="title-box">
                        <h3>Small Cakes</h3>
                    </div>
                    <div className="price-box">
                        <div className="price"> 95<sup>$</sup></div>
                        <span className="title">FOR 1 CAKE</span>
                    </div>
                    <div className="table-content">
                        <ul>
                            <li><span>10 x Sweet Aniseed</span></li>
                            <li><span>10 x Soft Fruits </span></li>
                            <li><span>10 x Assorted </span></li>
                            <li><span>10 x Flavour Mix  </span></li>
                        </ul>
                    </div>
                    <div className="table-footer">
                        <a href="#" className="theme-btn btn-style-two regular"><span></span>Order Now<span></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/**End Pricing Section **/}



{/** End Page Wrapper **/}

 {/** Scroll To Top **/}
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