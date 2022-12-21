import React from 'react';
// import PropTypes from 'prop-types';

import { H1 } from './Title.styled';
import { propTypeText } from '../helpers';

export const TitleH1 = ({
  family = 'marianna',
  weight = 400,
  size = 96,
  lh = 'normal',
  children,
  ...props
}) => {
  return (
    <H1 family={family} weight={weight} size={size} lh={lh} {...props}>
      {children}
    </H1>
  );
};

TitleH1.propTypes = propTypeText;
