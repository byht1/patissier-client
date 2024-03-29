import styled from 'styled-components';

export const FilterButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: var(--button-bg);
  transition: var(--transition-border-color);
  &:hover,
  &:focus {
    border-color: var(--accent-bg);
  }
`;

export const Filter = styled.img`
  width: 27px;
  height: 25px;
  margin: 0 auto;
`;

export const FilterAndSortWrap = styled.div`
  display: flex;
  gap: 24px;
`;
