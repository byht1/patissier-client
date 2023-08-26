import styled from 'styled-components';
import { Button, devices } from 'components/global';

export const DetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${devices.desktop} {
    flex-direction: row-reverse;
    gap: 24px;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: ${p => p.theme.shadows.s};

  ${devices.desktop} {
    width: 588px;
    height: 512px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  border-radius: 12px;
  background-color: ${p => p.theme.colors.bg};
  box-shadow: ${p => p.theme.shadows.s};

  ${devices.desktop} {
    padding: 40px 60px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 20px;
  border-radius: 12px;
  background-color: ${p => p.theme.colors.bg};
  box-shadow: ${p => p.theme.shadows.s};

  ${devices.desktop} {
    gap: 20px;
    padding: 40px 60px;
  }
`;

export const ProgramList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  
  ${devices.desktop} {
    align-items: center;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  ${devices.desktop} {
    flex-direction: row;
    gap: 12px;
  }
`;

export const ButtonPay = styled(Button)`
  padding: 18px 56.5px;
`;
