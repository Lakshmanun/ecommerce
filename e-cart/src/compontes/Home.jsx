import React from 'react'
import Navbar from './Navbar'
import homebackground  from "../assect/homeback.png";
import HomeImage from "../assect/homebanner.png";

import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-banner-container">
      <div className='home-bannerImage-container'>
        <img src={homebackground} alt="" />
      </div> 
      <div className="home-text-section">
        <h1 className="primary-heading">
          Enjoy Tasty Meals,Straight to Your Plate,Always fresh and hot !
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. inventore voluptas quia accusantium beatae!
        </p>
        <button className='secondary-button'>
        Order Now <FaArrowRight/>
        </button>
      </div>
      <div className="home-image-section">
        <img src={HomeImage} alt="" />
      </div>
      <div>
    
      </div>
      </div>
    </div>
  )
}
