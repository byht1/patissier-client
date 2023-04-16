import styled from 'styled-components';

import { ReactComponent as checkBoxActiveSvg } from 'img/header/icons/checkBoxActive.svg';
import { ReactComponent as AppleSvg } from 'img/header/icons/Apple.svg';
import { ReactComponent as FacebookSvg } from 'img/header/icons/Facebook.svg';
import { ReactComponent as GoogleSvg } from 'img/header/icons/Google.svg';
import { ReactComponent as checkBoxDefaultSvg } from 'img/header/icons/checkBoxDefault.svg';

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

export const SignUpImg = styled.img`
  display: block;
  width: 552px;
`;

export const PrivacyPolicy = styled.span`
  display: flex;
  margin-top: 40px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 2;

  letter-spacing: -0.019em;

  color: ${p => p.theme.colors.w};
`;

export const CheckBoxDefaultIc = styled(checkBoxDefaultSvg)`
  margin-left: 5px;
  margin-right: 12px;
  cursor: pointer;
`;

export const CheckBoxActiveIc = styled(checkBoxActiveSvg)`
  margin-left: 5px;
  margin-right: 12px;
  cursor: pointer;
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

  &:disabled {
    background: #f9f9f9;
    cursor: not-allowed;
  }
`;

export const SubmitBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const SubmitAlreadyHaveAccount = styled.span`
  display: flex;
  flex-direction: row;

  margin-left: 60px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  color: ${p => p.theme.colors.t};
`;

export const LinkToLogin = styled.a`
  margin-left: 6px;

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

export const LoginIconsBox = styled.div`
  display: flex;
`;

export const AppleIc = styled(AppleSvg)`
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    path {
      fill: ${p => p.theme.colors.aBg};
    }
  }
`;

export const GoogleIc = styled(GoogleSvg)`
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    path {
      fill: ${p => p.theme.colors.aBg};
    }
  }
`;

export const FacebookIc = styled(FacebookSvg)`
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    path {
      fill: ${p => p.theme.colors.aBg};
    }
  }
`;
