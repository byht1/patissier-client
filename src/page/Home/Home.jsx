import React from 'react';

import { Statistics } from 'components/modules/Statistics/Statistics';
import { Greetings } from 'components/modules/AboutUs/Greetings';
import { CoursesSection as Courses } from 'components/modules/Courses/CoursesSection';
import { Reviews } from 'components/modules/Reviews';
import { Insta } from 'components/modules/Insta';
import { Footer } from 'components/modules/Footer';
import { Cake } from 'components/modules/Cake';


export default function Home() {
  return (
    <>
      <Cake />
      <Statistics />
      <Greetings ReadMoreLink={true} />
      <Courses />
      <Reviews title={'Відгуки'} />
      <Insta />
      <Footer />
    </>
  );
}
