import styled from 'styled-components';
import { ButtonsGhost } from 'components/global/button';

export const Buttons = styled(ButtonsGhost)`
padding: 18px 56px;
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