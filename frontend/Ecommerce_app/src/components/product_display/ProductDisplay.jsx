import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../context/ShopContext';

export default function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" className="productdisplay-image" />
                <img src={product.image} alt="" className="productdisplay-image" />
                <img src={product.image} alt="" className="productdisplay-image" />
                <img src={product.image} alt="" className="productdisplay-image" />
            </div>
            <div className="productdisplay-img">
                 <img src={product.image} alt="" className="productdisplay-image productdisplay-main-img" />
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <i className="fa-solid fa-star star-color"></i>
                <i className="fa-solid fa-star star-color"></i>
                <i className="fa-solid fa-star star-color"></i>
                <i className="fa-solid fa-star star-color"></i>
                <i className="fa-regular fa-star"></i>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">£{product.old_price}</div>
                <div className="productdisplay-right-price-new">£{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight, durable and acoustic premium guitar pick with custom names for branding potential.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'> <span>Category:</span>Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'> <span>Tags :</span>Modern, Latest</p>
            </div>
    </div>
  )
}
