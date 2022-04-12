import React, { createContext, useState, useMemo, useEffect } from 'react';
import uniqid from 'uniqid';

// Assets
import useTracker from './ThumbnailContent/useTracker';

const GalleryContext = createContext();

const updateImgsArr = (arr) => {
  const arrCopy = arr.map((obj) => {
    const newObj = { ...obj };
    newObj.id = uniqid();
    newObj.alt = '#';
    return newObj;
  });

  return useTracker(arrCopy).arr;
};

function GalleryProvider({ children, newData }) {
  const [imgsArr] = useState(updateImgsArr(newData.data));
  const [currImg, setCurrImg] = useState(imgsArr[0]);
  const [expandedViewVisible, setExpandedViewVisible] = useState(false);
  const [expandedImgWidth, setExpandedImgWidth] = useState(newData.expandedImgWidth);

  const goToPrevImg = () => {
    if (currImg.index > 0) {
      const prevImg = imgsArr[currImg.index - 1];
      setCurrImg(prevImg);
    }
  };

  const goToNextImg = () => {
    if (currImg.index + 1 < imgsArr.length) {
      const nextImg = imgsArr[currImg.index + 1];
      setCurrImg(nextImg);
    }
  };

  const firstImgIsSelected = () => currImg.index === 0;

  const lastImgIsSelected = () => currImg.index === imgsArr.length - 1;

  const data = useMemo(() => ({
    imgsArr,
    currImg,
    setCurrImg,
    expandedViewVisible,
    setExpandedViewVisible,
    goToPrevImg,
    goToNextImg,
    firstImgIsSelected,
    lastImgIsSelected,
    expandedImgWidth,
  }), [currImg, expandedViewVisible, expandedImgWidth]);

  useEffect(() => {
    if (window.innerWidth <= 1400) {
      setExpandedImgWidth(window.innerWidth);
    }
  }, [window.innerWidth]);

  return (
    <GalleryContext.Provider
      value={data}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export { GalleryProvider, GalleryContext };
