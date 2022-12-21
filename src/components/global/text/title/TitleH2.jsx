import React from 'react';

import { H2 } from './Title.styled';
import { propTypeText } from '../helpers';

export const TitleH2 = ({
  family = 'marianna',
  weight = 400,
  size = 84,
  lh = 'normal',
  children,
  ...props
}) => {
  return (
    <H2 family={family} weight={weight} size={size} lh={lh} {...props}>
      {children}
    </H2>
  );
};

TitleH2.propTypes = propTypeText;
