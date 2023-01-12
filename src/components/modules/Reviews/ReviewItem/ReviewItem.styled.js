import styled from 'styled-components';

export const ReviewWrap = styled.li`
  background-color: ${p => p.theme.colors.bg};
  box-shadow: ${p => p.theme.shadows.s};
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid transparent;
  padding: 20px 20px 38px 20px;
  max-height: 266px;
  overflow-y: auto;
`;

export const ImgWrap = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
