import styled from 'styled-components';

const StyledAnimateImg = styled.div`
  visibility: hidden;
  opacity: 0;
  ${({ selected }) => selected && `
  visibility: visible;
  opacity: 1;
  `}
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 1s;
`;

export default StyledAnimateImg;
