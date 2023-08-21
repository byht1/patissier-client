import React from 'react';

import { Hero } from 'components/modules/Hero';
import { Statistics } from 'components/modules/Statistics/Statistics';
import { Greetings } from 'components/modules/AboutUs/Greetings';
import { CoursesSection as Courses } from 'components/modules/Courses/CoursesSection';
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
