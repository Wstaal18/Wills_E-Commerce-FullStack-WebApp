import React, { useState } from 'react';
import './DescriptionBox.css';

export default function DescriptionBox(props) {
  const { product } = props;
  const [activeTab, setActiveTab] = useState('description'); // Default to 'description'

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div 
          className={`descriptionbox-nav-box ${activeTab === 'description' ? '' : 'fade'}`} 
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div 
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? '' : 'fade'}`} 
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (122)
        </div>
      </div>
      {activeTab === 'description' && (
        <div className="descriptionbox-description">
          <p>{product.full_description || 'No description available.'}</p>
        </div>
      )}
      {activeTab === 'reviews' && (
        <div className="descriptionbox-reviews descriptionbox-description">
          <p>{product.reviews || 'No reviews available.'}</p>
        </div>
      )}
    </div>
  );
}
