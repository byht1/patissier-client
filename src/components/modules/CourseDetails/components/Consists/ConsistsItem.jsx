import { Text } from 'components/global/text';
import { TitleH4 } from 'components/global/text';
import { ConsistItemWrap } from './Consists.styled';

export const ConsistsItem = ({ name, description }) => {
  return (
    <ConsistItemWrap>
      <TitleH4 mb={16} weight={700}>
        {name}
      </TitleH4>
      <Text lh="body" color="t">
        {description}
      </Text>
    </ConsistItemWrap>
  );
};
