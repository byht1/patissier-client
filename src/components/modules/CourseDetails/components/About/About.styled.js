import styled from 'styled-components';
import { Container, Text as TextBase, TitleH1, devices } from 'components/global';

export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(TitleH1)`
  margin-bottom: 20px;
  ${devices.desktop} {
    margin-bottom: 32px;
  }
`;

export const TopText = styled(TextBase)`
  margin-bottom: 40px;
  max-width: 558px;
  ${devices.desktop} {
    margin-bottom: 100px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  ${devices.desktop} {
    flex-direction: row;
    gap: 60px;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: auto;

  border-radius: 12px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.btnBg};

  ${devices.desktop} {
    width: 552px;
    height: 472px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 588px;

  ${devices.desktop} {
    padding-right: 78px;
  }
  
  p {
    margin-bottom: 20px;
  }
`;
