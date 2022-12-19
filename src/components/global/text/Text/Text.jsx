import React from 'react';
import PropTypes from 'prop-types';
import { TextBox } from './Text.styled';

export const Text = ({
  family = 'montserrat',
  weight = 400,
  size = 14,
  lh = 'normal',
  textAlign = null,
  mt = null,
  mb = null,
  ml = null,
  mr = null,
  m = null,
  color = null,
  children,
}) => {
  return (
    <TextBox
      f={family}
      w={weight}
      s={size}
      lh={lh}
      ta={textAlign}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      m={m}
      c={color}
    >
      {children}
    </TextBox>
  );
};

// type Props = {
//   family?: 'blinker' | 'roboto',
//   weight?: 400 | 600 | 700,
//   size?: 12 | 14 | 16 | 20 | 32 | 64,
//   lh?: number,
//   mt?: number,
//   mb?: number,
//   color?: string,

//   children: string | JSX.Element,
// };

//  isRequired

Text.propTypes = {
  family: PropTypes.oneOf(['montserrat', 'marianna']),
  weight: PropTypes.oneOf([400, 500, 600, 700]),
  size: PropTypes.oneOf([14, 16, 20, 36, 82, 96]),
  lh: PropTypes.oneOf(['big', 'body', 'normal', 'heading']),
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  m: PropTypes.string,
  color: PropTypes.string,
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  //   PropTypes.string,
  // ]).isRequired,
  children: PropTypes.string.isRequired,
};
