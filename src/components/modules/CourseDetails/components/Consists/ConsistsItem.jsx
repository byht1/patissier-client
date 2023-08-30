import { Text, TitleH4 } from 'components/global';
import { ConsistItemWrap } from './Consists.styled';

export const ConsistsItem = ({ name, description }) => {
  return (
    <ConsistItemWrap>
      <TitleH4 weight={700}>
        {name}
      </TitleH4>
      <Text lh="body" color="t">
        {description}
      </Text>
    </ConsistItemWrap>
  );
};
