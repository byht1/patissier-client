import { ReactComponent as FiltersIcon } from '../../../../../img/products/filter.svg';
import styled from 'styled-components';

export const FilterIcon = styled(FiltersIcon)`
  /* background-color: var(--button-bg); */
  border-radius: 8px;
  width: 40px;
  height: 40px;
  padding: 10px;

  & path {
    fill: ${({ color }) => color || 'none'};
  }
  /* &:hover path {
    stroke: ${({ hoverColor }) => hoverColor || 'var(--accent-bg)'};
  } */
`;
