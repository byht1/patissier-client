import React from 'react';

import { ButtonsGhostBox } from './Button.styled';
import { propTypeButton } from './type';

export const ButtonsGhost = ({ children, ...props }) => {
  return <ButtonsGhostBox {...props}>{children}</ButtonsGhostBox>;
};

ButtonsGhost.propTypes = propTypeButton;
