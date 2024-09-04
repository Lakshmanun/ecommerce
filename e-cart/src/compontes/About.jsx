import React from 'react'
import Aboutimage from '../assect/about-background-image.png'
import background from '../assect/about-background.png'
import { BsFillPlayCircleFill } from "react-icons/bs";
export default function About() {
    return (

        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={background} alt="back" />
            </div> 
            <div className='home-image-section'>
                <img src={Aboutimage} alt="" />
            </div>
            <div className='about-section-text-container '>
                <p className='primary-subheading'>About</p>
                <h1 className='primary-heading'>
                    Food is an Important Part of Balanced Diet
                </h1>
                <p className='primary-text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae prov!
                </p>
                <div className='about-buttons-container'>
                    <button className='secondary-button'> Learn More </button>
                    <button className='watch-video-button'> <BsFillPlayCircleFill/>
                    Watch video </button>
                </div>

            </div>
        </div>


    )
}
