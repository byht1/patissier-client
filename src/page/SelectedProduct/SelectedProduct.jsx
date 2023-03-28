import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SelectedProduct() {
  return (
    <>
      <div>SelectedProduct</div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
