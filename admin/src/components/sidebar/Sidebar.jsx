import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
            <i className="fa-regular fa-folder-open"></i>
            <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}
