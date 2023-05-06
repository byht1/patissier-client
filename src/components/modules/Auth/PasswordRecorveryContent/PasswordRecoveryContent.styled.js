import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Marianna';
  font-style: normal;
  font-weight: 400;
  font-size: 84px;
  line-height: 1;
  letter-spacing: 0.04em;
  margin: 60px 0px;

  color: ${p => p.theme.colors.aBg};
`;

export const Cover = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
`;

export const SignInImg = styled.img`
  display: block;
  width: 552px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 486px;
`;

export const Label = styled.label`
  font-weight: 700;
  margin-top: 40px;

  position: relative;

  display: flex;
  flex-direction: column;

  font-weight: 700;
`;

export const Input = styled.input`
  margin-top: 8px;

  width: 100%;
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

export const Button = styled.button`
  align-items: center;
  margin-top: 60px;

  width: 216px;
  height: 52px;

  background: ${p => p.theme.colors.aBg};
  border-radius: 12px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  color: ${p => p.theme.colors.bg};

  &:focus,
  &:hover {
    background: ${p => p.theme.colors.ah};
  }
`;

export const SubmitBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const Box = styled.div`
  display: flex;
`;

export const Hint = styled.p`
  width: 486px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  color: ${p => p.theme.colors.t};
`;
