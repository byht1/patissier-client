import { ButtonsGhost } from 'components/global/button';
import { TitleH4 } from 'components/global/text';
import styled from 'styled-components';

export const CourseCard = styled.div`
  width: 360px;
  padding: 24px;

  background-color: var(--background);
  box-shadow: var(--shadow);
  border-radius: 12px;
  border: 1px solid transparent;

  transition: var(--transition-border-color);
  &:hover {
    border: 1px solid var(--accent-bg);
  }
`;
export const CardTitle = styled(TitleH4)`
  color: var(--accent-text);
  text-align: center;
  margin-bottom: 24px;
`;

export const ImageList = styled.ul`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const ImageWpar = styled.li`
  width: 150px;
  height: 160px;
  /* border-radius: 12px; */
  /* background-color: var(--accent-text); */
  background-color: var(--background);
`;
export const CourseImage = styled.img`
  display: block;
  width: 100%; // because of white stripe
  height: 102%; // because of white stripe
  object-fit: cover;
  border-radius: 12px;
`;

export const DetailsText = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 130%;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;
export const InfoItem = styled.li`
  display: flex;
  gap: 12px;
`;

export const InfoTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
`;
export const InfoText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
`;

export const Button = styled(ButtonsGhost)`
  padding: 16px 40px;
`;
