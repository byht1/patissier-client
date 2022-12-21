import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function AppBar() {
  return (
    <>
      <div>AppBar</div>{' '}
      <Suspense fallback={'Loader...'}>
        <Outlet />
      </Suspense>
    </>
  );
}
