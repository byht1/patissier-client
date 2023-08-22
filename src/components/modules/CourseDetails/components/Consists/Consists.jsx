import React from 'react';
import { TitleH3 } from 'components/global/text';
import { Container } from 'components/global/Container';
import { ConsistsItem } from './ConsistsItem';
import { ConsistsList } from './Consists.styled';
import { Section } from 'components/global/Section';

export const Consists = ({ details, type }) => {
  if (!details) return;
  const detailsArray = Object.values(details);

  return (
    <Section>
      <Container>
        <TitleH3 color="at">Що містить {type}?</TitleH3>
        <ConsistsList>
          {detailsArray.map(({ name, description }) => (
            <ConsistsItem key={name} name={name} description={description} />
          ))}
        </ConsistsList>
      </Container>
    </Section>
  );
};
