import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

// Assets
import starIcon from './iconmonstr-star-6.svg';

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
      <div>
        Related Items (
        {relatedProductData.length}
        {') (viewing '}
        {relPosn + 1}
        {' - '}
        {Math.min(relPosn + 1 + 3, relatedProductData.length)}
        )
      </div>
      <Carousel>
        <ArrowBtn dir="<" type="rel" relPosn={relPosn} setRelPosn={setRelPosn} relLength={relatedProductData.length} />
        {relatedProductData.slice(0 + relPosn, 4 + relPosn)
          .filter((e) => e.name !== currentProductData.name).map((e) => (
            <Card
              onClick={() => {
                setRelPosn(0);
                setCurrentProductID(e.id);
              }}
            >
              <Button
                onClick={(event) => {
                  event.stopPropagation();
                  setModalIsVisible(true);
                  setModalXY([event.clientX, event.clientY]);
                  setComparedProductData(e);
                }}
              >
                <img src={starIcon} alt="Compare" />
              </Button>
              <UnorderedList>
                <li>{relatedStylesData ? (relatedStylesData.filter((element) => element.product_id == e.id).length !== 0 ? <Image src={relatedStylesData.filter((element) => element.product_id == e.id)[0].results[0].photos[0].thumbnail_url} /> : "loading") : "loading"}</li>
                <li>{e.category}</li>
                <li>{e.name}</li>
                <li>${e.default_price}</li>
                <li>{relatedReviewsData ? (relatedReviewsData.filter((el) => el.id === e.id).length > 0 ? <StyledStarsList rating={relatedReviewsData.filter((el) => el.id === e.id)[0].averageScore} /> : "loading") : "loading"}</li>
                <li>
                  {relatedReviewsData ? relatedReviewsData.filter((el) => el.id === e.id).length > 0 ? relatedReviewsData.filter((el) => el.id === e.id)[0].reviewsCount : 'loading' : 'loading'} reviews</li>
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
  relatedReviewsData: propTypes.array.isRequired,
  currentProductData: propTypes.object.isRequired,
  relatedStylesData: propTypes.array.isRequired,
  setModalIsVisible: propTypes.func.isRequired,
  setCurrentProductID: propTypes.func.isRequired,
  setComparedProductData: propTypes.func.isRequired,
  setModalXY: propTypes.func.isRequired,
  relPosn: propTypes.number.isRequired,
  setRelPosn: propTypes.func.isRequired,
};

export default RelatedItems;
