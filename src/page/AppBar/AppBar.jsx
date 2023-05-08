import { Header } from 'components/modules/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function AppBar() {
  return (
    <>
      <Header />
      <Suspense fallback={'Loader...'}>
        <Outlet />
      </Suspense>
    </>
  );
}
