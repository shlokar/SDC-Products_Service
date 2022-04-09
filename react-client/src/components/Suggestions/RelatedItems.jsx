import React from 'react';
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
  currentProductID,
  setCurrentProductID,
  setComparedProduct,
  setModalXY,
  relPosn,
  setRelPosn,
}) {
  return (
    <div id="related-items">
      {/* This is to be its own component later */}
      <div>Related Items ({relatedProducts.length - 1}) (viewing {relPosn + 1} through {relPosn + 1 + 3})</div>
      <div id="carousel-container" style={carouselStyle}>
        <ArrowBtn dir="<" type="rel" relPosn={relPosn} setRelPosn={setRelPosn} relLength={relatedProducts.length}/>
        {relatedProducts.slice(0 + relPosn, 4 + relPosn).filter(e => e.name !== currentProductData.name).map((e) =>
          <div style={cardStyle} onClick={()=>{setCurrentProductID(e.id);console.log("e.id: " + e.id + e.name);}}>
            <div style={btnStyle} onClick={(event)=>{event.stopPropagation(); setModalIsVisible(true); setModalXY([event.clientX, event.clientY]); setComparedProduct(e);}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z"/></svg>
            </div>
            <ul style={ulStyle}>
              <li>{ratings ? (ratings[e.id] ? <img style={imgStyle} src={ratings[e.id.toString()].results[0].photos[0].url}></img> : "loading") : "loading"}</li>
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

export default RelatedItems;
