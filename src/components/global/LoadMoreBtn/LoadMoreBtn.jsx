import React from 'react';
import PropTypes from 'prop-types';

import { LoadMore } from './LoadMoreBtn.styled';

export const LoadMoreButton = ({ children, ...props }) => {
  return <LoadMore {...props}>{children}</LoadMore>;
};

LoadMoreButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};
