import styled from 'styled-components';
import { TextBox } from 'components/global/text';

export const SuccessSection = styled.section`
  display: flex;
  padding-top: 200px;
  padding-bottom: 100px;
  gap: 60px;
`;

export const WayList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const ImgWrap = styled.div`
  width: 588px;
  height: 600px;
  box-shadow: 0px -10px 246px -76px rgba(199, 103, 56, 0.37);
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const WayPhoto = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 101%;
`;

export const Icon = styled.img`
  display: block;
  width: 72px;
  height: 72px;
`;

export const WayText = styled(TextBox)`
  font-size: ${p => p.theme.fontSizes.normalMin};
  line-height: ${p => p.theme.lineHeights.big};
  width: 450px;
`;
