import React from 'react';
import propTypes from 'prop-types';

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
      {/* This is to be its own component later */}
      <div>Related Items ({relatedProducts.length - 1}) (viewing {relPosn + 1} through {Math.min(relPosn + 1 + 3, relatedProducts.length - 1)})</div>
      <div id="carousel-container" style={carouselStyle}>
        <ArrowBtn dir="<" type="rel" relPosn={relPosn} setRelPosn={setRelPosn} relLength={relatedProducts.length}/>
        {relatedProducts.slice(0 + relPosn, 4 + relPosn).filter(e => e.name !== currentProductData.name).map((e) =>
          <div style={cardStyle} onClick={()=>{setRelPosn(0);setCurrentProductID(e.id);console.log("e.id: " + e.id + e.name);}}>
            <div style={btnStyle} onClick={(event)=>{event.stopPropagation(); setModalIsVisible(true); setModalXY([event.clientX, event.clientY]); setComparedProduct(e);}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z"/></svg>
            </div>
            <ul style={ulStyle}>
              <li>{relatedStyles ? (relatedStyles.filter((element) => element.product_id == e.id).length !== 0 ? <img style={imgStyle} src={relatedStyles.filter((element) => element.product_id == e.id)[0].results[0].photos[0].thumbnail_url}></img> : "loading") : "loading"}</li>
              <li>{e.category}</li>
              <li>{e.name}</li>
              <li>${e.default_price}</li>
              <li>{ratings ? (ratings[e.id] ? <StyledStarsList rating={ratings[e.id.toString()].averageScore} /> : "loading") : "loading"} stars</li>
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
