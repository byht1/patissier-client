import { Section, Text, TitleH4 } from 'components/global';
import {
  ImageWrap,
  Image,
  TextWrap,
  AboutContainer,
  Title,
  TopText,
  ContentWrap,
} from './About.styled';

export const About = ({ category, type, previewText, description, image }) => {
  const descriptionArray = description.split('\n\n');

  return (
    <Section>
      <AboutContainer>
        <Title color="at">{category}</Title>
        <TopText color="t" textAlign="center" lh="big">
          {previewText}
        </TopText>

        <ContentWrap>
          <ImageWrap>
            <Image src={image} alt={category} loading="lazy" />
          </ImageWrap>
          <TextWrap>
            <TitleH4 mb={16}>Про {type}</TitleH4>
            {descriptionArray.map((text, index) => (
              <Text size={16} lh="body" key={index}>
                {text}
              </Text>
            ))}
          </TextWrap>
        </ContentWrap>
      </AboutContainer>
    </Section>
  );
};
