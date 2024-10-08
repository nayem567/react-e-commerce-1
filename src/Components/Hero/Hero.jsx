import React from 'react'
import './Hero.css';
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
import Popular from '../Popular/Popular';

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-left">
            <h2>Welcome to Shopper</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New Collections</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-button">
                <div>
                    Latest Collection
                    <img className='arrow_icon' src={arrow_icon} alt="" />
                </div>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </section>
)
}

export default Hero