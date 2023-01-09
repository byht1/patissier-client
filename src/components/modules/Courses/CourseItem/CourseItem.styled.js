import styled from 'styled-components';

export const CourseCard = styled.div`
  width: 360px;
  padding: 24px;

  background-color: ${p => p.theme.colors.bg};
  box-shadow: ${p => p.theme.shadows.s};
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid transparent;

  transition: var(--transition-border-color);
  &:hover {
    border: 1px solid ${p => p.theme.colors.aBg};
    button {
      background-color: ${p => p.theme.colors.aBg};
      color: ${p => p.theme.colors.bg};
    }
  }
`;

export const ImageList = styled.ul`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const ImageWpar = styled.li`
  width: 150px;
  height: 160px;
`;

export const CourseImage = styled.img`
  display: block;
  width: 100%;
  height: 102%;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.panelBg};
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


