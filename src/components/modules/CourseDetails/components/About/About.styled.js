import styled from 'styled-components';
import { Container } from 'components/global';

export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrap = styled.div`
  width: 552px;
  height: 472px;
  margin-right: 60px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.btnBg};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 588px;
  padding-right: 78px;
`;

export const BakeryList = styled.ul``;
export const DrinkList = styled.ul``;
export const BonusList = styled.ul``;
