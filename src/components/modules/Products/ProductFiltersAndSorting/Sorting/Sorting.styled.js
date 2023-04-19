import styled from 'styled-components';
import { ReactComponent as SortIcon } from '../../../../../img/products/sort.svg';

export const SortingIcon = styled(SortIcon)`
  background-color: var(--button-bg);
  border-radius: 8px;
  width: 40px;
  height: 40px;
  padding: 10px;

  & path {
    stroke: ${({ hoverColor }) => hoverColor || 'var(--accent-bg)'};
  }
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

export const SortingBtn = styled.button`
  font-weight: ${({ current }) => (current === 'true' ? 700 : 400)};
  font-family: 'Montserrat';
  background-color: transparent;
  color: var(--text);
`;
