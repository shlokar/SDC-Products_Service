import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StyledStarsList from '../Overview/Stars/StarsList.jsx';
import key from './config.js';

// To-do: put the following in a .env or something
const secretKey = key;

function Suggestions({currentProduct}) {
  // Pass in props currentProduct to use. Otherwise, will display random product
  const testIDs = [65665, 65692, 65858, 66077, 66114, 66148, 65778, 65917, 66021, 66326];
  const [currentProductID, setCurrentProductID] = useState(currentProduct
    || testIDs[Math.floor(Math.random() * testIDs.length)]);
  const [relatedProductIDs, setRelatedProductIDs] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [ratings, setRatings] = useState(null);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    // Populate relatedProductsIDs with an array of the IDs of products related to the
    // current products, then
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${currentProductID}/related`, {
      headers: {
        authorization: secretKey,
      },
    })
      .then((res) => {
        const arrayOfRelatedProductIDs = res.data;
        setRelatedProductIDs(arrayOfRelatedProductIDs);
        // Get product information for the product IDs that are related to the current product
        Promise.all(arrayOfRelatedProductIDs.map((e) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${e}`, {
          headers: {
            authorization: secretKey,
          },
        })))
          .then((results) => {
            console.log(results.map((e) => e.data));
            setRelatedProducts(results.map((e) => e.data));
          });
        // Get reviews for each Related Product
        // Run Promise.all to get all of the stars and #ratings info
        // Calculate the average of .results[i].rating for each related product
        Promise.all(arrayOfRelatedProductIDs.map((e) => axios.get('http://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/', {
          headers: {
            authorization: secretKey,
          },
          params: {
            product_id: e,
          },
        }))).then((results) => {
          const ratingsLookup = {};
          const resultsRestructured = results.map((e) => e.data);
          resultsRestructured.forEach((e) => {
            ratingsLookup[e.product] = {
              reviewsCount: e.results.length,
              averageScore: e.results.map((element) => element.rating)
                .reduce((a, b) => a + b) / e.results.length,
              results: e.results,
            };
          });
          console.log(ratingsLookup);
          setRatings(ratingsLookup);
        });
      });
  }, [currentProductID]);

  const cardStyle = {
    display: 'inline-block',
    width: '255px',
    height: '350px',
    border: '1px lightgray solid',
    borderRadius: '7px',
    margin: '5px',
  };

  const carouselStyle = {
    display: 'block',
    whiteSpace: 'nowrap',
    margin: '5px',
    padding: '5px',
  };

  const imgStyle = {
    width: '150px',
  };

  const ulStyle = {
    listStyle: 'none',
  };

  return (
    <div>
      <div id="related-items">
        {/* This is to be its own component later */}
        Related Items
        <div id="carousel-container" style={carouselStyle}>
          {relatedProducts.map((e) => (
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
            </div>))}
        </div>
      </div>
      <div id="your-outfit">
        {/* This is to be its own component later */}
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
      <div id="testing">
        Suggestions.jsx Testing Dashboard:<br></br>
        <button onClick={() => {console.log(relatedProductIDs)}}>relatedProductIDs</button><br></br>
        <button onClick={() => {console.log(relatedProducts)}}>relatedProducts</button><br></br>
        <button onClick={() => {console.log(ratings)}}>ratingsAndReviews</button><br></br>
        Current Product ID: {currentProductID}
      </div>
    </div>
  );
}

export default Suggestions;

module.exports = {
  Suggestions
}
