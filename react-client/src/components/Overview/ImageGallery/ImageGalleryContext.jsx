import React, {
  createContext, useState, useMemo, useEffect,
} from 'react';

const GalleryContext = createContext();

function GalleryProvider({ children, newData }) {
  const imgsArr = newData.newData;
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
  }), [imgsArr, currImg, expandedViewVisible, expandedImgWidth]);

  useEffect(() => {
    if (window.innerWidth <= 1400) {
      setExpandedImgWidth(window.innerWidth);
    }
  }, [window.innerWidth]);

  useEffect(() => {
    setCurrImg(imgsArr[0]);
  }, imgsArr);

  return (
    <GalleryContext.Provider
      value={data}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export { GalleryProvider, GalleryContext };
