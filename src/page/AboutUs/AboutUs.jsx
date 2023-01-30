import React from 'react';

import { Greetings } from 'components/modules/AboutUs/Greetings';
import { WayToSuccess } from 'components/modules/AboutUs/WayToSuccess';
import { Stats } from 'components/modules/AboutUs/Stats';
import { Examples } from 'components/modules/AboutUs/Examples';

export default function AboutUs() {
  return (
    <>
      <Greetings />
      <WayToSuccess />
      <Stats />
      <Examples />
    </>
  );
}
