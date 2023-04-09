import styled from 'styled-components';

export const ProductItem = styled.li`
  background-color: var(--background);
  width: 360px;
  border-radius: 12px;
`;

export const ImageWrap = styled.div`
  position: relative;
  height: 340px;
  border-radius: 12px;
`;

export const ProductImg = styled.img`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  object-fit: cover;
  width: 360px;
  height: 340px;
`;

export const ProductPrice = styled.span`
  font-weight: 600;
`;

export const AddToFavBtn = styled('button')`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${p => p.theme.colors.bg};
  backdrop-filter: blur(2px);
  border-radius: ${p => p.theme.radii.round};
`;
