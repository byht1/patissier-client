import React, { useRef } from 'react';

import { Container } from 'components/global/Container';
import { BackLink } from './BackLink.styled';
import { useLocation } from 'react-router-dom';

export const BackLinkRef = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  return (
    <Container pt={60}>
      <BackLink to={backLinkRef.current}>назад</BackLink>
    </Container>
  );
};
