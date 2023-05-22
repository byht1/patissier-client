import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { BackLink, Svg } from './BackLink.styled';
import { Container } from '../Container';
import { Box } from '../Box';

export const BackLinkRef = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  return (
    <Container>
      <Box pt={'60px'}>
        <BackLink to={backLinkRef.current}>
          <Svg
            width="34"
            height="14"
            fill="none"
            viewBox="0 0 34 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M34 7L1 7M1 7L7.5 13.5M1 7L7.5 0.499998" />
          </Svg>
          назад
        </BackLink>
      </Box>
    </Container>
  );
};
