import React, {useState, useEffect } from 'react'
//Using  react hooks to handle state and lifecycle methods and creat a effect.
const Shopingcard = () => {
    const[num, setNum]=useState(0);
    useEffect(()=>{
           alert=('I am clicked')
           console.log('You are in the Effect', num)
    },[num])
    const backgroundImageUrl = 'assets/images/background/34.jpg';
    
  return (
    <div>
        

    

      

       {/*Page Title*/}
        <section className="page-title" style={{ backgroundImage: `url(${backgroundImageUrl})` }} 
        // style="background-image:url(images/background/34.jpg)"
        >
            <div className="auto-container">
                <h1>Cart</h1>
                <ul className="page-breadcrumb">
                    <li><a href="index.html">home</a></li>
                    <li>Cart</li>
                </ul>
            </div>
        </section>
       {/*End Page Title*/}

       {/*Cart Section*/}
        <section className="cart-section">
            <div className="auto-container">
               {/*Cart Outer*/}
                <div className="cart-outer">
                    <div className="table-outer">
                        <table className="cart-table">
                            <thead className="cart-header">
                                <tr>
                                    <th className="product-thumbnail">&nbsp;</th>
                                    <th className="product-name">Product</th>
                                    <th className="product-price">Price</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-subtotal">Total</th>
                                    <th className="product-remove">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="cart-item">
                                    <td className="product-thumbnail"><a href="shop-single.html"><img src="assets/images/resource/products/prod-thumb-1.jpg" alt=""/></a></td>
                                    <td className="product-name"><a href="shop-single.html">Birthday Cake</a></td>
                                    <td className="product-price">$84.00</td>
                                    <td className="product-quantity">
                                        <div className="quantity"><label>Quantity</label><input type="number" className="qty" name="qty" value="1"/> </div>
                                    </td>
                                    <td className="product-subtotal"><span className="amount">$84.00</span></td>
                                    <td className="product-remove"> <a href="#" className="remove"><span className="fa fa-times"></span></a></td>
                                </tr>

                                <tr className="cart-item">
                                    <td className="product-thumbnail"><a href="shop-single.html"><img src="assets/images/resource/products/prod-thumb-2.jpg" alt=""/></a></td>
                                    <td className="product-name"><a href="shop-single.html">Candy Lollipop</a></td>
                                    <td className="product-price">$15.00</td>
                                    <td className="product-quantity">
                                        <div className="quantity"><label>Quantity</label><input type="number" className="qty" name="qty" value="1"/> </div>
                                    </td>
                                    <td className="product-subtotal"><span className="amount">$15.00</span></td>
                                    <td className="product-remove"> <a href="#" className="remove"><span className="fa fa-times"></span></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="cart-options clearfix">
                        <div className="pull-left">
                            <div className="apply-coupon clearfix">
                                <div className="form-group clearfix">
                                    <input type="text" name="coupon-code" value="" placeholder="Coupon Code" />
                                </div>
                                <div className="form-group clearfix">
                                    <button type="button" onClick={()=>{setNum=(num+1)}} className="theme-btn coupon-btn" >Apply Coupon {num}</button>
                                </div>
                            </div>
                        </div>

                        <div className="pull-right">
                            <button type="button" className="theme-btn cart-btn">update cart</button>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between">
                    <div className="column col-lg-4 offset-lg-8 col-md-6 col-sm-12">
                       {/*Totals Table*/}
                        <ul className="totals-table">
                            <li>
                                <h3>Cart Totals</h3>
                            </li>
                            <li className="clearfix"><span className="col">Subtotal</span><span className="col price">$186.00</span></li>
                            <li className="clearfix"><span className="col">Total</span><span className="col total-price">$186.00</span></li>
                            <li className="text-right"><button type="submit" className="theme-btn proceed-btn">Proceed to Checkout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
       {/*End Cart Section*/}

      

    
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

export default Shopingcard;