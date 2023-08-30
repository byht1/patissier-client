import React from 'react';
import { Container, Section } from 'components/global';
import { ConsistsItem } from './ConsistsItem';
import { ConsistsList } from './Consists.styled';

import { SectionTitle } from '../../common';

export const Consists = ({ details, type }) => {
  if (!details) return;
  const detailsArray = Object.values(details);

  return (
    <Section>
      <Container>
        <SectionTitle color="at">Що містить {type}?</SectionTitle>
        <ConsistsList>
          {detailsArray.map(({ name, description }) => (
            <ConsistsItem key={name} name={name} description={description} />
          ))}
        </ConsistsList>
      </Container>
    </Section>
  );
};
