import React from 'react';
import PropTypes from 'prop-types';

import { ReadMore } from './ReadMoreLink.styled';

export const ReadMoreLink = ({ children, ...props }) => {
  return <ReadMore {...props}>{children}</ReadMore>;
};

ReadMoreLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};
