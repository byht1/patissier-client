import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 35px;
  justify-content: space-between;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  width: 165px;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  font-family: 'Montserrat';
  margin: 0 auto;
  padding: 10px;
  background-color: transparent;
  color: var(--accent-bg);
  &:hover,
  &:focus {
    color: var(--accent-hover);
  }
`;
