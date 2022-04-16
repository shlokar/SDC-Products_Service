import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

// Assets
import starIcon from './iconmonstr-star-6.svg';

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

function RelatedItems({
  relatedProductData,
  relatedReviewsData,
  currentProductData,
  setModalIsVisible,
  setCurrentProductID,
  setComparedProductData,
  setModalXY,
  relPosn,
  setRelPosn,
  relatedStylesData,
}) {
  return (
    <div id="related-items">
      <CarouselTitle>
        Related Items (
        {relatedProductData.length}
        {') (viewing '}
        {relPosn + 1}
        {' - '}
        {Math.min(relPosn + 1 + 3, relatedProductData.length)}
        )
      </CarouselTitle>
      <Carousel>
        <ArrowBtn dir="<" type="rel" relPosn={relPosn} setRelPosn={setRelPosn} relLength={relatedProductData.length} />
        {relatedProductData.slice(0 + relPosn, 4 + relPosn)
          .filter((e) => e.name !== currentProductData.name).map((e) => (
            <Card
              key={`${e.id}-related-items-card`}
              onClick={() => {
                setRelPosn(0);
                setCurrentProductID(e.id);
              }}
            >
              <Button
                key={`${e.id}-related-items-compare-btn`}
                onClick={(event) => {
                  event.stopPropagation();
                  setModalIsVisible(true);
                  setModalXY([event.clientX, event.clientY]);
                  setComparedProductData(e);
                }}
              >
                <img key={`${e.id}-related-items-star-img`} src={starIcon} alt="Compare" />
              </Button>
              <UnorderedList key={`${e.id}-related-items-ul`}>
                <li key={`${e.id}-related-items-img`}>{relatedStylesData ? (relatedStylesData.filter((element) => element.product_id == e.id).length !== 0 ? <Image src={relatedStylesData.filter((element) => element.product_id == e.id)[0].results[0].photos[0].thumbnail_url} /> : "loading") : "loading"}</li>
                <CategoryListItem key={`${e.id}-related-items-category`}>{e.category}</CategoryListItem>
                <ProductNameListItem key={`${e.id}-related-items-name`}>{e.name}</ProductNameListItem>
                <PriceListItem key={`${e.id}-related-items-price`}>${e.default_price.slice(0,-3)}</PriceListItem>
                <StarsListItem key={`${e.id}-related-items-stars`}>{relatedReviewsData ? (relatedReviewsData.filter((el) => el.id === e.id).length > 0 ? <StyledStarsList rating={relatedReviewsData.filter((el) => el.id === e.id)[0].averageScore} /> : "loading") : "loading"}</StarsListItem>
                <ReviewCountListItem key={`${e.id}-related-items-reviews`}>
                  {relatedReviewsData ? relatedReviewsData.filter((el) => el.id === e.id).length > 0 ? relatedReviewsData.filter((el) => el.id === e.id)[0].reviewsCount : 'loading' : 'loading'} reviews</ReviewCountListItem>
              </UnorderedList>
              <br />
            </Card>
          ))}
        <ArrowBtn
          dir=">"
          type="rel"
          relPosn={relPosn}
          setRelPosn={setRelPosn}
          relLength={relatedProductData.length}
        />
      </Carousel>
    </div>
  );
}

RelatedItems.propTypes = {
  relatedProductData: propTypes.arrayOf(propTypes.shape({

  })).isRequired,
  relatedReviewsData: propTypes.array,
  currentProductData: propTypes.object,
  relatedStylesData: propTypes.array,
  setModalIsVisible: propTypes.func.isRequired,
  setCurrentProductID: propTypes.func.isRequired,
  setComparedProductData: propTypes.func,
  setModalXY: propTypes.func.isRequired,
  relPosn: propTypes.number.isRequired,
  setRelPosn: propTypes.func.isRequired,
};

export default RelatedItems;
