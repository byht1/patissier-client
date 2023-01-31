import styled from 'styled-components';

export const ImgWrap = styled.div`
  width: 282px;
  height: 396px;
  box-shadow: 0px -10px 246px -76px rgba(199, 103, 56, 0.37);
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const ExampleFoto = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 101%;
`;
