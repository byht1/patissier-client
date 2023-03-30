import { Text } from 'components/global/text';
import { Box } from 'components/global/Box';

export const ProgramItem = ({ stage }) => {
  return (
    <Box>   
        <Text size={16} lh='big'>{stage}</Text>
    </Box>
  );
};