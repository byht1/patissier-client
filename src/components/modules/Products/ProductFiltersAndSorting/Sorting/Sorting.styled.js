import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { ReactComponent as SortIcon } from '../../../../../img/products/sort.svg';

export const SortingIcon = styled(SortIcon)`
  border-radius: 8px;
  width: 40px;
  height: 40px;
  padding: 10px;

  & path {
    fill: ${({ color }) => color || 'none'};
  }
`;

export const SortingIconOpen = styled(SortIcon)`
  border-radius: 8px;
  width: 40px;
  height: 40px;
  padding: 10px;
  & path {
    stroke: var(--accent-bg);
  }
  /* &:hover path {
    stroke: ${({ hoverColor }) => hoverColor || 'var(--accent-bg)'};
  } */
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  color: var(--white);
  border-bottom: 1px solid var(--accent-bg);
  border-radius: 12px;
`;

export const SortingList = styled.ul`
  padding: 23px 20px;
`;

export const SortingItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const SortingBtn = styled.button`
  font-weight: ${({ current }) => (current === 'true' ? 700 : 400)};
  font-size: 16px;
  font-family: 'Montserrat';
  background-color: transparent;
  color: var(--text);
  &:hover,
  &:focus {
    font-weight: 500;
  }
`;

export const SortFilterBox = styled.div`
  position: absolute;
  background-color: var(--background);
  width: 356px;
  border-radius: 12px;
  right: -1px;
  z-index: 2;
  top: -1px;
  pointer-events: all;
  transition: opacity 250ms linear;
  /* opacity: ${({ isSelected }) => (isSelected ? '1' : '0')}; */
  animation: ${({ isSelected }) => (isSelected ? fadeIn : fadeOut)} 250ms linear;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    pointer-events: ${({ isSelected }) => (isSelected ? 'none' : 'auto')};
  }
`;
