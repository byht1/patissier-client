import { marginType, widthType } from 'helpers';
import PropTypes from 'prop-types';

export const weights = Object.freeze({
  400: 'normal',
  500: 'average',
  600: 'semiBold',
  700: 'bold',
});

export const sizes = Object.freeze({
  14: 'min',
  16: 'normalMin',
  20: 'normal',
  36: 'normalBig',
  84: 'normalMax',
  96: 'max',
});

const fontsEnum = ['montserrat', 'marianna'];
const weightEnum = [400, 500, 600, 700];
const sizeEnum = [14, 16, 20, 36, 84, 96];
const lineHeightEnum = ['big', 'body', 'normal', 'heading'];
const textAlignEnum = ['center', 'left', 'right'];
const colorsEnum = [
  'aBg',
  'at',
  'ah',
  'bg',
  'btnBg',
  'panelBg',
  't',
  'wt',
  'w',
  'overlay',
  'good',
  'error',
];

export const propTypeText = {
  family: PropTypes.oneOf(fontsEnum),
  weight: PropTypes.oneOf(weightEnum),
  size: PropTypes.oneOf(sizeEnum),
  lh: PropTypes.oneOf(lineHeightEnum),
  textAlign: PropTypes.oneOf(textAlignEnum),
  mt: marginType,
  mb: marginType,
  ml: marginType,
  mr: marginType,
  m: PropTypes.string,
  width: widthType,
  color: PropTypes.oneOf(colorsEnum),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};