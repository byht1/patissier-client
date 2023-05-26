import { Text } from 'components/global/text';
import { TitleH4 } from 'components/global/text';
import {ConsistsItems} from './Consists.styled';


export const ConsistsItem = ({ name, description }) => {

  return (
   
      <ConsistsItems>
        <TitleH4 mb={16} weight={700}>{name}</TitleH4>
        <Text lh='body' color="t">
            {description}
        </Text>
      </ConsistsItems>
    
  );
};