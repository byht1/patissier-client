import styled from 'styled-components';
import {  Button } from 'components/global/button';

export const DetailsSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

// export const Buttons = styled(ButtonsGhost)`
// padding: 18px 56px;
// border: ${p => p.theme.borders.none};
// color: ${p => p.theme.colors.wt};
// background-color: ${p => p.theme.colors.btnBg};
// border-bottom: 1.5px solid transparent;
// transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);

// &:hover,
// &:focus{
//   border-bottom: 1.5px solid ${p => p.theme.colors.aBg};
//   background-color: ${p => p.theme.colors.btnBg};
//   color: ${p => p.theme.colors.aBg};
// }
// `;
export const ButtonPay = styled(Button)`
padding: 18px 56.5px;

`;
// export const ButtonWrap = styled.div`
// display: flex;
// gap: 24px;
// margin-bottom: 60px;
// `;
export const DetailsBlock = styled.div`
display: flex;
`;
export const ImageBlock = styled.div`
width: 588px;
height: 512px;
overflow: hidden;
box-shadow: ${p => p.theme.shadows.s};


`;
export const DetailsImage = styled.img`
display: block;
width: 100%;
object-fit: cover;
border-radius: 12px;
`;
export const Block = styled.div`
display: flex;
flex-direction: column;
gap: 24px;

margin-right: 24px;
`;
export const DetailsAbout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px 60px;
width: 588px;
height: 216px;
border-radius: 12px;
background-color: ${p => p.theme.colors.bg};
box-shadow: ${p => p.theme.shadows.s};
`;
export const DetailsAboutPrice = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px 20px;
width: 588px;
height: 272px;
border-radius: 12px;
background-color: ${p => p.theme.colors.bg};
box-shadow: ${p => p.theme.shadows.s};
`;
export const ProgramList = styled.ul`
display: flex;
flex-direction: column;
gap: 12px;
align-items: center;
`