import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/item/Item'
export default function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className="">
        <img src={props.banner} alt="" className="shopcategory-banner banner-img" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
 
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
