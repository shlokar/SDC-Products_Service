import React from 'react';
import propTypes from 'prop-types';

// Assets
import starIcon from './iconmonstr-star-6.svg';

// Components
import StyledStarsList from '../Overview/Stars/StarsList.jsx';
import ArrowBtn from './ArrowBtn.jsx';

function RelatedItems({
  carouselStyle,
  relatedProducts,
  cardStyle,
  ulStyle,
  ratings,
  imgStyle,
  currentProductData,
  btnStyle,
  setModalIsVisible,
  setCurrentProductID,
  setComparedProduct,
  setModalXY,
  relPosn,
  setRelPosn,
  relatedStyles,
}) {
  return (
    <div id="related-items">
      <div>Related Items ({relatedProducts.length - 1}) (viewing {relPosn + 1} through {Math.min(relPosn + 1 + 3, relatedProducts.length - 1)})</div>
      <div id="carousel-container" style={carouselStyle}>
        <ArrowBtn dir="<" type="rel" relPosn={relPosn} setRelPosn={setRelPosn} relLength={relatedProducts.length}/>
        {relatedProducts.slice(0 + relPosn, 4 + relPosn).filter(e => e.name !== currentProductData.name).map((e) =>
          <div style={cardStyle} onClick={()=>{setRelPosn(0);setCurrentProductID(e.id);console.log("e.id: " + e.id + e.name);}}>
            <div style={btnStyle} onClick={(event)=>{event.stopPropagation(); setModalIsVisible(true); setModalXY([event.clientX, event.clientY]); setComparedProduct(e);}}>
              <img src={starIcon} />
            </div>
            <ul style={ulStyle}>
              <li>{relatedStyles ? (relatedStyles.filter((element) => element.product_id == e.id).length !== 0 ? <img style={imgStyle} src={relatedStyles.filter((element) => element.product_id == e.id)[0].results[0].photos[0].thumbnail_url}></img> : "loading") : "loading"}</li>
              <li>{e.category}</li>
              <li>{e.name}</li>
              <li>${e.default_price}</li>
              <li>{ratings ? (ratings[e.id] ? <StyledStarsList rating={ratings[e.id.toString()].averageScore} /> : "loading") : "loading"}</li>
              <li>{ratings ? (ratings[e.id] ? ratings[e.id.toString()].reviewsCount : "loading") : "loading"} reviews</li>
            </ul>
            <br></br>
          </div>)}
        <ArrowBtn
          dir=">"
          type="rel"
          relPosn={relPosn}
          setRelPosn={setRelPosn}
          relLength={relatedProducts.length}
        />
      </div>
    </div>
  );
}

RelatedItems.propTypes = {
  carouselStyle: propTypes.object.isRequired,
  relatedProducts: propTypes.array.isRequired,
  cardStyle: propTypes.object.isRequired,
  ulStyle: propTypes.object.isRequired,
  ratings: propTypes.object.isRequired,
  imgStyle: propTypes.object.isRequired,
  currentProductData: propTypes.object.isRequired,
  btnStyle: propTypes.object.isRequired,
  setModalIsVisible: propTypes.func.isRequired,
  setCurrentProductID: propTypes.func.isRequired,
  setComparedProduct: propTypes.func.isRequired,
  setModalXY: propTypes.func.isRequired,
  relPosn: propTypes.number.isRequired,
  setRelPosn: propTypes.func.isRequired,
  relatedStyles: propTypes.array.isRequired,
};

export default RelatedItems;
