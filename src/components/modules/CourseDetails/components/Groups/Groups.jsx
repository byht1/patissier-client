import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Section, Text } from 'components/global';

import { SectionTitle } from '../../common';
import { Container } from './Groups.styled';
import { GroupsNavigation } from './GroupsNavigation';

export const Groups = ({ groups }) => {
  const isGroups = groups?.length > 0 ? true : false;

  return (
    <Section>
      <Container>
        <SectionTitle color="at">Старт навчання</SectionTitle>
        {isGroups && (
            <GroupsNavigation />
        )}
        {!isGroups && (
          <Text size={20} lh="body" textAlign="center">
            Поки що немає груп для навчання...
          </Text>
        )}

        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </Container>
    </Section>
  );
};
