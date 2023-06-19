import styled from 'styled-components';

export const LoadMore = styled.button`
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
