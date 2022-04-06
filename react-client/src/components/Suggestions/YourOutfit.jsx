import React, { useState, useEffect } from 'react';
import StyledStarsList from '../Overview/Stars/StarsList.jsx'
import Key from './config.js';
import axios from 'axios';

const secretKey = Key;

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
  const [favsRatings, setFavsRatings] = useState([]);

  function getRatingsLookup() {
    if (favs.length > 0) {
      Promise.all(favs.map((e) => axios.get('http://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/', {
        headers: {
          authorization: secretKey,
        },
        params: {
          product_id: e.id,
        },
      }))).then((results) => {
        const ratingsLookup = {};
        const resultsRestructured = results.map((e) => e.data);
        console.log(resultsRestructured);
        resultsRestructured.forEach((e) => {
          ratingsLookup[e.product] = {
            reviewsCount: e.results.length,
            averageScore: e.results.map((element) => element.rating)
              .reduce((a, b) => a + b) / e.results.length,
            results: e.results,
          };
        });
        // console.log(ratingsLookup);
        setFavsRatings(ratingsLookup);
      });
    }
  }

  // useEffect(() => {
  //   getRatingsLookup();
  // });

  return (
    <div id="your-outfit">
      Your Outfit
      <div id="carousel-container" style={carouselStyle}>
        <div style={cardStyle}
          onClick={() => {
            const tempArray = [...favs];
            // if the array doesn't have currentProductData.id in it don't set
            if (tempArray.filter((e) => e.id == currentProductData.id).length > 0) {
              console.log('duplicate found!');
            } else {
              console.log(tempArray);
              console.log(currentProductData);
              tempArray.push(currentProductData);
            }
            setFavs(tempArray);
            localStorage.setItem('Your Outfit', JSON.stringify(tempArray));
            getRatingsLookup();
          }}>
          + Add to Your Outfit
        </div>
        {favs.length > 0 ?
        favs.map((e) => (
          <div style={cardStyle}>
            <button>Remove</button>
            <ul style={ulStyle}>
              <li>
                {favsRatings[e.id]
                  ? <img style={imgStyle} alt="" src={favsRatings[e.id].results[0].photos[0].url} />
                  : 0}
              </li>
              <li>{e.category}</li>
              <li>{e.name}</li>
              <li>
                $
                {e.default_price}
              </li>
              <li>
                {favsRatings[e.id]
                  ? <StyledStarsList rating={favsRatings[e.id].averageScore} />
                  : 'loading'}
                stars
              </li>
              <li>
                {favsRatings[e.id]
                  ? favsRatings[e.id].reviewsCount
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
