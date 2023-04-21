import React from 'react';
import { ReadMore } from './ReadMoreLink.styled';
import PropTypes from 'prop-types';
import { marginType } from 'helpers';

export const ReadMoreLink = ({children, ...props }) => {
  return <ReadMore {...props}>{children}</ReadMore>;
};

ReadMoreLink.propTypes = {
  mt: marginType,
  mb: marginType,
  ml: marginType,
  mr: marginType,
  m: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
}

