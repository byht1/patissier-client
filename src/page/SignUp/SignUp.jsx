import React from 'react';
import { SignUpComponent } from 'components/modules/Header/SignUp/SignUpComponent';
import { BackLinkRef } from 'components/global/BackLink/BackLink';

export default function SignUp() {
  return (
    <>
      <BackLinkRef />
      <SignUpComponent />
    </>
  );
}
