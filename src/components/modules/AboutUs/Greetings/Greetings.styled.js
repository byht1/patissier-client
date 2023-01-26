import styled from 'styled-components';

export const ImgWrap = styled.div`
  width: 552px;
  height: 424px;
  margin-right: 60px;
  box-shadow: 0px -10px 246px -76px rgba(199, 103, 56, 0.37);
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const OwnerFoto = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 101%;
`;

export const SignFoto = styled.img`
  position: absolute;
  bottom: -30%;
  right: -15%;
  display: block;
  width: 280px;
  height: 204px;
`;
