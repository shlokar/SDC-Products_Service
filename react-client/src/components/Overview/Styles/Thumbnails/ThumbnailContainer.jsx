import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import uniqid from 'uniqid';

// Components
import StyledThumbnail from './Thumbnail.jsx';

/**
 * PROPERTIES
 *
 * thumbnailData: (array)
 *   - array of objects that NEEDS to have the following properties per object.
 *     - id: (string) - a uniqie identifier.
 *     - src: (string) - the image source.
 *     - alt: (string) - text describing the image.
 *     - selected: (bool) - true or false depending if you want the item to be selected.
 *       note: the thumbnailData should only have one item as selected.
 */

function ThumbnailContainer({ className, thumbnailData }) {
  const [data, setData] = useState(thumbnailData.slice());

  const updateSelectedThumbnail = (id) => {
    const selectedTrue = (obj) => obj.selected === true
    const matchingIds = (obj) => obj.id === id;

    const dataCopy = data.slice();

    for (let i = 0; i < dataCopy.length; i++) {
      const currObj = dataCopy[i];
      if (selectedTrue(currObj) && !matchingIds(currObj)) {
        dataCopy[i].selected = false;
        break;
      } else if (selectedTrue(currObj) && matchingIds(currObj)) {
        return;
      }
    }

    for (let i = 0; i < dataCopy.length; i++) {
      const currObj = dataCopy[i];
      if (matchingIds(currObj)) {
        dataCopy[i].selected = true;
        break;
      }
    }

    setData(dataCopy);
  };

  return (
    <ul className={className}>
      {data.map((thumbnail) => (
        <li key={uniqid()}>
          <StyledThumbnail
            id={thumbnail.id}
            src={thumbnail.src}
            alt={thumbnail.alt}
            selected={thumbnail.selected}
            clickHandler={updateSelectedThumbnail}
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
  thumbnailData:
  propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    src: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    selected: propTypes.bool.isRequired,
  })).isRequired,
};

export default StyledThumbnailContainer;
