import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../context/ShopContext';

export default function ProductDisplay(props) {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    // Initialize state for product details
    const [productDetails, setProductDetails] = useState({
        category: 'small', // Default size
    });

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    // Ensure product data is available
    if (!product) {
        return <div>Product not found!</div>;
    }

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
                    {product.brief_description || 'No description available.'}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <select
                            value={productDetails.category}
                            onChange={changeHandler}
                            name='category'
                            className='add-product-selector'
                        >
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id); }}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category:</span>  {product.product_category || 'No Category information available.'}</p>
                <p className='productdisplay-right-category'><span>Tags :</span>  {product.tags || 'No Tags Available'}</p>
            </div>
        </div>
    );
}
