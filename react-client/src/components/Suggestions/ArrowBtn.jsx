import React from 'react';
import propTypes from 'prop-types';

function ArrowBtn({ type, dir, relPosn, setRelPosn, favPosn, setFavPosn, relLength, favLength}) {
  const arrowBtnStyle = {
    display: 'inline-block',
    position: 'relative',
    top: '0px',
    width: '2em',
    height: '360px',
    border: '1px lightgray solid',
    borderRadius: '7px',
    margin: '5px',
    verticalAlign: 'text-top',
    alignItems: 'center',
    textAlign: 'center',
  };

  const arrowStyle = {
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '15%',
  };

  return (
    <div
      style={arrowBtnStyle}
      onClick={() => {
        if (type === 'rel') {
          if (dir === '>' && relPosn < relLength - 4 - 1) setRelPosn(relPosn + 1);
          if (dir === '<' && relPosn > 0) setRelPosn(relPosn - 1);
        } else if (type === 'fav') {}
          if (dir === '>' && favPosn < favLength - 3) setFavPosn(favPosn + 1);
          if (dir === '<' && favPosn > 0) setFavPosn(favPosn - 1);
      }}
    >
      <div style={arrowStyle}>
        {(((type === 'rel' && relPosn === 0) || (type === 'fav' && favPosn === 0)) && dir === '<')
        || (((type === 'rel' && relPosn >= relLength - 4 - 1) || (type === 'fav' && favPosn >= favLength - 3)) && dir === '>')
          ? '' : dir === '<' ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>}
        </div>
    </div>
  );
}

ArrowBtn.propTypes = {
  type: propTypes.string.isRequired,
  dir: propTypes.string.isRequired,
  relPosn: propTypes.number.isRequired,
  setRelPosn: propTypes.func.isRequired,
  favPosn: propTypes.number.isRequired,
  setFavPosn: propTypes.func.isRequired,
  relLength: propTypes.number.isRequired,
  favLength: propTypes.number.isRequired,
};

export default ArrowBtn;
