import styled from 'styled-components';

export const ProductItem = styled.li`
  border: 1px solid var(--background);
  width: 360px;
  border-radius: 12px;
  &:hover,
  &:focus {
    border: 1px solid var(--accent-bg);
  }
`;

export const ImageWrap = styled.div`
  background-color: var(--background);
  position: relative;
  height: 340px;
  border-radius: 12px;
`;

export const ProductImg = styled.img`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  object-fit: cover;
  width: 357px;
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
  background-color: #262524;
  backdrop-filter: blur(2px);
  border-radius: ${p => p.theme.radii.round};
`;
