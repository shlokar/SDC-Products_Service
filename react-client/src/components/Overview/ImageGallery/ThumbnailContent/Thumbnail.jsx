import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Components

function Thumbnail({
  className, image, clickHandler,
}) {
  return <input className={className} onClick={() => clickHandler(image)} />;
}

const StyledThumbnail = styled(Thumbnail)`
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  background-image: url("${(props) => props.image.url}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid black;
  cursor: pointer;
`;

Thumbnail.propTypes = {
  className: propTypes.string.isRequired,
  image: propTypes.shape({
    id: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
  }).isRequired,
  clickHandler: propTypes.func.isRequired,
};

export default StyledThumbnail;
