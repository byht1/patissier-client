import styled from 'styled-components';

export const ReviewWrap = styled.li`
  background-color: ${p => p.theme.colors.bg};
  box-shadow: ${p => p.theme.shadows.s};
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid transparent;
  padding: 20px 20px 38px 20px;
  width: 282px;
  height: 269px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.at};
    border-radius: 5px;
  }
`;

export const ImgWrap = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
`;

export const ReviewData = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 80px;
`;

export const ReviewName = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: 8px;
`;

export const ReviewComment = styled.p`
  font-size: ${p => p.theme.fontSizes.min};
  line-height: ${p => p.theme.lineHeights.body};
`;
