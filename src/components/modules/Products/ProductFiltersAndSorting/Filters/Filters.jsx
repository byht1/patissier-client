import React, { useState } from 'react';
import {
  formOptions,
  sizeOptions,
  decorOptions,
  ingredientsOptions,
} from './filterOptions';
import { DropdownCheckboxGroup } from './DropdowmCheckboxGroup';

import { InputSlider } from './slider.styled';
import {
  FilterIconOpen,
  FilterWrap,
  FilterIconWrap,
  FilterLabel,
  InputPriceWrap,
  PriceInput,
  Button,
  MinPriceInput,
  FilterParamsWrap,
} from './Filters.styled';

export const Filters = () => {
  const [val, setVal] = useState(['1', '2300']);
  const sliderVal = val.map(Number);

  const handleMinInputChange = e => {
    let value = e.target.value.replace(/\D/g, '');
    if (Number(value) >= Number(val[1])) {
      value = (Number(val[1]) - 1).toString();
    }

    setVal([value, val[1]]);
  };
  const handleBlur = e => {
    let value = e.target.value.trim();
    if (value === '') {
      value = '1';
      e.target.value = value;
    }
    setVal([value, val[1]]);
  };

  const handleMaxInputChange = e => {
    let value = e.target.value.replace(/\D/g, '');
    if (Number(value) > 2300) {
      value = '2300';
    }
    if (Number(value) < Number(val[0])) {
      value = (Number(val[0]) + 1).toString();
    }
    setVal([val[0], value]);
  };

  return (
    <FilterWrap>
      <FilterIconWrap>
        <FilterIconOpen />{' '}
      </FilterIconWrap>
      <FilterParamsWrap>
        <FilterLabel>Ціна</FilterLabel>
        <div>
          <InputPriceWrap>
            <MinPriceInput>
              <span>Від</span>
              <PriceInput
                type="text"
                value={val[0]}
                onChange={handleMinInputChange}
                onBlur={handleBlur}
              />
            </MinPriceInput>
            <div>
              <span>До</span>
              <PriceInput
                type="text"
                value={val[1]}
                onChange={handleMaxInputChange}
              />
            </div>

            <Button>Ок</Button>
          </InputPriceWrap>
          <InputSlider
            step={1}
            min={1}
            max={2300}
            value={sliderVal}
            onChange={(ev, v) => setVal(v.map(String))}
            valueLabelDisplay="off"
            aria-labelledby="range-slider"
          />
        </div>
      </FilterParamsWrap>
      <DropdownCheckboxGroup title="Інгредієнти" options={ingredientsOptions} />
      <DropdownCheckboxGroup title="Форма" options={formOptions} />
      <DropdownCheckboxGroup title="Розмір" options={sizeOptions} />
      <DropdownCheckboxGroup title="Вид дектору" options={decorOptions} />
    </FilterWrap>
  );
};
