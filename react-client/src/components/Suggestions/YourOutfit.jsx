import React, { useState } from 'react';

function YourOutfit({
  carouselStyle,
  cardStyle,
  favorites,
}) {
  const [favs, setFavs] = useState(favorites);
  return (
    <div id="your-outfit">
      Your Outfit
      <div id="carousel-container" style={carouselStyle}>
        <div style={cardStyle}
          onClick={() => {
            const tempArray = [...favs];
            tempArray.push("blank");
            setFavs(tempArray);
          }}>
          + Add to Your Outfit
        </div>
        {favs.map((e) => <div style={cardStyle}>
          <button>Remove</button><br />Empty Card</div>)}

      </div>
    </div>
  );
}

export default YourOutfit;
