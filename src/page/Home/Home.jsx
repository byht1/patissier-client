import React from 'react';

import { Courses } from 'components/modules/Courses';
import { Reviews } from 'components/modules/Reviews';

export default function Home() {
  return (
    <>
      <Courses />
      <Reviews />
    </>
  );
}
