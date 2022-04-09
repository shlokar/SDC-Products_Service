import React, { useState, useEffect } from 'react';
import StyledStarsList from '../Overview/Stars/StarsList.jsx'
import Key from './config.js';
import axios from 'axios';
import ArrowBtn from './ArrowBtn.jsx';

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
  btnStyle,
  favPosn,
  setFavPosn,
}) {
  const [favsRatings, setFavsRatings] = useState([]);

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

  useEffect(() => {
    getRatingsLookup(favs);
  }, [favs]);

  const plusStyle = {
    position: 'absolute',
    top: '50%',
    left: '10%',
  };

  return (
    <div id="your-outfit">
      <div>Your Outfit ({favs.length}) (viewing {favPosn + 1} through {favPosn + 1 + 2})</div>

      <div id="carousel-container" style={carouselStyle}>
        <ArrowBtn dir="<" type="fav" favPosn={favPosn} setFavPosn={setFavPosn} favLength={favs.length}/>
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
            getRatingsLookup(tempArray);
            setFavs(tempArray);
            localStorage.setItem('Your Outfit', JSON.stringify(tempArray));
          }}>
          <div style={plusStyle}> + Add to Your Outfit</div>
        </div>
        {favs.length > 0 ?
        favs.slice(0 + favPosn, 3 + favPosn).map((e, i) => (
          <div style={cardStyle}>
            <div style={btnStyle} onClick={()=>{const favsCopy = [...favs]; favsCopy.splice(i + favPosn,1); setFavs(favsCopy);}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"/>
              </svg>
            </div>
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

export default YourOutfit;
