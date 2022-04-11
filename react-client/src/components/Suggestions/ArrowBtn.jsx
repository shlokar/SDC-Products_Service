import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { StyledLeftArrow, StyledRightArrow } from '../Overview/ImageGallery/Arrows.jsx';

const ArrowBtnContainer = styled.div`
  display: inline-block;
  position: relative;
  top: 0px;
  width: 2em;
  height: 360px;
  margin: 5px;
  vertical-align: text-top;
  align-items: center;
  text-align: center;
`;

const Arrow = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 20%;
`;

function ArrowBtn({
  type,
  dir,
  relPosn,
  setRelPosn,
  favPosn,
  setFavPosn,
  relLength,
  favLength,
}) {
  function showArrow() {
    if (!((((type === 'rel' && relPosn === 0) || (type === 'fav' && favPosn === 0)) && dir === '<')
    || (((type === 'rel' && relPosn >= relLength - 4) || (type === 'fav' && favPosn >= favLength - 3)) && dir === '>'))) {
      switch (dir) {
        case '<':
          return (<StyledLeftArrow className="Carousel Left" clickHandler={() => {}} isVisible={dir === '<'} />);
        case '>':
          return (<StyledRightArrow className="Carousel Right" clickHandler={() => {}} isVisible={dir === '>'} />);
        default:
          return '';
      }
    }
    return '';
  }

  return (
    <ArrowBtnContainer
      onClick={() => {
        if (type === 'rel') {
          if (dir === '>' && relPosn < relLength - 4) setRelPosn(relPosn + 1);
          if (dir === '<' && relPosn > 0) setRelPosn(relPosn - 1);
        } else if (type === 'fav') {
          if (dir === '>' && favPosn < favLength - 3) setFavPosn(favPosn + 1);
          if (dir === '<' && favPosn > 0) setFavPosn(favPosn - 1);
        }
      }}
    >
      <Arrow>
        {showArrow()}
      </Arrow>
    </ArrowBtnContainer>
  );
}

ArrowBtn.propTypes = {
  type: propTypes.string.isRequired, // 'rel' for Related Items, 'fav' for Your Outfit
  dir: propTypes.string.isRequired, // '<' or '>'
  relPosn: propTypes.number.isRequired, // offset for Related Items, initial value = 0
  setRelPosn: propTypes.func.isRequired,
  favPosn: propTypes.number.isRequired, // offset for Your Outfit, initial value = 0
  setFavPosn: propTypes.func.isRequired,
  relLength: propTypes.number.isRequired, // length of Related Items list
  favLength: propTypes.number.isRequired, // length of Your Outfit List
};

export default ArrowBtn;
