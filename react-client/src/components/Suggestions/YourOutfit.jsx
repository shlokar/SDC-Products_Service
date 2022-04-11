import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

// Assets
import plusSignSrc from '../Overview/AddToCart/plus-sign-icon.svg';
import deleteIcon from './iconmonstr-x-mark-4.svg';

// Components
import StyledStarsList from '../Overview/Stars/StarsList.jsx'
import ArrowBtn from './ArrowBtn.jsx';

// Secret GitHub Key
import secretKey from './config.js';

function YourOutfit({
  carouselStyle,
  cardStyle,
  ulStyle,
  imgStyle,
  favs,
  setFavs,
  currentProductData,
  btnStyle,
  favPosn,
  setFavPosn,
  getStylesDataFromAPI,
}) {
  const [favsRatings, setFavsRatings] = useState([]);
  const [favsStyles, setFavsStyles] = useState([]);

  function getRatingsLookup(favorites) {
    if (favorites.length > 0) {
      Promise.all(favorites.map((e) => axios.get('http://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/', {
        headers: {
          authorization: secretKey,
        },
        params: {
          product_id: e.id,
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
        setFavsRatings(ratingsLookup);
      });
    }
  }

  function getFavsStyles(favorites) {
    if (favorites.length > 0) {
      Promise.all(favorites.map((e) => getStylesDataFromAPI(e)))
        .then((results) => {
          setFavsStyles(results);
        });
    }
  }

  useEffect(() => {
    getRatingsLookup(favs);
    getFavsStyles(favs.map((e) => e.id));
  }, [favs]);

  const plusStyle = {
    position: 'absolute',
    top: '45%',
    left: '15%',
    cursor: 'pointer',
  };

  return (
    <div id="your-outfit">
      <div>Your Outfit ({favs.length}) (viewing {favPosn + 1} through {Math.min(favPosn + 1 + 2, favs.length)})</div>

      <div id="carousel-container" style={carouselStyle}>
        <ArrowBtn dir="<" type="fav" favPosn={favPosn} setFavPosn={setFavPosn} favLength={favs.length}/>
        <div style={cardStyle}
          onClick={() => {
            const tempArray = [...favs];
            // if the array doesn't have currentProductData.id in it don't set
            if (tempArray.filter((e) => e.id == currentProductData.id).length > 0) {
              console.log('duplicate found!');
            } else {
              tempArray.push(currentProductData);
            }
            getRatingsLookup(tempArray);
            setFavs(tempArray);
            localStorage.setItem('Your Outfit', JSON.stringify(tempArray));
          }}>
          <div style={plusStyle}>
            <img src={plusSignSrc} /><br /> Add to Your Outfit
          </div>
        </div>
        {favs.length > 0 ?
        favs.slice(0 + favPosn, 3 + favPosn).map((e, i) => (
          <div style={cardStyle}>
            <div style={btnStyle} onClick={()=>{const favsCopy = [...favs]; favsCopy.splice(i + favPosn,1); localStorage.setItem('Your Outfit', JSON.stringify(favsCopy));setFavs(favsCopy);}}>
              <img src={deleteIcon} />
            </div>
            <ul style={ulStyle}>
              <li>
                {favsStyles ? (favsStyles.filter((element) => element.product_id == e.id).length !== 0 ? <img style={imgStyle} src={favsStyles.filter((element) => element.product_id == e.id)[0].results[0].photos[0].thumbnail_url}></img> : "loading") : "loading"}
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
              </li>
              <li>
                {favsRatings[e.id]
                  ? favsRatings[e.id].reviewsCount
                  : 'loading'} reviews
              </li>
            </ul>
            <br />
          </div>
        )) : null}
        <ArrowBtn dir=">" type="fav" favPosn={favPosn} setFavPosn={setFavPosn} favLength={favs.length} />
      </div>
    </div>
  );
}

YourOutfit.propTypes = {
  carouselStyle: propTypes.object.isRequired,
  cardStyle: propTypes.object.isRequired,
  ulStyle: propTypes.object.isRequired,
  imgStyle: propTypes.object.isRequired,
  favs: propTypes.array.isRequired,
  setFavs: propTypes.func.isRequired,
  currentProductData: propTypes.object.isRequired,
  btnStyle: propTypes.object.isRequired,
  favPosn: propTypes.number.isRequired,
  setFavPosn: propTypes.func.isRequired,
  getStylesDataFromAPI: propTypes.func.isRequired,
};

export default YourOutfit;
