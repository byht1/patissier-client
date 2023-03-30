import React from 'react';
import { Header } from 'components/modules/Header/Header';
import { BackLinkRef } from 'components/global/BackLink/BackLink';
import { Reviews } from 'components/modules/Reviews/Review';
import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import {MainMK} from '../../components/modules/MasterClass/AboutMK/MainMK';
import {DetailsMK} from '../../components/modules/MasterClass/DetailsMK/DetailsMK';


import dataBakery from './DATA/data-bakery';
import dataDrink from './DATA/data-drink';
import dataBonus from './DATA/data-bonus';
import dataProgramMK from './DATA/data-programMK';

export default function MasterClasses() {
  return (
  <>
    <Header />
    <BackLinkRef />
    <Container pt={58} pb={200}>

      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
      
        <MainMK bakeryList={dataBakery} drinkList={dataDrink} bonusList={dataBonus}/>
        <DetailsMK stageList={dataProgramMK}/>
        <Reviews title={'Що говорять учні?'}/>
      </Box>
    </Container>
    </>
    )
}
