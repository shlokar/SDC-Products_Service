import React from 'react';
import StyledStarsList from '../Overview/Stars/StarsList.jsx';

function RelatedItems({
  carouselStyle,
  relatedProducts,
  cardStyle,
  ulStyle,
  ratings,
  imgStyle,
  currentProductData,
}) {
  return (
    <div id="related-items">
      {/* This is to be its own component later */}
      Related Items
      <div id="carousel-container" style={carouselStyle}>
        {relatedProducts.filter(e => e.name !== currentProductData.name).map((e) =>
          <div style={cardStyle}>
            <button>Compare</button>
            <ul style={ulStyle}>
              <li>{ratings ? <img style={imgStyle} src={ratings[e.id.toString()].results[0].photos[0].url}></img> : 0}</li>
              <li>{e.category}</li>
              <li>{e.name}</li>
              <li>${e.default_price}</li>
              <li>{ratings ? <StyledStarsList rating={ratings[e.id.toString()].averageScore} /> : "loading"} stars</li>
              <li>{ratings ? ratings[e.id.toString()].reviewsCount : "loading"} reviews</li>
            </ul>
            <br></br>
          </div>)}
      </div>
    </div>
  );
}

export default RelatedItems;
