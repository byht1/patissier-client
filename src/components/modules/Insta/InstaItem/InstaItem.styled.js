import styled from 'styled-components';
import qrCode from '../../../../img/Insta/qr-code.svg';

export const InstaCard = styled.li`
  position: relative;
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.s};
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid transparent;

  transition: var(--transition-border-color);
  &:hover {
    border: 1px solid ${p => p.theme.colors.aBg};
  }

  &:first-child::after {
    content: '';
    background: url(${qrCode}) center/100% no-repeat;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 240px;
    height: 240px;
    z-index: 2;
    color: #fff;
  }
`;
