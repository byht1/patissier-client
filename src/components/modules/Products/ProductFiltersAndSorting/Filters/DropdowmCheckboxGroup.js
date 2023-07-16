import React, { useState } from 'react';
import {
  FilterParamsWrap,
  FilterLabel,
  CheckboxContainer,
  CheckboxInput,
  OptionList,
} from './Filters.styled';
import { ReactComponent as ArrowTop } from '../../../../../img/products/arrowTop.svg';
import { ReactComponent as ArrowBottom } from '../../../../../img/products/arrowBottom.svg';
export const DropdownCheckboxGroup = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = value => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <FilterParamsWrap>
      <FilterLabel onClick={handleToggle}>
        <span>{title}</span>
        {isOpen ? (
          <ArrowTop id="sort-filter" />
        ) : (
          <ArrowBottom id="sort-filter" />
        )}
      </FilterLabel>
      {isOpen && (
        <OptionList>
          {options.map(option => (
            <li key={option}>
              <CheckboxContainer>
                <CheckboxInput
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionClick(option)}
                />
                {option}
              </CheckboxContainer>
            </li>
          ))}
        </OptionList>
      )}
    </FilterParamsWrap>
  );
};
