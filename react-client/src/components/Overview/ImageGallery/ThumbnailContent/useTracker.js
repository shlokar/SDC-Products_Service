import { useState } from 'react';

const useTracker = (array, numItemsToTrack) => {
  const [tracker, setTracker] = useState({ firstItemIndex: 0, lastItemIndex: numItemsToTrack - 1 });
  const newArray = array.map((item, index) => {
    const newItem = { ...item };
    newItem.index = index;
    return newItem;
  });

  const trackNextItem = () => {
    const trackerCopy = { ...tracker };
    if (tracker.lastItemIndex + 1 < newArray.length) {
      trackerCopy.firstItemIndex += 1;
      trackerCopy.lastItemIndex += 1;
      setTracker(trackerCopy);
    } else {
      console.log('You have tracked up to the last item. Can not go further.');
    }
  };

  const trackPrevItem = () => {
    const trackerCopy = { ...tracker };
    if (tracker.firstItemIndex - 1 > 0) {
      trackerCopy.firstItemIndex -= 1;
      trackerCopy.lastItemIndex -= 1;
      setTracker(trackerCopy);
    } else {
      console.log('You have tracked up to the first item. Can not go further.');
    }
  };

  const isTracked = (index) => {
    if (index >= tracker.firstItemIndex && index <= tracker.lastItemIndex) {
      return true;
    }

    return false;
  };

  const IsNotTrackedPrev = (index) => {
    if (index < tracker.firstItemIndex) {
      return true;
    }

    return false;
  };

  const IsNotTrackedAfter = (index) => {
    if (index > tracker.lastItemIndex) {
      return true;
    }

    return false;
  };

  return {
    trackNextItem,
    trackPrevItem,
    isTracked,
    arr: newArray,
    IsNotTrackedAfter,
    IsNotTrackedPrev,
    tracker,
  };
};

export default useTracker;

/*
  add a tracker to each element in array starting at 0 up to but including numItemsToTrack

  trackNextItem
    if lastItemIndex + 1 is less then the length of array
      increase lastItemIndex by 1
      increase firstItemIndex by 1
    else
      log you have tracked up to the last item. Canot go further.

  trackPrevItem
    if firstItemIndex - 1 is greater then 0
      decrease firstItem index by 1
      decrease lastItemIndex by 1
    else
      log you have tracked up to the first item.

  isTracked - (id)
    declare a var called index

    iterate through array
      if item at i's id is the same as id
        init index with i

    if index is greater or equal to firstItemIndex and less then or equal to lastItemIndex
      return true

    return false

  */