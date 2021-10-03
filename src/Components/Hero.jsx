import React from 'react'
import banar from '../assets/images/3081783.jpg'
import "./Hero.css"
const Hero = () => {
    return (
        <div>
            <div >
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div >
                <div class="row">
                  <div class="col-lg-12">
                    <h2 className="head1">BUSINESS GROWTH STARTS HERE</h2>
                    <p className="subH1 pt-3 pb-3">DIGITAL MARKETING AGENCY</p>
                  </div>
                  <div class="col-lg-12">
                    <div class="main-green-button scroll-to-section">
                      <a className=" btn btn-primary" href="#contact">Get Your Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img className="w-100" src={banar}alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Hero
