import { Text, TitleH3 } from 'components/global/text';
import { Container } from 'components/global/Container';
import { Section } from 'components/global/Section';

import { GroupsNav } from './GroupsNavigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Groups = ({ groups }) => {
  const isGroups = groups?.length > 0 ? true : false;

  return (
    <Section>
      <Container>
        <TitleH3 color="at">Старт навчання</TitleH3>
        {isGroups && <GroupsNav />}
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
