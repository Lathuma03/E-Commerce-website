import React from 'react'
import '../Offers/Offers.css'
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'

const Offers = () => {
  return(
    <div className="offers-container">
      <h1>Exclusive Offers For You</h1>
      <div className='offers-txt'>
      <p>Only on Best Sellers Products</p>
      </div>
      <button>CHECK</button>
      <img src={exclusive_image} alt=""/>
    </div>
  )
}

export default Offers
