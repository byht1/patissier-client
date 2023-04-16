import styled from 'styled-components';

export const IconsWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${p => p.theme.space[9]}px;
`;

export const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.size.socialIcon};
  height: ${p => p.theme.size.socialIcon};
  border-radius: ${p => p.theme.radii.round};

  & svg {
    fill: ${p => p.theme.colors.w};
    transition: fill 250ms linear;
  }

  &:hover svg,
  &:focus svg {
    fill: ${p => p.theme.colors.aBg};
  }
`;

export const InstaIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.size.socialIcon};
  height: ${p => p.theme.size.socialIcon};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.b};
  transition: var(--transition-bg);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.aBg};
  }
`;
