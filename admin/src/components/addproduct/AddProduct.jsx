import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

export default function AddProduct() {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: '',
    image: '',
    category: 'women',
    tags: '',
    product_category: '',
    new_price: '',
    old_price: '',
    brief_description: '', // Added field for brief description
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp) =>
        resp.json().then((data) => {
          data.success ? alert('Product Added') : alert('Failed');
        })
      );
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter Product Name"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Enter Old Price"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Enter New Price"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product User Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="womens">Womens</option>
          <option value="mens">Mens</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      <hr/>
      <div className="addproduct-itemfield">
        <p>Brief Description</p>
        <textarea
          value={productDetails.brief_description}
          onChange={changeHandler}
          name="brief_description"
          placeholder="Enter Brief Description"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Full Product Description</p>
        <textarea
          value={productDetails.full_description}
          onChange={changeHandler}
          name="full_description"
          placeholder="Enter Full Description"
        />
      </div>
      <hr/>
      <div className="addproduct-itemfield">
        <p>Tags</p>
        <textarea
          value={productDetails.tags}
          onChange={changeHandler}
          name="tags"
          placeholder="Enter Tags (e.g., Modern, Stylish)"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Category</p>
        <textarea
          value={productDetails.product_category}
          onChange={changeHandler}
          name="product_category"
          placeholder="Enter Category (e.g., Women, T-shirt, Crop Top)"
        />
      </div>
      <hr/>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="addproduct-thumbnail-img"
          />
          <p>Upload</p>
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
      </div>
      


      <button onClick={Add_Product} className="addproduct-btn">
        ADD
      </button>
    </div>
  );
}
