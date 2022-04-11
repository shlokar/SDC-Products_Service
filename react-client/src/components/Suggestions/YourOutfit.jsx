import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

// Assets
import plusSignSrc from '../Overview/AddToCart/plus-sign-icon.svg';
import deleteIcon from './iconmonstr-x-mark-4.svg';

// Components
import StyledStarsList from '../Overview/Stars/StarsList.jsx';
import ArrowBtn from './ArrowBtn.jsx';

const Card = styled.div`
display: inline-block;
position: relative;
top: 0px;
width: 175px;
height: 360px;
margin: 5px;
border: 2px lightgray solid;
vertical-align: text-top;
align-items: center;
text-align: center;
cursor: pointer;
`;

const Button = styled.div`
position: absolute;
top: 5px;
right: 5px;
cursor: pointer;
`;

const Carousel = styled.div`
display: inline-block;
position: relative;
top: 0px;
whiteSpace: nowrap;
margin: 5px;
`;

const UnorderedList = styled.ul`
  list-style: none;
`;

const Image = styled.img`
  width: 175px;
`;

function YourOutfit({
  currentProductData,
  favoriteProductData,
  setFavoriteProductData,
  favPosn,
  setFavPosn,
  getStylesDataFromAPI,
  getReviewsDataFromAPI,
}) {
  const [favoriteReviewsData, setFavoriteReviewsData] = useState([]);
  const [favoriteStylesData, setFavoriteStylesData] = useState([]);

  function getRatingsLookup(favoritesArray) {
    if (favoritesArray.length > 0) {
      Promise.all(favoritesArray.map((e) => getReviewsDataFromAPI(e)))
        .then((results) => {
          setFavoriteReviewsData(results);
        });
    }
  }

  function getFavoriteStylesData(favoritesArray) {
    if (favoritesArray.length > 0) {
      Promise.all(favoritesArray.map((e) => getStylesDataFromAPI(e)))
        .then((results) => {
          setFavoriteStylesData(results);
        });
    }
  }

  useEffect(() => {
    getRatingsLookup(favoriteProductData.map((e) => e.id));
    getFavoriteStylesData(favoriteProductData.map((e) => e.id));
  }, [favoriteProductData]);

  const plusStyle = {
    position: 'absolute',
    top: '45%',
    left: '15%',
    cursor: 'pointer',
  };

  function addToYourOutfit() {
    const tempCopyOfFavs = [...favoriteProductData];
    // if the array doesn't have currentProductData.id in it don't set
    if (tempCopyOfFavs.filter((e) => e.id == currentProductData.id).length > 0) {
      console.log('Duplicate!');
    } else {
      tempCopyOfFavs.push(currentProductData);
    }
    console.log(favoriteStylesData);
    getRatingsLookup(tempCopyOfFavs.map((e) => e.id));
    setFavoriteProductData(tempCopyOfFavs);
    localStorage.setItem('Your Outfit', JSON.stringify(tempCopyOfFavs));
  }

  return (
    <div id="your-outfit">
      <div>
        Your Outfit (
        {favoriteProductData.length}
        {') (viewing '}
        {favPosn + 1}
        {' - '}
        {Math.min(favPosn + 1 + 2, favoriteProductData.length)}
        )
      </div>

      <Carousel>
        <ArrowBtn dir="<" type="fav" favPosn={favPosn} setFavPosn={setFavPosn} favLength={favoriteProductData.length} />
        <Card onClick={addToYourOutfit}>
          <div style={plusStyle}>
            <img src={plusSignSrc} alt="p[us sign" />
            <br />
            {' Add to Your Outfit'}
          </div>
        </Card>
        {favoriteProductData.length > 0
          ? favoriteProductData.slice(0 + favPosn, 3 + favPosn).map((e, i) => (
            <Card>
              <Button onClick={() => {
                const favsCopy = [...favoriteProductData];
                favsCopy.splice(i + favPosn, 1);
                localStorage.setItem('Your Outfit', JSON.stringify(favsCopy));
                setFavoriteProductData(favsCopy);
              }}
              >
                <img src={deleteIcon} alt="delete icon" />
              </Button>
              <UnorderedList>
                <li>
                  {favoriteStylesData ? (favoriteStylesData.filter((element) => element.product_id == e.id).length !== 0 ? <Image src={favoriteStylesData.filter((element) => element.product_id == e.id)[0].results[0].photos[0].thumbnail_url} /> : "loading") : "loading"}
                </li>
                <li>{e.category}</li>
                <li>{e.name}</li>
                <li>
                  $
                  {e.default_price}
                </li>
                <li>
                  {favoriteReviewsData.filter((el) => el.id == e.id)[0]
                    ? <StyledStarsList rating={favoriteReviewsData.filter((el) => el.id == e.id)[0].averageScore} />
                    : 'loading'}
                </li>
                <li>
                  {favoriteReviewsData.filter((el) => el.id == e.id)[0]
                    ? favoriteReviewsData.filter((el) => el.id == e.id)[0].reviewsCount
                    : 'loading'}
                  {' reviews'}
                </li>
              </UnorderedList>
              <br />
            </Card>
          )) : null}
        <ArrowBtn dir=">" type="fav" favPosn={favPosn} setFavPosn={setFavPosn} favLength={favoriteProductData.length} />
      </Carousel>
    </div>
  );
}

YourOutfit.propTypes = {
  currentProductData: propTypes.object.isRequired, // an ProductData object for currentProductID
  favoriteProductData: propTypes.array.isRequired, // an array of ProductData objects for favorited
  setFavoriteProductData: propTypes.func.isRequired,
  favPosn: propTypes.number.isRequired,
  setFavPosn: propTypes.func.isRequired,
  getStylesDataFromAPI: propTypes.func.isRequired,
  getReviewsDataFromAPI: propTypes.func.isRequired,
};

export default YourOutfit;
