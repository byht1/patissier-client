import { Text } from 'components/global/text';
import { Box } from 'components/global/Box';

export const DrinkItem = ({ drink }) => {
  return (
    <Box>   
        <Text size={16} lh='big'> &#160; &#183; &#160; {drink}</Text>
    </Box>
  );
};