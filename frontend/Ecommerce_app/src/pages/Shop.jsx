import React, { useState } from 'react';
import Hero from '../components/hero/Hero';
import Popular from '../components/popular/Popular';
import Offers from '../components/offers/Offers';
import NewCollections from '../components/newcollections/NewCollections';
import NewsLetter from '../components/newsletter/NewsLetter';

export default function Shop() {
  const [showNewCollections, setShowNewCollections] = useState(false);

  const handleLatestClick = () => {
    setShowNewCollections(true);
    // Optionally scroll to NewCollections
    document.getElementById('new-collections-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Hero onLatestClick={handleLatestClick} />
      <Popular />
      <Offers />
      {showNewCollections && (
        <div id="new-collections-section">
          <NewCollections />
        </div>
      )}
      <NewCollections />
      <NewsLetter />
    </div>
  );
}
