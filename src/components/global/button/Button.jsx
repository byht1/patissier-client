import React from 'react';
import { Btn } from './Button.styled';
import { propTypeButton } from './type';

export const Button = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>;
};

Button.propTypes = propTypeButton;
