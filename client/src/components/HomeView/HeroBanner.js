import React from 'react';

const HeroBanner = ({ imgUrl }) => {
  return (
    <div data-testid="hero-image" id="hero-image" style={{ backgroundImage: `url(${imgUrl})` }}>
    </div>
  )
}

export default HeroBanner;
