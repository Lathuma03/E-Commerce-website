import React from 'react'
import "../DescriptionBox/DescriptionBox.css"


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'> 
    <div className="descriptonbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
    </div>
    <div className='descriptionbox-description'>
        <p>Good product descriptions should cover two main aspects: features and benefits. These are the bread and butter of your product page copy.  A product’s feature is a quality or a function of a product. For example, “This laptop bag is waterproof.”</p>
    </div>
      
    </div>
  )
}

export default DescriptionBox
