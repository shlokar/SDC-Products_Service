import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import uniqid from 'uniqid';

// Components
import StyledThumbnail from './Thumbnail';

function ThumbnailContainer({ className, thumbnailsArr }) {
  const [data] = useState(thumbnailsArr.slice());
  const [selected, setSelected] = useState(thumbnailsArr[0]);

  return (
    <ul className={className}>
      {data.map((thumbnail) => (
        <li key={uniqid()}>
          <StyledThumbnail
            id={thumbnail.style_id}
            src={thumbnail.thumbnail_url}
            alt="#"
            selected={selected.style_id === thumbnail.style_id}
            clickHandler={() => setSelected(thumbnail)}
          />
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
  thumbnailsArr:
  propTypes.arrayOf(propTypes.shape({
    style_id: propTypes.number.isRequired,
    thumbnail_url: propTypes.string.isRequired,
  })).isRequired,
};

export default StyledThumbnailContainer;
