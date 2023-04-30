import React from 'react';
import { BackLinkRef } from 'components/global/BackLink/BackLink';
import { SignUpComponent } from 'components/modules/Auth/SignUp/SignUpComponent';

export default function SignUp() {
  return (
    <>
      <BackLinkRef />
      <SignUpComponent />
    </>
  );
}
