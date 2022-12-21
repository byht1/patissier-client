import { Button, ButtonsGhost } from 'components/global/button';
import { TitleH1, TitleH2, TitleH3, TitleH4 } from 'components/global/text';
import { Text } from 'components/global/text/Text';
import React from 'react';

export default function Home() {
  return (
    <>
      <TitleH1>Title one</TitleH1>
      <TitleH2>Title Two</TitleH2>
      <TitleH3>Title Three</TitleH3>
      <TitleH4>Title Four</TitleH4>
      <Text family="marianna" weight={400} size={96} color="good">
        marianna
      </Text>
      <Button>Button one</Button>
      <ButtonsGhost> Button Two</ButtonsGhost>
    </>
  );
}
