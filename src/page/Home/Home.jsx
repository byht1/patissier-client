import React from 'react';
import { Courses } from 'components/modules/Courses';
import { Reviews } from 'components/modules/Reviews';
import { Insta } from 'components/modules/Insta';

export default function Home() {
  return (
    <>
      <Courses />
      <Reviews />
      <Insta />
    </>
  );
}
