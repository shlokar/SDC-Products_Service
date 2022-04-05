import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import checkSrc from './checkmark.svg';

function CheckMarkImg({ className }) {
  return <img className={className} src={checkSrc} alt="Selected item checkmark" />;
}

const StyledCheckMarkImg = styled(CheckMarkImg)`
  box-sizing: border-box;
  object-fit: cover;
  height: 20px;
  width: 20px;
`;

CheckMarkImg.propTypes = {
  className: propTypes.string.isRequired,
};

function CheckMarkCircle({ className }) {
  return (
    <div className={className}>
      <StyledCheckMarkImg />
    </div>
  );
}

const StyledCheckMarkCircle = styled(CheckMarkCircle)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  border: 2px solid black;
  border-radius: 50%;
  background-color: var(--clr-white);
  height: 20px;
  width: 20px;
`;

CheckMarkCircle.propTypes = {
  className: propTypes.string.isRequired,
};

function ThumbnailImg({
  className, id, src, alt, clickHandler,
}) {
  return <input type="image" className={className} src={src} alt={alt} onClick={() => clickHandler(id)} />;
}

const StyledThumbnailImg = styled(ThumbnailImg)`
  box-sizing: border-box;
  position: absolute;
  display: block;
  border: 2px solid black;
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

ThumbnailImg.propTypes = {
  className: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

function Thumbnail({
  className, id, src, alt, selected, clickHandler,
}) {
  return (
    <div className={className}>
      <StyledThumbnailImg id={id} src={src} alt={alt} clickHandler={clickHandler} />
      {selected && <StyledCheckMarkCircle />}
    </div>
  );
}

const StyledThumbnail = styled(Thumbnail)`
  position: relative;
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

Thumbnail.propTypes = {
  className: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  selected: propTypes.bool.isRequired,
  clickHandler: propTypes.func.isRequired,
};

export default StyledThumbnail;
