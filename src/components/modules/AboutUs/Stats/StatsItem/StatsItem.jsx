import {
  StatsItemWrap,
  Icon,
  InfoWrap,
  Info,
  InfoText,
} from './StatsItem.styled';

export const StatsItem = ({ info, text, img }) => {
  return (
    <StatsItemWrap>
      <Icon src={img} alt="icon" />
      <InfoWrap>
        <Info>{info}</Info>
        <InfoText>{text}</InfoText>
      </InfoWrap>
    </StatsItemWrap>
  );
};
