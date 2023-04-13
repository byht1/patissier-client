import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Arrow from 'img/basket/arrow.svg';

export const OrderWrap = styled.div`
  position: sticky;
  top: 60px;
  align-self: flex-start;
  margin-top: 60px;

  width: 342px;
  display: flex;
  padding: 32px 24px;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.aBg};
  box-shadow: ${p => p.theme.shadows.s};
  border-radius: 12px;
`;

// your order

export const YourOrderTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.normal};
  color: ${p => p.theme.colors.wt};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.big};
  text-align: center;
  margin-bottom: 16px;
`;

export const OrderText = styled.p`
  font-size: ${p => p.theme.fontSizes.min};
  color: ${p => p.theme.colors.t};
  line-height: 1.42;
`;

export const OrderAmount = styled.span`
  font-size: ${p => p.theme.fontSizes.normal};
  color: ${p => p.theme.colors.wt};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.big};
`;

// sertificate

export const SertWrap = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid #5c5c5d;
`;

export const SertBtn = styled.button`
  background-color: transparent;
  display: block;

  margin: 0 auto;
`;

export const SertBtnText = styled.span`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.montserrat};
  font-size: ${p => p.theme.fontSizes.normalMin};
  color: ${p => p.theme.colors.wt};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.big};
  text-decoration: underline;

  &::after {
    content: '';
    display: inline-block;
    margin-left: 2px;
    background-image: url(${Arrow});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 24px;
    height: 24px;
  }
`;

// total cost

export const TotalCoastWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const TotalCoastText = styled.p`
  font-size: ${p => p.theme.fontSizes.normalMin};
  color: ${p => p.theme.colors.t};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const TotalCoastSum = styled.span`
  font-size: ${p => p.theme.fontSizes.normalBig};
  color: ${p => p.theme.colors.wt};
  font-weight: ${p => p.theme.fontWeights.average};
  line-height: ${p => p.theme.lineHeights.body};
`;

// link

export const ShopLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.normalMin};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.at};
  font-weight: ${p => p.theme.fontWeights.bold};
  display: inline-block;
  margin: 0 auto;
  transition: var(--transition-color);

  &:hover {
    color: ${p => p.theme.colors.ah};
  }
  &:focus {
    color: ${p => p.theme.colors.ah};
  }
`;
