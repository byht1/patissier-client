import React from 'react';

import { Greetings } from 'components/modules/AboutUs/Greetings';
import { WayToSuccess } from 'components/modules/AboutUs/WayToSuccess';
import { Stats } from 'components/modules/AboutUs/Stats';

export default function AboutUs() {
  return (
    <>
      <Greetings />
      <WayToSuccess />
      <Stats />
    </>
  );
}
