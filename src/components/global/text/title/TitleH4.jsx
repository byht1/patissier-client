import React from 'react';

import { H4 } from './Title.styled';
import { propTypeText } from '../helpers';

export const TitleH4 = ({
  family = 'montserrat',
  weight = 600,
  size = 20,
  lh = 'big',
  children,
  ...props
}) => {
  return (
    <H4 family={family} weight={weight} size={size} lh={lh} {...props}>
      {children}
    </H4>
  );
};

TitleH4.propTypes = propTypeText;
