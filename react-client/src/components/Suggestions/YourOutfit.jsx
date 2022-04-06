import React, { useState } from 'react';
import StyledStarsList from '../Overview/Stars/StarsList.jsx'

function YourOutfit({
  carouselStyle,
  cardStyle,
  currentProductID,
  ulStyle,
  imgStyle,
  ratings,
  favs,
  setFavs,
  currentProductData,
}) {

  return (
    <div id="your-outfit">
      Your Outfit
      <div id="carousel-container" style={carouselStyle}>
        <div style={cardStyle}
          onClick={() => {
            const tempArray = [...favs];
            tempArray.push(currentProductID);
            setFavs(tempArray);
          }}>
          + Add to Your Outfit
        </div>
        {favs.length > 0 ?
        favs.map((e) => (
          <div style={cardStyle}>
            <button>Remove</button>
            <ul style={ulStyle}>
              <li>
                {ratings
                  ? <img style={imgStyle} alt="" src={ratings[e].results[0].photos[0].url} />
                  : 0}
              </li>
              <li>{currentProductData.category}</li>
              <li>{currentProductData.name}</li>
              <li>
                $
                {currentProductData.default_price}
              </li>
              <li>
                {ratings
                  ? <StyledStarsList rating={ratings[e].averageScore} />
                  : 'loading'}
                stars
              </li>
              <li>
                {ratings
                  ? ratings[e].reviewsCount
                  : 'loading'}
                reviews
              </li>
            </ul>
            <br />
          </div>
        )) : null}

      </div>
    </div>
  );
}

export default YourOutfit;
