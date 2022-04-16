import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

// Assets
import plusSignSrc from '../Overview/AddToCart/plus-sign-icon.svg';
import deleteIcon from './iconmonstr-x-mark-4.svg';

// Components
import StyledStarsList from '../Overview/Stars/StarsList';
import ArrowBtn from './ArrowBtn';

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
  text-align: left;
  cursor: pointer;
  background-color: var(--clr-soft-peach);
  overflow: hidden;
  box-shadow: 2px 2px 2px gray;
`;

const AddCard = styled(Card)`
  text-align:center;
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
  height: 250px;
  min-width: 175px;
`;

const CarouselTitle = styled.div`
text-transform: uppercase;
font-size: 1.2rem;
margin-top: 40px;
margin-bottom: 10px;
margin-left: 50px;
`;

const CategoryListItem = styled.li`
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-left: 13px;
  margin-top: 5px;
  margin-bottom: 1px;
`;

const ProductNameListItem = styled.li`
  font-size: 1.1rem;
  text-transform: capitalize;
  font-family: var(--fnt-dark);
  margin-left: 13px;
  margin-top: 2px;
  margin-bottom: 1px;
`;

const PriceListItem = styled.li`
  font-size: 0.8rem;
  margin-left: 13px;
  margin-top: 2px;
  margin-bottom: 1px;
`;

const StarsListItem = styled.li`
  margin-left: 13px;
  margin-top: 2px;
  margin-bottom: 1px;
`;

const ReviewCountListItem = styled.li`
  font-size: 0.85rem;
  margin-left: 13px;
  margin-top: 2px;
  margin-bottom: 1px;
  text-decoration: underline;
`;

function YourOutfit({
  currentProductData,
  favoriteProductData,
  setFavoriteProductData,
  favPosn,
  setFavPosn,
  getStylesDataFromAPI,
  getReviewsDataFromAPI,
  setCurrentProductID,
}) {
  const [favoriteReviewsData, setFavoriteReviewsData] = useState([]);
  const [favoriteStylesData, setFavoriteStylesData] = useState([]);

  function fetchFavoriteReviewsData(favoritesArray) {
    if (favoritesArray.length > 0) {
      axios.all(favoritesArray.map((e) => getReviewsDataFromAPI(e)))
        .then((results) => {
          setFavoriteReviewsData(results);
        });
    }
  }

  function fetchFavoriteStylesData(favoritesArray) {
    if (favoritesArray.length > 0) {
      axios.all(favoritesArray.map((e) => getStylesDataFromAPI(e)))
        .then((results) => {
          setFavoriteStylesData(results);
        });
    }
  }

  useEffect(() => {
    fetchFavoriteReviewsData(favoriteProductData.map((e) => e.id));
    fetchFavoriteStylesData(favoriteProductData.map((e) => e.id));
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
      // console.log('Duplicate!');
    } else {
      tempCopyOfFavs.push(currentProductData);
    }
    setFavoriteProductData(tempCopyOfFavs);
    localStorage.setItem('Your Outfit', JSON.stringify(tempCopyOfFavs));
  }

  return (
    <div id="your-outfit">
      <CarouselTitle>
        Your Outfit (
        {favoriteProductData.length}
        {') (viewing '}
        {favPosn + 1}
        {' - '}
        {Math.min(favPosn + 1 + 2, favoriteProductData.length)}
        )
      </CarouselTitle>

      <Carousel>
        <ArrowBtn dir="<" type="fav" favPosn={favPosn} setFavPosn={setFavPosn} favLength={favoriteProductData.length} />
        <AddCard onClick={addToYourOutfit}>
          <div style={plusStyle}>
            <img src={plusSignSrc} alt="p[us sign" />
            <br />
            {' Add to Your Outfit'}
          </div>
        </AddCard>
        {favoriteProductData.length > 0
          ? favoriteProductData.slice(0 + favPosn, 3 + favPosn).map((e, i) => (
            <Card
              key={`${e.id}-your-outfit-card`}
              onClick={() => {
                setCurrentProductID(e.id);
              }}
            >
              <Button key={`${e.id}-your-outfit-delete-btn`} onClick={(event) => {
                event.stopPropagation();
                const favsCopy = [...favoriteProductData];
                favsCopy.splice(i + favPosn, 1);
                localStorage.setItem('Your Outfit', JSON.stringify(favsCopy));
                setFavoriteProductData(favsCopy);
              }}
              >
                <img key={`${e.id}-your-outfit-delete-img`} src={deleteIcon} alt="delete icon" />
              </Button>
              <UnorderedList key={`${e.id}-your-outfit-ul`}>
                <li key={`${e.id}-your-outfit-li-img`}>
                  {favoriteStylesData ? (favoriteStylesData.filter((element) => element.product_id == e.id).length !== 0 ? <Image key={`${e.id}-your-outfit-li-img-img`} src={favoriteStylesData.filter((element) => element.product_id == e.id)[0].results[0].photos[0].thumbnail_url} /> : "loading") : "loading"}
                </li>
                <CategoryListItem key={`${e.id}-your-outfit-category`}>{e.category}</CategoryListItem>
                <ProductNameListItem key={`${e.id}-your-outfit-name`}>{e.name}</ProductNameListItem>
                <PriceListItem key={`${e.id}-your-outfit-price`}>
                  $
                  {e.default_price.slice(0, -3)}
                </PriceListItem>
                <StarsListItem key={`${e.id}-your-outfit-li-stars`}>
                  {favoriteReviewsData.filter((el) => el.id == e.id)[0]
                    ? <StyledStarsList key={`${e.id}-your-outfit-styled-stars-list`} rating={favoriteReviewsData.filter((el) => el.id == e.id)[0].averageScore} />
                    : 'loading'}
                </StarsListItem>
                <ReviewCountListItem key={`${e.id}-your-outfit-reviews`}>
                  {favoriteReviewsData.filter((el) => el.id == e.id)[0]
                    ? favoriteReviewsData.filter((el) => el.id == e.id)[0].reviewsCount
                    : 'loading'}
                  {' reviews'}
                </ReviewCountListItem>
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
  currentProductData: propTypes.object, // an ProductData object for currentProductID
  favoriteProductData: propTypes.array, // an array of ProductData objects for favorited
  setFavoriteProductData: propTypes.func.isRequired,
  setCurrentProductID: propTypes.func.isRequired,
  favPosn: propTypes.number.isRequired,
  setFavPosn: propTypes.func.isRequired,
  getStylesDataFromAPI: propTypes.func.isRequired,
  getReviewsDataFromAPI: propTypes.func.isRequired,
};

export default YourOutfit;
