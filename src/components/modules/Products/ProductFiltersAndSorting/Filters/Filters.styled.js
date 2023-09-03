import { ReactComponent as FiltersIcon } from '../../../../../img/products/filter.svg';
import styled from 'styled-components';

export const FilterIcon = styled(FiltersIcon)`
  border-radius: 8px;
  width: 40px;
  height: 40px;
  padding: 9px;

  & path {
    fill: ${({ color }) => color || 'none'};
  }
`;

export const FilterWrap = styled.div`
  padding: 20px;
`;

export const FilterIconWrap = styled.div`
  margin-left: auto;
  border: 1px solid var(--accent-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;

export const FilterIconOpen = styled(FiltersIcon)`
  border-radius: 8px;
  width: 40px;
  height: 40px;
  padding: 9px;

  & path {
    stroke: var(--accent-bg);
  }
`;

export const FilterLabel = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 12px;
`;

export const InputPriceWrap = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const PriceInput = styled.input`
  width: 73px;
  height: 28px;
  padding: 4px 16px;
  margin-left: 4px;
  background-color: var(--background);
  text-align: center;
  font-size: 16px;
  font-family: 'Montserrat';
  color: var(--white);
  border: 1px solid var(--accent-bg);
  border-radius: 8px;
`;

export const Button = styled.button`
  outline: none;

  padding: 4px 16px;
  margin-left: auto;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  color: var(--white);
  background-color: var(--accent-bg);
  transition: var(--transition-bg);
  &:hover,
  &:focus {
    background-color: var(--accent-hover);
  }
`;

export const MinPriceInput = styled.div`
  margin-right: 20px;
`;

export const FilterParamsWrap = styled.div`
  margin-top: 20px;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid gray;
  border-radius: 3px;
  margin-right: 5px;
  cursor: pointer;

  &:checked {
    background-color: var(--accent-bg);
    border-color: transparent;
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpolyline points="20 6 9 17 4 12"%3E%3C/polyline%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center;
  }

  &:not(:checked) {
    border-width: 2.5px;
    border-style: solid;
    border-color: var(--text);
  }
`;

export const OptionList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 8px;
  }
`;
