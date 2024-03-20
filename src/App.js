import React from "react";
import Blog_showcase from "./Cake-store/Blog-showcase.jsx";
import Portfolio_single from "./Cake-store/Portfolio-single.jsx";
import Reciepes_list from "./Cake-store/Reciepes-list.jsx";
import Shop from "./Cake-store/Shop.jsx";
import Shopingcard from "./Cake-store/Shopingcard.jsx";
import Contact from "./Cake-store/Contact.jsx";
import About_Us from "./Cake-store/About-us.jsx";
import Portfolio_with_side from "./Cake-store/Portfolio-with-sidebar.jsx";
import Pricing_table from "./Cake-store/Pricing-table.jsx";
 import Checkout from "./Cake-store/Checkout.jsx";
import Home from "./Cake-store/Home.jsx";
import Content_element from "./Cake-store/Content-element.jsx";
import Header from "./Cake-store/Header.jsx";
import Footer from "./Cake-store/Footer.jsx";
import Our_Staff from "./Cake-store/Our-staff.jsx";

import { Routes,Route } from "react-router-dom";

const app = () => {
  return (
    <div>

<Header />
      <Routes>
<Route path="/" element={<Home />}/>
<Route path="Blog showcase" element={<Blog_showcase />}/>
<Route path="Our Staff" element={<Our_Staff />}/>
<Route path="Content element" element={<Content_element />}/>
<Route path="Portfolio single" element={<Portfolio_single />}/>
<Route path="Portfolio with sidebar" element={<Portfolio_with_side />}/>
<Route path="Pricing table" element={<Pricing_table />}/>
 <Route path="Checkout" element={<Checkout />}/> 
<Route path="Reciepes list" element={<Reciepes_list />}/>
<Route path="Shop" element={<Shop />}/>
<Route path="Shopingcard" element={<Shopingcard />}/>
<Route path="About us" element={<About_Us />}/>
<Route path="Contact" element={<Contact />}/>
<Route path="*" element={<div><h1>error:404</h1></div>}/>

      </Routes>
      
      <Footer />
      
     
    </div>
  );
};

export default app;