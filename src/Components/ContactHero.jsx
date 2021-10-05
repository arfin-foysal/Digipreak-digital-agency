import React from 'react'
import conimg from '../assets/images/20943953.jpg'
const ContactHero = () => {
    return (
       <div>
            <div className="container py-5 ">
            <div className="row">
                <div className="col-6">
                    <h2>CONTACT US</h2>
                </div>
                <div className="col-6">
                    <img className="w-100" src={conimg} alt="" />
                </div>
            </div>
        </div>
       </div>
    )
}

export default ContactHero
