import { Text } from 'components/global/text';

import {TextItem} from './MainMK.styled';


export const MainTextItem = ({description}) => {

  return (
   
      <TextItem>
        <Text size={16} lh='body'>
            {description + "."}
        </Text>
      </TextItem>
    
  );
};