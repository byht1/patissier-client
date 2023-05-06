import styled from 'styled-components';

import { ReactComponent as EyeHiddenSvg } from '../../../../img/header/icons/EyeHidden.svg';
import { ReactComponent as EyeSvg } from '../../../../img/header/icons/Eye.svg';

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

export const SignInImg = styled.img`
  display: block;
  width: 552px;
`;

export const Cover = styled.div`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
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

export const ResendLink = styled.span`
  margin-left: 40px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${p => p.theme.colors.aBg};

  &:focus,
  &:hover {
    color: ${p => p.theme.colors.ah};
  }

  cursor: pointer;
`;

export const PasswordStrictParameters = styled.ul`
  list-style-type: disc;
  margin-top: 40px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  color: #edf0f3;
`;

export const Parameter = styled.li`
  margin-left: 32px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  &:first-child {
    margin-top: 14px;
  }
`;

export const ParameterContent = styled.span``;

export const EyeHiddenIc = styled(EyeHiddenSvg)`
  z-index: 3333;
  position: absolute;
  top: 39px;
  right: 14px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  & path {
    stroke: ${p => p.theme.colors.t};
  }
`;

export const EyeIc = styled(EyeSvg)`
  z-index: 3333;
  position: absolute;
  top: 39px;
  right: 14px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  & path {
    stroke: ${p => p.theme.colors.t};
  }
`;
