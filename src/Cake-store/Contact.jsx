import React, { useState } from 'react';

const Contact = () => {
    // Using useState hook in form column
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [contact_message,setContact_Message] = useState("");
    const [allEntry,setAllNewEntry] = useState([]);
    const submitForm=(e)=>{
        e.preventDefault();
        
        const newEntry= { username: username , email : email , message : contact_message };
        setAllNewEntry=([...allEntry,newEntry]);
        console.log(allEntry);

    }

//     const [formData,setFormdata]=useState({
//         username:"",
//         email:"",

//     });
//     const handleInput=(event)=>{
//         const name =event.target.name;
//         const value= event.target.value;
//         setFormdata((prev)=>{
//  return {...prev ,[name]:value}
//         })
//     }

    
    
    
  return (
    <div>

        {/* Page Title */}
        <section className="page-title" style={{backgroundImage:"url("+"assets/images/background/34.jpg"+")"}}>
            <div className="auto-container">
                <h1>Contacts</h1>
                <ul className="page-breadcrumb">
                    <li><a href="index.html">home</a></li>
                    <li>Contacts</li>
                </ul>
            </div>
        </section>
        {/*End Page Title*/}

        {/* Contact Section */}
        <section className="contact-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <div className="divider"><img src="images/icons/divider_1.png" alt="" /></div>
                    <h2>Our Contacts</h2>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi et dolor ornare pellentesque. Nullam porttitor,<br/> odio id facilisis, mauris dolor rhoncus elit, ultricies nulla eros at dui. In suscipit leo sagittis aliquam.</div>
                </div>

                <div className="row clearfix">
                    <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-column">
                            <div className="title">
                                <div className="icon"><img src="images/icons/icon-devider-gray.png" alt=""/></div>
                                <h4>Opening Hours</h4>
                            </div>

                            <ul className="contact-info">
                                <li>Monday - Friday <br/>08:00 – 17:30</li>
                                <li>Saturday <br/>09:00 – 16:00</li>
                                <li>Sunday <br/>CLOSED</li>
                            </ul>
                        </div>
                    </div>

                    <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12 order-3">
                        <div className="inner-column">
                            <div className="title">
                                <div className="icon"><img src="images/icons/icon-devider-gray.png" alt=""/></div>
                                <h4>Our Contacts</h4>
                            </div>

                            <ul className="contact-info">
                                <li>785 Carriage Drive, Jacksonville Beach, FL</li>
                                <li><a href="tel:12032842818">+1 203-284-2818</a><br/><a href="tel:12032842919">+1 203-284-2919</a></li>
                                <li><a href="mailto:info@your-site.com">info@your-site.com</a><br/> <a href="mailto:sales@your-site.com">sales@your-site.com</a></li>
                            </ul>
                        </div>
                    </div> 

                    {/* Form Column */}
                    <div className="column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="title">
                                <div className="icon"><img src="images/icons/icon-devider-gray.png" alt=""/></div>
                                <h4>Send Message</h4>
                            </div>
                            <div className="contact-form">
                                <form action="#" method="post" id="email-form"  onSubmit={submitForm}> 
                                    <div className="form-group">
                                        <div className="response"></div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="username" className="username" placeholder="Your Name *"
                                       value={username}
                                       onChange={(e)=>setUserName(e.target.value)}
                                       />
                                    </div>

                                    <div className="form-group">
                                        <input type="email" name="email" className="email" placeholder="Your Email *" 
                                        value = {email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        />
                                       
                                    </div>

                                    <div className="form-group">
                                        <textarea name="contact_message" placeholder="Text Message"
                                        value = {contact_message}
                                        onChange={(e)=>setContact_Message(e.target.value)}

                                        ></textarea>
                                        
                                        
                                       
                                    </div>

                                    <div className="form-group">
                                        <button className="theme-btn" type="button" id="submit" name="submit-form">Send</button>
                                    </div>
                                </form>
                                 <div>
                                    {/* <p>{`My Name is ${formData.username} and my email is ${formData.email}`}</p> */}
                                </div> 
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Contact Section */}

        {/* Map Section */}
        <section className="map-section">
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </section>
        {/* End Map Section */}
        
      

    
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

export default Contact;
