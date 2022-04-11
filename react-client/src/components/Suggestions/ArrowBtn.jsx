import React from 'react';
import propTypes from 'prop-types';

// Components
import { StyledLeftArrow, StyledRightArrow } from '../Overview/ImageGallery/Arrows.jsx';

function ArrowBtn({ type, dir, relPosn, setRelPosn, favPosn, setFavPosn, relLength, favLength}) {
  const arrowBtnStyle = {
    display: 'inline-block',
    position: 'relative',
    top: '0px',
    width: '2em',
    height: '360px',
    margin: '5px',
    verticalAlign: 'text-top',
    alignItems: 'center',
    textAlign: 'center',
  };

  const arrowStyle = {
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '20%',
  };

  return (
    <div
      style={arrowBtnStyle}
      onClick={() => {
        if (type === 'rel') {
          if (dir === '>' && relPosn < relLength - 4 - 1) setRelPosn(relPosn + 1);
          if (dir === '<' && relPosn > 0) setRelPosn(relPosn - 1);
        } else if (type === 'fav') {}
          if (dir === '>' && favPosn < favLength - 3) setFavPosn(favPosn + 1);
          if (dir === '<' && favPosn > 0) setFavPosn(favPosn - 1);
      }}
    >
      <div style={arrowStyle}>
        {(((type === 'rel' && relPosn === 0) || (type === 'fav' && favPosn === 0)) && dir === '<')
        || (((type === 'rel' && relPosn >= relLength - 4 - 1) || (type === 'fav' && favPosn >= favLength - 3)) && dir === '>')
          ? '' : dir === '<' ? <StyledLeftArrow className="Carousel Left" clickHandler={()=>{}} isVisible={dir === '<'}/> : <StyledRightArrow className="Carousel Right" clickHandler={()=>{}} isVisible={dir === '>'} />}
        </div>
    </div>
  );
}

ArrowBtn.propTypes = {
  type: propTypes.string.isRequired,
  dir: propTypes.string.isRequired,
  relPosn: propTypes.number.isRequired,
  setRelPosn: propTypes.func.isRequired,
  favPosn: propTypes.number.isRequired,
  setFavPosn: propTypes.func.isRequired,
  relLength: propTypes.number.isRequired,
  favLength: propTypes.number.isRequired,
};

export default ArrowBtn;
