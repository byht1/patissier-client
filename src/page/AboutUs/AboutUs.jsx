import React from 'react';

import { Greetings } from 'components/modules/AboutUs/Greetings';
import { WayToSuccess } from 'components/modules/AboutUs/WayToSuccess';
import { Statistics } from 'components/modules/Statistics/Statistics';
import { Examples } from 'components/modules/AboutUs/Examples';
import { Header } from 'components/modules/Header/Header';

export default function AboutUs() {
  return (
    <>
      <Header />
      <Greetings ReadMoreLink={false} />
      <WayToSuccess />
      <Statistics />
      <Examples />
    </>
  );
}
