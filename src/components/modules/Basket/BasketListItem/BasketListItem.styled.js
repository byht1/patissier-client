import styled from 'styled-components';

export const ItemWrap = styled.div`
  display: flex;
  width: 798px;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const ImgWrap = styled.div`
  width: 408px;
  height: 270px;
  margin-right: 60px;
  box-shadow: 0px 0px 209px -30px rgba(199, 103, 56, 0.2);
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const ItemPhoto = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
`;

// Info component

export const ItemInfoWrap = styled.div`
  flex-grow: 1;
`;

export const ProductTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.normal};
  line-height: ${p => p.theme.lineHeights.big};
  color: ${p => p.theme.colors.at};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  margin-bottom: 32px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.normalMin};
  color: ${p => p.theme.colors.wt};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: #1c1c1e;
`;

export const PriceValue = styled.p`
  font-size: ${p => p.theme.fontSizes.normal};
  color: ${p => p.theme.colors.wt};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.big};
`;

// counter

export const CounterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 120px;
  height: 40px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: #1c1c1e;
`;

export const CounterBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 24px;
  height: 24px;
  font-size: ${p => p.theme.fontSizes.normal};
  color: ${p => p.theme.colors.wt};
  /* font-weight: ${p => p.theme.fontWeights.semiBold}; */
  line-height: ${p => p.theme.lineHeights.big};
  transition: var(--transition-color);

  &:hover {
    color: ${p => p.theme.colors.at};
  }

  &:focus {
    color: ${p => p.theme.colors.at};
  }
`;

export const CounterValue = styled.span`
  font-size: ${p => p.theme.fontSizes.normal};
  color: ${p => p.theme.colors.wt};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.big};
`;

// ----

export const DelBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: ${p => p.theme.colors.t};
  transition: var(--transition-color);

  &:hover {
    color: ${p => p.theme.colors.at};
  }

  &:focus {
    color: ${p => p.theme.colors.at};
  }
`;

export const Svg = styled.svg`
  stroke: currentColor;
`;

export const TotalPrice = styled.span`
  font-size: ${p => p.theme.fontSizes.normalBig};
  color: ${p => p.theme.colors.wt};
  font-weight: ${p => p.theme.fontWeights.average};
  line-height: ${p => p.theme.lineHeights.body};
`;
