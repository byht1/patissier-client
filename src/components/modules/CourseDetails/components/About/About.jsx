import { Box, Section } from 'components/global';
import { TitleH1, TitleH4, Text } from 'components/global/text';
import { ImageWrap, Image, TextWrap, AboutContainer } from './About.styled';

export const About = ({ category, type, previewText, description, image }) => {
  
  const descriptionArray = description.split('\n\n');

  return (
    <Section>
      <AboutContainer>
        <TitleH1 size={84} mb={52} color="at">
          {category}
        </TitleH1>
        <Text color="t" mb={56} width={558} textAlign="center" lh="big">
          {previewText}
        </Text>

        <Box display="flex">
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
        </Box>
      </AboutContainer>
    </Section>
  );
};
