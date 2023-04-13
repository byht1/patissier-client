import { Text } from 'components/global/text';
import { Box } from 'components/global/Box';

export const ProgramItem = ({ stage, name }) => {
  return (
    <Box display="flex">   
        <Text size={16} weight={700} mr={12}>{name}</Text>
        <Text lh='body'>{stage}</Text>
    </Box>
  );
};