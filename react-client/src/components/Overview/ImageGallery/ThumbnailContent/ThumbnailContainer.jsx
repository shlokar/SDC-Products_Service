import styled, { css } from 'styled-components';

const ThumbnailContainer = styled.li`
  padding-bottom: 3px;
  border-bottom: 4px solid rgba(0, 0, 0, 0);

  ${({ selected }) => selected && css`
  border-bottom: 4px solid rgba(0, 0, 0, 1);
  `}
  margin-bottom: 15px;
  transition: all 1s;
`;

export default ThumbnailContainer;
