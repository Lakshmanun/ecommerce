import React from 'react'
import { AiFillStar} from "react-icons/ai";
import ProfilePic from '../assect/john-doe-image.png'
export default function Testimonial() {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className="primary-text">
            Discover what our satisfied customers are saying about their dining experiences with us. From rave reviews to glowing testimonials, find out why they keep coming back for more.
        </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=''></img>
            <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}
