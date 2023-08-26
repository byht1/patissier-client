import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//
import {
  Section, Text,
  // Container
} from 'components/global';

import { GroupsNavigation } from './GroupsNavigation';

import { SectionTitle } from '../../common';
import { Container, GroupsNavContainer } from './Groups.styled';

export const Groups = ({ groups }) => {
  const isGroups = groups?.length > 0 ? true : false;

  return (
    <Section>
      <Container>
        <SectionTitle color="at">Старт навчання</SectionTitle>
        {isGroups && (
          <GroupsNavContainer>
            <GroupsNavigation />
          </GroupsNavContainer>
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
