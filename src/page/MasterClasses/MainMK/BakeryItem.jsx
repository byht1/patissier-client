import { Text } from 'components/global/text';
import { Box } from 'components/global/Box';

export const BakeryItem = ({ bakery }) => {
  return (
    <Box>   
        <Text size={16} lh='big'> &#160; &#183; &#160; {bakery}</Text>
    </Box>
  );
};