import { TitleH3, TitleH4, Text } from 'components/global/text';
import { Container } from 'components/global/Container';
import { ProgramItem } from './ProgramItem';

import {
  ButtonPay,
  ImageWrap,
  Image,
  ProgramList,
  Block,
  DetailsBlock,
  DetailsContainer,
  PriceContainer,
} from './Programs.styled';
import { Section } from 'components/global/Section';

export const Program = ({ category, program, price, image }) => {
  if (!program) return;
  const detailsArray = Object.values(program);

  return (
    <Section>
      <Container>
        <TitleH3 color="at">Деталі навчання</TitleH3>
        {/* <ButtonWrap>
            <Buttons>Онлайн</Buttons>
            <Buttons>Офлайн</Buttons>
          </ButtonWrap> */}
        <DetailsBlock>
          <Block>
            <DetailsContainer>
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
            </DetailsContainer>
            <PriceContainer>
              <TitleH4 color="at" mb={20}>
                Вартість
              </TitleH4>
              <Text weight={700} size={20} lh="big" mb={20}>
                {price ? price : '?????'} грн
              </Text>
              <Text color="t" mb={20}>
                *Перед оплатою уточніть наявність вільних місць, а також умов
                оплати
              </Text>
              <ButtonPay>Оплатити</ButtonPay>
            </PriceContainer>
          </Block>
          <ImageWrap>
            <Image src={image} alt={category} loading="lazy" />
          </ImageWrap>
        </DetailsBlock>
      </Container>
    </Section>
  );
};
