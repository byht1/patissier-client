import React from 'react';

import { H3 } from './Title.styled';
import { propTypeText } from '../helpers';

export const TitleH3 = ({
  family = 'montserrat',
  weight = 500,
  size = 36,
  lh = 'body',
  children,
  ...props
}) => {
  return (
    <H3 family={family} weight={weight} size={size} lh={lh} {...props}>
      {children}
    </H3>
  );
};

TitleH3.propTypes = propTypeText;
