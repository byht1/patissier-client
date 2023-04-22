import React from 'react';

import { Greetings } from 'components/modules/AboutUs/Greetings';
import { WayToSuccess } from 'components/modules/AboutUs/WayToSuccess';
import { Statistics } from 'components/modules/Statistics/Statistics';
import { Examples } from 'components/modules/AboutUs/Examples';
import { BackLinkRef } from 'components/global/BackLink/BackLink';
export default function AboutUs() {
  return (
    <>
      <BackLinkRef />
      <Greetings
        ReadMoreLink={false}
        paddingTop={'60px'}
        paddingBottom={'200px'}
      />
      <Statistics />
      <WayToSuccess />
      <Examples />
    </>
  );
}
