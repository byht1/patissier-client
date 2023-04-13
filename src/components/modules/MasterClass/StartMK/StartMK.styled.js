import styled from 'styled-components';
import { ButtonsGhost } from 'components/global/button';

export const Buttons = styled(ButtonsGhost)`
width: 180px;
height: 58px;
border: ${p => p.theme.borders.none};
color: ${p => p.theme.colors.wt};
background-color: ${p => p.theme.colors.btnBg};
 
&:hover,
&:focus{
  border-bottom: 1.5px solid ${p => p.theme.colors.aBg};
  background-color: ${p => p.theme.colors.btnBg};
  color: ${p => p.theme.colors.aBg};
}
`;

export const ButtonWrap = styled.div`
display: flex;
gap: 24px;
margin-bottom: 60px;
`;
export const SwiperWrap = styled.div`
position: relative;
// padding: 50px 0;
// box-shadow: 0px 0px 209px -30px rgba(199, 103, 56, 0.2);
`;