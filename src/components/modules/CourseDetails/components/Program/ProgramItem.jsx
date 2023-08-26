import { Text } from "components/global";
import { Item } from "./Programs.styled";

export const ProgramItem = ({ name, description}) => {
  return (
    <Item>
      <Text size={16} weight={700} lh="body">
        {name}:
      </Text>
      <Text lh="body">{description}</Text>
    </Item>
  );
};