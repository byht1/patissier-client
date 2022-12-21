import React from 'react';

import { TextBox } from './Text.styled';
import { propTypeText } from '../helpers';

export const Text = ({
  family = 'montserrat',
  weight = 400,
  size = 14,
  lh = 'normal',
  children,
  ...props
}) => {
  return (
    <TextBox family={family} weight={weight} size={size} lh={lh} {...props}>
      {children}
    </TextBox>
  );
};

Text.propTypes = propTypeText;
