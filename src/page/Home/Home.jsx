import React from 'react';

import { Hero } from 'components/modules/hero/hero';
import { Statistics } from 'components/modules/Statistics/Statistics';
import { Greetings } from 'components/modules/AboutUs/Greetings';
import { Courses } from 'components/modules/Courses';
import { Reviews } from 'components/modules/Reviews';
import { Insta } from 'components/modules/Insta';
import { Footer } from 'components/modules/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <Greetings ReadMoreLink={true} />
      <Courses />
      <Reviews title={'Відгуки'} />
      <Insta />
      <Footer />
    </>
  );
}
