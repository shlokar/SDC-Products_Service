import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Assets
import magnifierSrc from './magnifier-icon.svg';

const StyledLogo = styled.h1`
  font-family: var(--fnt-bld-italic);
  font-size: 1.8em;
  text-decoration: underline;
  color: var(--clr-white);
`;

const StyledInput = styled.div`
  height: 20px;
  width: 100%;
  border-bottom: 2px solid #FFF;
`;

const StyledImg = styled.img`
  height: 23px;
  width: 23px;
`;

function SearchContainer({ className }) {
  return (
    <div className={className}>
      <StyledInput />
      <StyledImg src={magnifierSrc} alt="#" />
    </div>
  );
}

const StyledSearchContainer = styled(SearchContainer)`
  display: flex;
  gap: 20px;
  align-items: center;
  height: 70px;
  width: 180px;
`;

SearchContainer.propTypes = {
  className: propTypes.string.isRequired,
};

function Nav({ className }) {
  return (
    <nav className={className}>
      <StyledLogo>Logo</StyledLogo>
      <StyledSearchContainer />
    </nav>
  );
}

const StyledNav = styled(Nav)`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 70px;
  width: 100%;
  background-color: var(--clr-light-black);
`;

Nav.propTypes = {
  className: propTypes.string.isRequired,
};

export default StyledNav;
