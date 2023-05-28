import { ImageWrap, NavLinkStyled } from './CourseHero.styled';
import { H1 } from 'components/global/text/title/Title.styled';
import { Container } from 'components/global';
import { Text } from 'components/global';
export const CourseHero = () => {
  return (
    <>
      <ImageWrap>
        <Container pt={114} pb={100}>
          <H1 mb={60}>Станьте кондитером!</H1>
          <Text
            mb={60}
            width={460}
            color="t"
            lh="big"
            size={20}
            weight={600}
            lineHeight={30}
          >
            Навчіться готувати вишукані десерти! Курси та майстер-класи від
            професіоналів
          </Text>
          <NavLinkStyled to={'/about-us'}>Записатись</NavLinkStyled>
        </Container>
      </ImageWrap>
    </>
  );
};
