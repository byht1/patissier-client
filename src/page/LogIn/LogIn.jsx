import { BackLinkRef } from 'components/global/BackLink/BackLink';
import { SignIn } from 'components/modules/Auth/SignIn/SignIn';

import React from 'react';

export default function LogIn() {
  return (
    <div>
      <BackLinkRef />
      <SignIn />
    </div>
  );
}
