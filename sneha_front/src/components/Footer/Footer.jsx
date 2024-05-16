import react, { useState } from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

export function Footer(){
    const[hover,setHover]=useState(false);
    function hovering(){
    setHover(true);
}

    return (<div className='footer' id='footer'>
        <div className='content'>
          <div className="left">
            <img src={assets.logo} width={140} />
            <p>Copyright</p>
            <div className='icons'>
                {/*doubt */}
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} onMouseOver={hovering}  />
                <img src={assets.twitter_icon} alt="" />
            </div>
          </div>
         
          <div className="middle">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delievery</li>
                <li>Privacy Policy</li>
            </ul>
          </div>
            <div className="right">
                <h2>Get in touch</h2>
                <ul>
                    <a href="#contact-us">Contact Us</a>
                    <div id='contact-us'>
                        <br />
                    <li>393390220</li>
                    <li>contact@swigatto.com</li></div>
                </ul>
            </div>

        </div>
        <hr />
        <p className="copyright">
            Copyright 2024-All rights reserved
        </p>
    </div>)
}


