import React from 'react';

const EmbedMap = () => {
  const imgUrl = "./img/bat-bun-map.jpg";
  const handleClick = () => {
    window.open('https://www.google.com/maps/place/Bat+%2B+Bun/@-33.8833139,151.2161591,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12ae1a50bca6e7:0xfc822401c5e9ca09!8m2!3d-33.8833261!4d151.2184224', '_blank', 'noopener,noreferrer');
  };

  return (
    <div data-testid="embed-map" id="embed-map" style={{ backgroundImage: `url(${imgUrl})` }} onClick={handleClick} >
    </div>
  )
}

export default EmbedMap;
