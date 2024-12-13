import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext';
export default function Navbar() {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');

    }
    
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src={logo} 
          alt="Staal Digital Logo"
          className="nav-logo-image" // Updated class
        />
        <p>SHOPPER</p>
      </div>
      <i onClick={dropdown_toggle} className="fa-solid fa-caret-down nav-dropdown"></i>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'><button className='login_text_col'>Login</button></Link>
      <Link to='/cart'><i className="fa-solid fa-cart-shopping "></i></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
