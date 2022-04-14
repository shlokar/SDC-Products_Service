import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import uniqid from 'uniqid';

// Components
import StyledThumbnail from './Thumbnail';

function ThumbnailContainer({ className, thumbnailsArr, clickHandler }) {
  const [data, setData] = useState(thumbnailsArr.slice());
  const [selected, setSelected] = useState(thumbnailsArr[0]);

  useEffect(() => {
    setData(thumbnailsArr.slice());
  }, [thumbnailsArr]);

  return (
    <ul className={className}>
      {data.map((thumbnail) => (
        <li key={uniqid()}>
          <StyledThumbnail
            id={thumbnail.style_id}
            src={thumbnail.thumbnail_url}
            alt="#"
            selected={selected.style_id === thumbnail.style_id}
            clickHandler={() => {
              setSelected(thumbnail);
              clickHandler(thumbnail.style_id);
            }}
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
  clickHandler: propTypes.func.isRequired,
};

export default StyledThumbnailContainer;
