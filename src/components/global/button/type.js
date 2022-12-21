import { marginType } from 'helpers';
import PropTypes from 'prop-types';

export const propTypeButton = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
};
