import React, { useRef } from 'react';

import { Container } from 'components/global/Container';
import { BackLink, Svg } from './BackLink.styled';
import { useLocation } from 'react-router-dom';

export const BackLinkRef = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  return (
    <Container pt={60}>
      <BackLink to={backLinkRef.current}>
        <Svg
          width="34"
          height="14"
          fill="none"
          viewBox="0 0 34 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34 7L1 7M1 7L7.5 13.5M1 7L7.5 0.499998" stroke="#B5B5B5" />
        </Svg>
        назад
      </BackLink>
    </Container>
  );
};
