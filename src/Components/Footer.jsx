import React from 'react'
import { BsFacebook,BsInstagram,BsLinkedin} from "react-icons/bs";
import { Link } from 'react-router-dom';
import FooterCopy from './FooterCopy';
const Footer = () => {
    return (
       <div className="bg-dark text-white">
            <div className="container py-5 ">
          <div className="row ">
                <div className="col-4 ">
                    <h4 className="py-3">Contact</h4>
                    
                </div>
                <div className="col-4 py-3 ">
                    <h4 className="py-3">Service</h4>
                     <p>Graphics Design</p>
                     <p>Website Development</p>
                     <p>Search Engine Optimization</p>
                     <p>Social Media Managemat & Merketing</p>
                     <p>Email Merketing</p>
                </div>
                <div className="col-4 py-3 ">
                    <h4 className="py-3">Follow Us</h4>
                    
                     <Link to="https://Facebook.com"> <BsFacebook className="fs-2"/></Link>
                     <Link to="https://Instagram"> <BsInstagram className="fs-2 mx-3"/></Link>
                     <Link to="https://Linkedin"> <BsLinkedin className="fs-2"/></Link>
                </div>
          </div>
          
        </div>
        <FooterCopy/>
       </div>
    )
}

export default Footer
