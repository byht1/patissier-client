import React from 'react';

import { H2 } from './Title.styled';
import { propTypeText } from '../helpers';

export const TitleH2 = ({ children, ...props }) => {
  return <H2 {...props}>{children}</H2>;
};

TitleH2.propTypes = propTypeText;
