import React from 'react';

import { Courses } from 'components/modules/Courses';
import { Reviews } from 'components/modules/Reviews';
import { Hero } from 'components/modules/hero/hero';
import { Statistics } from 'components/modules/Statistics/Statistics';

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <Courses />
      <Reviews />
    </>
  );
}
