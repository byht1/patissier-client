import styled from 'styled-components';
import qrCode from 'img/Insta/qr-code.svg';

export const InstaCard = styled.li`
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.s};
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid transparent;

  transition: var(--transition-border-color);
  &:hover {
    border: 1px solid ${p => p.theme.colors.aBg};
  }

  &:first-child {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 240px;
      height: 240px;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.05);
      z-index: 5;
      backdrop-filter: blur(5px);
    }

    &::after {
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
  }
`;
