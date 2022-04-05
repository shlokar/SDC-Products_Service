import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import uniqid from 'uniqid';

// Components
import StyledThumbnail from './Thumbnail.jsx';

function ThumbnailContainer({ className, thumbnailData }) {
  return (
    <ul className={className}>
      {thumbnailData.map((data) => (
        <li key={uniqid()}>
          <StyledThumbnail src={data.src} alt={data.alt} selected={data.selected} />
        </li>
      ))}
    </ul>
  );
}

const StyledThumbnailContainer = styled(ThumbnailContainer)`
  display: inline-flex;
  flex-wrap: wrap;
  max-width: 410px;
  gap: 30px;
  margin: 15px 0;
`;

ThumbnailContainer.propTypes = {
  className: propTypes.string.isRequired,
  thumbnailData:
  propTypes.arrayOf(propTypes.shape({
    src: propTypes.string,
    alt: propTypes.string,
    selected: propTypes.bool,
  })).isRequired,
};

export default StyledThumbnailContainer;
