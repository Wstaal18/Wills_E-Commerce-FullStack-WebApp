import React, { useState } from 'react';
import './Hero.css';
import product_1 from '../assets/product_1.png';
import hero_hand_icon from '../assets/Hand_wave_icon.png';

export default function Hero({ onLatestClick }) {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New Arrivals Only</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>new</p>
            <img
              src={hero_hand_icon}
              alt="Hero_hand"
              className="hero-hand-icon-img"
            />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div onClick={onLatestClick} className='hero-latest-btn'>
          <div>Latest Collection</div>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className='hero-right'>
        <img
          src={product_1}
          alt="Hero"
          className="hero-right-image"
        />
      </div>
    </div>
  );
}
