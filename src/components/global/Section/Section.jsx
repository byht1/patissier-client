import React from 'react';
import PropTypes from 'prop-types';
import { SectionBox } from './Section.styled';

export const Section = ({ children }) => {
  return <SectionBox>{children}</SectionBox>;
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
