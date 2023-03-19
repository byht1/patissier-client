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

  color: #ff852d;
`;

export const SignInImg = styled.img`
  display: block;
  width: 552px;
`;

export const RegistryBlockCover = styled.div`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;

export const Label = styled.label`
  margin-top: 40px;

  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-top: 8px;

  width: 528px;
  height: 44px;
  padding: 12px 14px;
  border-radius: 12px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;

  color: #070a23;
  border: 1px solid #ff852d;

  outline: none;
`;
