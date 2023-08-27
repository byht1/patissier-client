import { TitleH1 } from 'components/global';
import { HeroContainer, ImageWrap, NavLinkStyled, TopText } from './CourseHero.styled';

export const CourseHero = () => {
  return (
    <ImageWrap>
      <HeroContainer>
        <TitleH1 mb={40}>Станьте кондитером!</TitleH1>
        <TopText color="t">
          Навчіться готувати вишукані десерти! Курси та майстер-класи від
          професіоналів
        </TopText>
        <NavLinkStyled to={'/about-us'}>Записатись</NavLinkStyled>
      </HeroContainer>
    </ImageWrap>
  );
};
