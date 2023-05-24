import React from 'react';

import { H3 } from './Title.styled';
import { propTypeText } from '../helpers';

export const TitleH3 = ({ children, ...props }) => {
  return <H3 {...props}>{children}</H3>;
};

TitleH3.propTypes = propTypeText;
