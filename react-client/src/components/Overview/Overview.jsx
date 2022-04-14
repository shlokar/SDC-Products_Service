import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Components
import ImageGalleryContainer from './ImageGallery/ImageGallery';
import StyledStarsAndReviews from './Stars/StarsListAndReviews';
import StyledTitleContainer from './Styles/Title';
import StyledProductHeader from './ProductHeader';
import StyledPrice from './Price/Price';
import StyledProductOverview from './ProductOverview';
import StyledSocialBtns from './SocialMedia/SocialBtns';
import StyledThumbnailContainer from './Styles/Thumbnails/ThumbnailContainer';
import StyledAddToCartContainer from './AddToCart/AddToCartContainer';

const LeftDiv = styled.div`
  position: relative;
  background-color: blue;
  z-index: 999;
  right: 0;
`;

const RightDiv = styled.div`
  position: relative;
  right: 0;
  padding: 30px 0 0 30px;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const createStylesImgsArr = (obj) => {
  const stylesImgsArr = [];
  obj.results.forEach((data) => {
    const thumbnailData = {};
    thumbnailData.style_id = data.style_id;
    thumbnailData.thumbnail_url = data.photos[0].thumbnail_url;
    stylesImgsArr.push(thumbnailData);
  });

  return stylesImgsArr;
};

const createCarouselImgs = (obj, id) => {
  let carouselImgsArr = obj.results[0].photos.slice();
  // console.log('id: ', id);

  if (id) {
    for (let i = 0; i < obj.results.length; i++) {
      if (obj.results[i].style_id === id) {
        carouselImgsArr = obj.results[i].photos.slice();
        break;
      }
    }
  }

  return carouselImgsArr;
};

const createSelectedProduct = (obj, id) => {
  let selectedProduct;

  for (let i = 0; i < obj.results.length; i++) {
    const currObj = obj.results[i];
    if (currObj.style_id === id) {
      selectedProduct = currObj;
      break;
    }
  }

  return selectedProduct;
};

const createItems = (products) => {
  const itemsArr = [];

  const keys = Object.keys(products);

  for (let i = 0; i < keys.length; i++) {
    const currKey = keys[i];
    const obj = {};
    obj.id = currKey;
    obj.value = products[currKey].size;
    obj.stock = products[currKey].quantity;
    itemsArr.push(obj);
  }

  return itemsArr;
};

// Only works with a reviews object
const getAverageRating = (arr) => {
  const sum = arr.reduce((prev, curr) => prev + curr.rating, 0);
  return (sum / arr.length);
};

function Overview({ className, prodData, stylesData, reviewData }) {
  const [carouselImgs, setCarouselImgs] = useState(stylesData.results[0].photos.slice());
  const [stylesImgsArr] = useState(createStylesImgsArr(stylesData));
  const [selectedProduct, setSelectedProduct] = useState(stylesData.results[0]);
  const [rating] = useState(getAverageRating(reviewData.results));

  return (
    <div className={className}>
      <LeftDiv>
        <ImageGalleryContainer data={carouselImgs} />
      </LeftDiv>
      <RightDiv>
        <InfoDiv>
          <StyledStarsAndReviews rating={Number(rating)} internalLink="#" numOfReviews={reviewData.count} />
          <StyledProductHeader title={prodData.name} category={prodData.category} />
          <StyledPrice
            cost={selectedProduct.original_price}
            onSale={Boolean(selectedProduct.sale_price)}
            saleCost={selectedProduct.sale_price}
          />
          <StyledProductOverview text={prodData.description} />
          <StyledSocialBtns facebookRedirect="#" twitterRedirect="#" pinterestRedirect="#" />
          <StyledTitleContainer styleName={selectedProduct.name} />
          <StyledThumbnailContainer
            thumbnailsArr={stylesImgsArr}
            clickHandler={(styleId) => {
              const newProduct = createSelectedProduct(stylesData, styleId);
              setCarouselImgs(createCarouselImgs(stylesData, styleId));
              setSelectedProduct(newProduct);
            }}
          />
          <StyledAddToCartContainer items={createItems(selectedProduct.skus)} />
        </InfoDiv>
      </RightDiv>
    </div>
  );
}

Overview.propTypes = {
  className: propTypes.string.isRequired,
};

const StyledOverview = styled(Overview)`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export default StyledOverview;
