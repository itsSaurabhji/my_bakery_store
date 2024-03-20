import React  from 'react';

export default function Checkout() {
    const backgroundImageUrl = 'assets/images/background/34.jpg';
   
  return (
    <div>
      



{/*Page Title*/}

 <section className="page-title"    style={{ backgroundImage: `url(${backgroundImageUrl})` }} >
    <div className="auto-container">
        <h1>Checkout</h1>
        <ul className="page-breadcrumb">
            <li><a href="index.html">home</a></li>
            <li>Checkout</li>
        </ul>
    </div>
</section>
{/*End Page Title*/}

{/*CheckOut Page*/}
<section className="checkout-page">
    <div className="auto-container">
        {/*Default Links*/}
        <div className="default-links">
            <div className="message-box with-icon info">
                <div className="icon-box"><span className="icon fa fa-info"></span></div> Have a coupon? <a href="#">Click here to enter your code</a></div>
        </div>

        {/*Checkout Details*/}
        <div className="checkout-form">
            <form method="post" action="checkout.html">
                <div className="row clearfix">
                    {/*Column*/}
                    <div className="column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <h3>Billing details</h3>
                            </div>

                            {/*Form Group*/}
                            <div className="form-group">
                                <div className="field-label">First name <sup>*</sup></div>
                                <input type="text" name="field_name" value="" placeholder=""
                              
                               />
                            </div>

                            {/*Form Group*/}
                            <div className="form-group">
                                <div className="field-label">Last name <sup>*</sup></div>
                                <input type="text" name="fieldname" value="" placeholder=""/>
                            </div>

                            {/*Form Group*/}
                            <div className="form-group">
                                <div className="field-label">Company name (optional)</div>
                                <input type="text" name="field-name" value="" placeholder=""/>
                            </div>

                            {/*Form Group*/}
                            <div className="form-group">
                                <div className="field-label">Country <sup>*</sup></div>
                                <select name="billing_country" className="select2 sortby-select" autocomplete="country">
                                <option value="">Select a country&hellip;</option>
                                <option value="AX" >&#197;land Islands</option>
                                <option value="AF" >Afghanistan</option>
                                <option value="AL" >Albania</option>
                                <option value="DZ" >Algeria</option>
                                <option value="AS" >American Samoa</option>
                                <option value="AD" >Andorra</option>
                                <option value="AO" >Angola</option>
                                <option value="AI" >Anguilla</option>
                                <option value="AQ" >Antarctica</option>
                                <option value="AG" >Antigua and Barbuda</option>
                                <option value="AR" >Argentina</option>
                                <option value="AM" >Armenia</option>
                                <option value="AW" >Aruba</option>
                                <option value="AU" >Australia</option>
                                <option value="AT" >Austria</option>
                                <option value="AZ" >Azerbaijan</option>
                                <option value="BS" >Bahamas</option>
                                <option value="BH" >Bahrain</option>
                                <option value="BD" >Bangladesh</option>
                                <option value="BB" >Barbados</option>
                                <option value="BY" >Belarus</option>
                                <option value="PW" >Belau</option>
                                <option value="BE" >Belgium</option>
                                <option value="BZ" >Belize</option>
                                <option value="BJ" >Benin</option>
                                <option value="BM" >Bermuda</option>
                                <option value="BT" >Bhutan</option>
                                <option value="BO" >Bolivia</option>
                                <option value="BQ" >Bonaire, Saint Eustatius and Saba</option>
                                <option value="BA" >Bosnia and Herzegovina</option>
                                <option value="BW" >Botswana</option>
                                <option value="BV" >Bouvet Island</option>
                                <option value="BR" >Brazil</option>
                                <option value="IO" >British Indian Ocean Territory</option>
                                <option value="VG" >British Virgin Islands</option>
                                <option value="BN" >Brunei</option>
                                <option value="BG" >Bulgaria</option>
                                <option value="BF" >Burkina Faso</option>
                                <option value="BI" >Burundi</option>
                                <option value="KH" >Cambodia</option>
                                <option value="CM" >Cameroon</option>
                                <option value="CA" >Canada</option>
                                <option value="CV" >Cape Verde</option>
                                <option value="KY" >Cayman Islands</option>
                                <option value="CF" >Central African Republic</option>
                                <option value="TD" >Chad</option>
                                <option value="CL" >Chile</option>
                                <option value="CN" >China</option>
                                <option value="CX" >Christmas Island</option>
                                <option value="CC" >Cocos (Keeling) Islands</option>
                                <option value="CO" >Colombia</option>
                                <option value="KM" >Comoros</option>
                                <option value="CG" >Congo (Brazzaville)</option>
                                <option value="CD" >Congo (Kinshasa)</option>
                                <option value="CK" >Cook Islands</option>
                                <option value="CR" >Costa Rica</option>
                                <option value="HR" >Croatia</option>
                                <option value="CU" >Cuba</option>
                                <option value="CW" >Cura&ccedil;ao</option>
                                <option value="CY" >Cyprus</option>
                                <option value="CZ" >Czech Republic</option>
                                <option value="DK" >Denmark</option>
                                <option value="DJ" >Djibouti</option>
                                <option value="DM" >Dominica</option>
                                <option value="DO" >Dominican Republic</option>
                                <option value="EC" >Ecuador</option>
                                <option value="EG" >Egypt</option>
                                <option value="SV" >El Salvador</option>
                                <option value="GQ" >Equatorial Guinea</option>
                                <option value="ER" >Eritrea</option>
                                <option value="EE" >Estonia</option>
                                <option value="ET" >Ethiopia</option>
                                <option value="FK" >Falkland Islands</option>
                                <option value="FO" >Faroe Islands</option>
                                <option value="FJ" >Fiji</option>
                                <option value="FI" >Finland</option>
                                <option value="FR" >France</option>
                                <option value="GF" >French Guiana</option>
                                <option value="PF" >French Polynesia</option>
                                <option value="TF" >French Southern Territories</option>
                                <option value="GA" >Gabon</option>
                                <option value="GM" >Gambia</option>
                                <option value="GE" >Georgia</option>
                                <option value="DE" >Germany</option>
                                <option value="GH" >Ghana</option>
                                <option value="GI" >Gibraltar</option>
                                <option value="GR" >Greece</option>
                                <option value="GL" >Greenland</option>
                                <option value="GD" >Grenada</option>
                                <option value="GP" >Guadeloupe</option>
                                <option value="GU" >Guam</option>
                                <option value="GT" >Guatemala</option>
                                <option value="GG" >Guernsey</option>
                                <option value="GN" >Guinea</option>
                                <option value="GW" >Guinea-Bissau</option>
                                <option value="GY" >Guyana</option>
                                <option value="HT" >Haiti</option>
                                <option value="HM" >Heard Island and McDonald Islands</option>
                                <option value="HN" >Honduras</option>
                                <option value="HK" >Hong Kong</option>
                                <option value="HU" >Hungary</option>
                                <option value="IS" >Iceland</option>
                                <option value="IN" >India</option>
                                <option value="ID" >Indonesia</option>
                                <option value="IR" >Iran</option>
                                <option value="IQ" >Iraq</option>
                                <option value="IE" >Ireland</option>
                                <option value="IM" >Isle of Man</option>
                                <option value="IL" >Israel</option>
                                <option value="IT" >Italy</option>
                                <option value="CI" >Ivory Coast</option>
                                <option value="JM" >Jamaica</option>
                                <option value="JP" >Japan</option>
                                <option value="JE" >Jersey</option>
                                <option value="JO" >Jordan</option>
                                <option value="KZ" >Kazakhstan</option>
                                <option value="KE" >Kenya</option>
                                <option value="KI" >Kiribati</option>
                                <option value="KW" >Kuwait</option>
                                <option value="KG" >Kyrgyzstan</option>
                                <option value="LA" >Laos</option>
                                <option value="LV" >Latvia</option>
                                <option value="LB" >Lebanon</option>
                                <option value="LS" >Lesotho</option>
                                <option value="LR" >Liberia</option>
                                <option value="LY" >Libya</option>
                                <option value="LI" >Liechtenstein</option>
                                <option value="LT" >Lithuania</option>
                                <option value="LU" >Luxembourg</option>
                                <option value="MO" >Macao S.A.R., China</option>
                                <option value="MK" >Macedonia</option>
                                <option value="MG" >Madagascar</option>
                                <option value="MW" >Malawi</option>
                                <option value="MY" >Malaysia</option>
                                <option value="MV" >Maldives</option>
                                <option value="ML" >Mali</option>
                                <option value="MT" >Malta</option>
                                <option value="MH" >Marshall Islands</option>
                                <option value="MQ" >Martinique</option>
                                <option value="MR" >Mauritania</option>
                                <option value="MU" >Mauritius</option>
                                <option value="YT" >Mayotte</option>
                                <option value="MX" >Mexico</option>
                                <option value="FM" >Micronesia</option>
                                <option value="MD" >Moldova</option>
                                <option value="MC" >Monaco</option>
                                <option value="MN" >Mongolia</option>
                                <option value="ME" >Montenegro</option>
                                <option value="MS" >Montserrat</option>
                                <option value="MA" >Morocco</option>
                                <option value="MZ" >Mozambique</option>
                                <option value="MM" >Myanmar</option>
                                <option value="NA" >Namibia</option>
                                <option value="NR" >Nauru</option>
                                <option value="NP" >Nepal</option>
                                <option value="NL" >Netherlands</option>
                                <option value="NC" >New Caledonia</option>
                                <option value="NZ" >New Zealand</option>
                                <option value="NI" >Nicaragua</option>
                                <option value="NE" >Niger</option>
                                <option value="NG" >Nigeria</option>
                                <option value="NU" >Niue</option>
                                <option value="NF" >Norfolk Island</option>
                                <option value="KP" >North Korea</option>
                                <option value="MP" >Northern Mariana Islands</option>
                                <option value="NO" >Norway</option>
                                <option value="OM" >Oman</option>
                                <option value="PK"  selected='selected'>Pakistan</option>
                                <option value="PS" >Palestinian Territory</option>
                                <option value="PA" >Panama</option>
                                <option value="PG" >Papua New Guinea</option>
                                <option value="PY" >Paraguay</option>
                                <option value="PE" >Peru</option>
                                <option value="PH" >Philippines</option>
                                <option value="PN" >Pitcairn</option>
                                <option value="PL" >Poland</option>
                                <option value="PT" >Portugal</option>
                                <option value="PR" >Puerto Rico</option>
                                <option value="QA" >Qatar</option>
                                <option value="RE" >Reunion</option>
                                <option value="RO" >Romania</option>
                                <option value="RU" >Russia</option>
                                <option value="RW" >Rwanda</option>
                                <option value="ST" >S&atilde;o Tom&eacute; and Pr&iacute;ncipe</option>
                                <option value="BL" >Saint Barth&eacute;lemy</option>
                                <option value="SH" >Saint Helena</option>
                                <option value="KN" >Saint Kitts and Nevis</option>
                                <option value="LC" >Saint Lucia</option>
                                <option value="SX" >Saint Martin (Dutch part)</option>
                                <option value="MF" >Saint Martin (French part)</option>
                                <option value="PM" >Saint Pierre and Miquelon</option>
                                <option value="VC" >Saint Vincent and the Grenadines</option>
                                <option value="WS" >Samoa</option>
                                <option value="SM" >San Marino</option>
                                <option value="SA" >Saudi Arabia</option>
                                <option value="SN" >Senegal</option>
                                <option value="RS" >Serbia</option>
                                <option value="SC" >Seychelles</option>
                                <option value="SL" >Sierra Leone</option>
                                <option value="SG" >Singapore</option>
                                <option value="SK" >Slovakia</option>
                                <option value="SI" >Slovenia</option>
                                <option value="SB" >Solomon Islands</option>
                                <option value="SO" >Somalia</option>
                                <option value="ZA" >South Africa</option>
                                <option value="GS" >South Georgia/Sandwich Islands</option>
                                <option value="KR" >South Korea</option>
                                <option value="SS" >South Sudan</option>
                                <option value="ES" >Spain</option>
                                <option value="LK" >Sri Lanka</option>
                                <option value="SD" >Sudan</option>
                                <option value="SR" >Suriname</option>
                                <option value="SJ" >Svalbard and Jan Mayen</option>
                                <option value="SZ" >Swaziland</option>
                                <option value="SE" >Sweden</option>
                                <option value="CH" >Switzerland</option>
                                <option value="SY" >Syria</option>
                                <option value="TW" >Taiwan</option>
                                <option value="TJ" >Tajikistan</option>
                                <option value="TZ" >Tanzania</option>
                                <option value="TH" >Thailand</option>
                                <option value="TL" >Timor-Leste</option>
                                <option value="TG" >Togo</option>
                                <option value="TK" >Tokelau</option>
                                <option value="TO" >Tonga</option>
                                <option value="TT" >Trinidad and Tobago</option>
                                <option value="TN" >Tunisia</option>
                                <option value="TR" >Turkey</option>
                                <option value="TM" >Turkmenistan</option>
                                <option value="TC" >Turks and Caicos Islands</option>
                                <option value="TV" >Tuvalu</option>
                                <option value="UG" >Uganda</option>
                                <option value="UA" >Ukraine</option>
                                <option value="AE" >United Arab Emirates</option>
                                <option value="GB" >United Kingdom (UK)</option>
                                <option value="US" >United States (US)</option>
                                <option value="UM" >United States (US) Minor Outlying Islands</option>
                                <option value="VI" >United States (US) Virgin Islands</option>
                                <option value="UY" >Uruguay</option>
                                <option value="UZ" >Uzbekistan</option>
                                <option value="VU" >Vanuatu</option>
                                <option value="VA" >Vatican</option>
                                <option value="VE" >Venezuela</option>
                                <option value="VN" >Vietnam</option>
                                <option value="WF" >Wallis and Futuna</option>
                                <option value="EH" >Western Sahara</option>
                                <option value="YE" >Yemen</option>
                                <option value="ZM" >Zambia</option><option value="ZW" >Zimbabwe</option>
                            </select>
                            </div>

                            {/*Form Group*/}
                            <div className="form-group">
                                <div className="field-label">Street address <sup>*</sup></div>
                                <input type="text" name="field-name" value="" placeholder="House number and street name"/>
                            </div>

                            <div className="form-group">
                                <input type="text" name="field-name" value="" placeholder="Apartment,suite,unit etc. (optional)"/>
                            </div>

                            {/*Form Group*/}
                            <div className="form-group">
                                <div className="field-label">Town / City <sup>*</sup></div>
                                <input type="text" name="field-name" value="" placeholder="" required=""/>
                            </div>

                            {/*Form Group*/}
                            <div className="form-group">
                                <div className="field-label">State / County <sup>*</sup></div>
                                <input type="text" name="field-name" value="" placeholder="" required=""/>
                            </div>

                            {/*Form Group*/}
                            <div className="form-group">
                                <div className="field-label">Postcode/ ZIP <sup>*</sup></div>
                                <input type="text" name="field-name" value="" placeholder="" required=""/>
                            </div>

                            {/*Form Group*/}
                            <div className="form-group">
                                <div className="field-label">Phone</div>
                                <input type="text" name="field-name" value="" placeholder=""/>
                            </div>

                            {/*Form Group*/}
                            <div className="form-group">
                                <div className="field-label">Email Address</div>
                                <input type="text" name="field-name" value="" placeholder=""/>
                            </div>
                        </div>
                    </div>

                    {/*Column*/}
                    <div className="column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <h3>Additional information</h3>
                            </div>

                            {/*Form Group*/}
                            <div className="form-group ">
                                <div className="field-label">Order notes (optional)</div>
                                <textarea className="" placeholder="Notes about your order,e.g. special notes for delivery."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        {/*End Checkout Details*/}

        {/*Order Box*/}
        <div className="order-box">
            <table>
                <thead>
                    <tr>
                        <th className="product-name">Product</th>
                        <th className="product-total">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="cart-item">
                        <td className="product-name">Birthday Cake&nbsp;
                            <strong className="product-quantity">× 1</strong>
                        </td>
                        <td className="product-total">
                            <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>84.00</span>
                        </td>
                    </tr>

                    <tr className="cart-item">
                        <td className="product-name">Candy Lollipop&nbsp;
                            <strong className="product-quantity">× 1</strong>
                        </td>
                        <td className="product-total">
                            <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>84.00</span>
                        </td>
                    </tr>

                    <tr className="cart-item">
                        <td className="product-name">classNameic Macaroon&nbsp;
                            <strong className="product-quantity">× 1</strong>
                        </td>
                        <td className="product-total">
                            <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>84.00</span>
                        </td>
                    </tr>

                    <tr className="cart-item">
                        <td className="product-name">Coffee Cake&nbsp;
                            <strong className="product-quantity">× 1</strong>
                        </td>
                        <td className="product-total">
                            <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>84.00</span>
                        </td>
                    </tr>

                    <tr className="cart-item">
                        <td className="product-name">French Macaroon&nbsp;
                            <strong className="product-quantity">× 1</strong>
                        </td>
                        <td className="product-total">
                            <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>84.00</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td><span className="amount">$186.00</span></td>
                    </tr>
                    <tr className="order-total">
                        <th>Total</th>
                        <td><strong className="amount">$186.00</strong> </td>
                    </tr>
                </tfoot>
            </table>
        </div>
        {/*End Order Box*/}

        {/*Payment Box*/}
        <div className="payment-box">
            <div className="upper-box">
                {/*Payment Options*/}
                <div className="payment-options">
                    <ul>
                        <li>
                            <div className="radio-option">
                                <input type="radio" name="payment-group" id="payment-2" checked/>
                                <label for="payment-2"><strong>Direct Bank Transfer</strong><span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</span></label>
                            </div>
                        </li>
                        <li>
                            <div className="radio-option">
                                <input type="radio" name="payment-group" id="payment-1"/>
                                <label for="payment-1"><strong>Check Payments</strong><span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</span></label>
                            </div>
                        </li>

                        <li>
                            <div className="radio-option">
                                <input type="radio" name="payment-group" id="payment-3"/>
                                <label for="payment-3"><strong>Cash on Delivery</strong><span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</span></label>
                            </div>
                        </li>
                    </ul>
                    <div className="text">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#">privacy policy.</a></div>
                </div>
            </div>
            <div className="lower-box">
                <a href="#" className="theme-btn"><span className="btn-title">Place Order</span></a>
            </div>
        </div>
        {/*End Payment Box*/}
    </div>
</section>
{/*End CheckOut Page*/}



{/** End Page Wrapper **/}

{/** {/** Scroll To Top **/} 
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