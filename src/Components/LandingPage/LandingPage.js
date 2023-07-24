import './LandingPage.css'
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage=()=>{
   useEffect(()=>{
        AOS.init({duration:2000});
   },[]);
    return(
      <>
       <div className="landing">
           
           <h1 data-aos="fade-left">CyFuse</h1>
            </div>
            <div className="aboutsec">
                <div className="content" data-aos="fade-up">
                        <h2>
                            About
                        </h2>
                        <p>
                        Our motive is to ignite a profound passion for the cutting-edge technology encompassing Mechatronics and Transhumanism. We are driven by the desire to stay at the forefront of these fields and diligently share our knowledge, thus empowering individuals to explore and embrace the exciting advancements taking place within them.
                        </p>
                </div>
                   
            </div>
      </>
       
    );
}
export default LandingPage