import styled from 'styled-components';

export const InstaList = styled.ul`
  display: flex;
  gap: ${p => `${p.theme.space[16]}px`};
`;

export const SocialLink = styled.a`
  display: inline-flex;
  gap: ${p => `${p.theme.space[5]}px`};
  color: ${p => `${p.theme.colors.wt}`};

  :hover,
  :focus {
    color: ${p => `${p.theme.colors.at}`};
  }

  :hover span,
  :focus span {
    background-color: ${p => `${p.theme.colors.aBg}`};
  }
`;

export const SocialIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => `${p.theme.size.socialIcon}`};
  height: ${p => `${p.theme.size.socialIcon}`};
  border-radius: ${p => `${p.theme.radii.round}`};
  background-color: ${p => `${p.theme.colors.w}`};
  color: ${p => `${p.theme.colors.b}`};
`;
