import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Components
import StyledIcon from './Icon';

function IconList({
  className, imgs, selectedImg, setSelectedImg,
}) {
  return (
    <ul className={className}>
      {imgs.map((img) => (
        <li key={img.id}>
          <StyledIcon
            selected={selectedImg.id === img.id}
            clickHandler={() => setSelectedImg(img)}
          />
        </li>
      ))}
    </ul>
  );
}

const StyledIconList = styled(IconList)`
  display: flex;
  gap: 20px;
`;

IconList.propTypes = {
  className: propTypes.string.isRequired,
  imgs: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    index: propTypes.number.isRequired,
  }).isRequired).isRequired,
  selectedImg: propTypes.shape({
    id: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    index: propTypes.number.isRequired,
  }).isRequired,
  setSelectedImg: propTypes.func.isRequired,
};

export default StyledIconList;
