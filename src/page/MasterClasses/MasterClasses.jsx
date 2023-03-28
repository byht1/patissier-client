import React from 'react';
import { Header } from 'components/modules/Header/Header';
import { BackLinkRef } from 'components/global/BackLink/BackLink';
import { Reviews } from 'components/modules/Reviews/Review';
import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import {MainMK} from './MainMK/MainMK';
import {DetailsMK} from './DetailsMK/DetailsMK';
import { TitleH2, Text } from 'components/global/text';

import dataBakery from './DATA/data-bakery';
import dataDrink from './DATA/data-drink';
import dataBonus from './DATA/data-bonus';

export default function MasterClasses() {
  return (
  <>
    <Header />
    <BackLinkRef />
    <Container pt={58} pb={200}>

      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <TitleH2 mb={52} color="at">
            Різдвяна випічка
        </TitleH2>
        <Text color="t" mb={56} width={558} textAlign="center" lh='big'>Пройдіть майстер-клас та навчіться готувати неймовірно смачний різдвяний штолен</Text>
        <MainMK bakeryList={dataBakery} drinkList={dataDrink} bonusList={dataBonus}/>
        <DetailsMK/>
        <Reviews />
      </Box>
    </Container>
    </>
    )
}
