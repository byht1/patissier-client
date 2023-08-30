import { Container, Section, Text, TitleH4 } from 'components/global';
import { ProgramItem } from './ProgramItem';

import {
  ButtonPay,
  ImageWrap,
  Image,
  ProgramList,
  Block,
  DetailsBlock,
  ProgramContainer,
  PriceContainer,
} from './Programs.styled';

import { SectionTitle } from '../../common';

export const Program = ({ category, program, price, image }) => {
  if (!program) return;
  const detailsArray = Object.values(program);

  return (
    <Section>
      <Container>
        <SectionTitle color="at">Деталі навчання</SectionTitle>
        <DetailsBlock>
          <ImageWrap>
            <Image src={image} alt={category} loading="lazy" />
          </ImageWrap>
          <Block>
            <ProgramContainer>
              <TitleH4 color="at" mb={20}>
                Програма
              </TitleH4>
              <ProgramList>
                {detailsArray.map(({ name, description }) => (
                  <ProgramItem
                    key={name}
                    name={name}
                    description={description}
                  />
                ))}
              </ProgramList>
            </ProgramContainer>
            <PriceContainer>
              <TitleH4 color="at" weight={700}>
                Вартість
              </TitleH4>
              <Text weight={700} size={20} lh="big">
                {price ? price : '?????'} грн
              </Text>
              <Text color="t" textAlign="center" lh="body">
                *Перед оплатою уточніть наявність вільних місць, а також умов
                оплати
              </Text>
              <ButtonPay>Оплатити</ButtonPay>
            </PriceContainer>
          </Block>
        </DetailsBlock>
      </Container>
    </Section>
  );
};
