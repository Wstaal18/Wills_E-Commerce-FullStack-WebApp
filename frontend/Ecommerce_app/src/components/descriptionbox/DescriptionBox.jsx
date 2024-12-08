import React from 'react'
import './DescriptionBox.css'


export default function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates 
                the buying and selling of goods and services over the internet. 
                It allows businesses to showcase their products, manage transactions, 
                and interact with customers through features such as shopping carts, 
                payment gateways, and product catalogs. E-commerce websites can range
                from large marketplaces like Amazon to smaller niche stores, providing 
                consumers with a convenient way to shop from anywhere at any time.
            </p>
            <p>
            E-commerce websites typically showcase a range of features designed 
            to enhance the shopping experience, including product listings with images
             and descriptions, a shopping cart for managing selected items, user-friendly 
             navigation, and multiple secure payment options.
            </p>
        </div>
    </div>
  )
}
