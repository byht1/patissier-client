import styled from 'styled-components';
import { ButtonsGhost } from 'components/global/button';

export const StartMKSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Buttons = styled(ButtonsGhost)`
width: 180px;
height: 58px;
border: ${p => p.theme.borders.none};
color: ${p => p.theme.colors.wt};
background-color: ${p => p.theme.colors.btnBg};
border-bottom: 1.5px solid transparent;
transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);

&:hover,
&:focus{
  border-bottom: 1.5px solid ${p => p.theme.colors.aBg};
  background-color: ${p => p.theme.colors.btnBg};
  color: ${p => p.theme.colors.aBg};
  font-weight: 700;
}
&.active {
  border-bottom: 1.5px solid ${p => p.theme.colors.aBg};
  background-color: ${p => p.theme.colors.btnBg};
  color: ${p => p.theme.colors.aBg};
  font-weight: 700;
}
`;

export const ButtonWrap = styled.div`
display: flex;
gap: 24px;
margin-bottom: 60px;
`;
export const SwiperWrap = styled.div`
position: relative;
`;