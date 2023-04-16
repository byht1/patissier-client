import styled from 'styled-components';

export const Input = styled.input`
  margin-top: 8px;

  width: 486px;
  height: 44px;
  padding: 12px 14px;
  border-radius: 12px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;

  color: #070a23;
  border: 1px solid ${p => p.theme.colors.aBg};

  outline: none;
`;

export const Label = styled.label`
  margin-bottom: ${p => (p.mb ? p.mb : 0)}px;
  margin-top: ${p => (p.mt ? p.mt : 0)}px;

  position: relative;

  display: flex;
  flex-direction: column;

  font-weight: 700;
`;

export const ErrorMsg = styled.p`
  position: absolute;

  bottom: -20px;
  left: 0px;
  /* color: ${p => p.theme.colors.da}; */
  color: red;
  margin-top: 2px;
  padding-left: 11px;
  /* font-size: ${p => p.theme.fontSizes.min}; */
  font-size: 10px;
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const IconBox = styled.div`
  display: flex;
  position: absolute;
  right: 16px;
  bottom: 22px;
  transform: translateY(50%);
  /*@media (min-width: 768px) {
    right: 32px;
    top: 19px;
  }*/
`;
