import styled from 'styled-components';

export const Image = styled.img``;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
`;
export const Item = styled.li`
  flex-basis: calc((100% - 120px) / 3);
  &:first-child {
    flex-basis: 780px;
  }
`;
