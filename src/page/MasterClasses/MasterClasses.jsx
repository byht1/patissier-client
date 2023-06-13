import React from 'react';
import { BackLinkRef } from 'components/global/BackLink/BackLink';
import { Reviews } from 'components/modules/Reviews/Review';
import {MainMK} from '../../components/modules/MasterClass/AboutMK/MainMK';
import {DetailsMK} from '../../components/modules/MasterClass/DetailsMK/DetailsMK';
import {StartMK} from '../../components/modules/MasterClass/StartMK/StartMK';
import {ConsistsMK} from '../../components/modules/MasterClass/ConsistsMK/ConsistsMK';
import dataProgramMK from './DATA/data-programMK';


export default function MasterClasses() {
  return (
  <>
    <BackLinkRef /> 
    <MainMK/>
    <ConsistsMK/>
    <DetailsMK stageList={dataProgramMK}/>
    <StartMK/>
    <Reviews title={'Відгуки'}/>
     
   
    </>
    )
}
