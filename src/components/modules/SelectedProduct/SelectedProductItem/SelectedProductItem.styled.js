import styled from 'styled-components';

export const ProductItem = styled.li`
  background-color: var(--background);
  width: 360px;
  border-radius: 12px;
`;

export const ImageWrap = styled.div`
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
