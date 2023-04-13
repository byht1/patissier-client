import { Text } from 'components/global/text';
import { Box } from 'components/global/Box';
import { TitleH4 } from 'components/global/text';
import {ConsistsItems} from './Consists.styled';
export const ConsistsItem = ({ title, text }) => {
  return (
    <Box>   
      <ConsistsItems>
      <TitleH4 mb={16} weight={700}>{title}</TitleH4>
        <Text lh='body'>
            {text}
        </Text>
      </ConsistsItems>
    
    </Box>
  );
};