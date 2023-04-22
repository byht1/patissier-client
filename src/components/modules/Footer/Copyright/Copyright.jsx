import { TbCopyright } from 'react-icons/tb';
import { IconWrapper, TextCopyright, TeamLink } from './Copyright.styled';

export const Copyright = () => {
  return (
    <>
      <IconWrapper>
        <TbCopyright size="24" />
      </IconWrapper>
      <TextCopyright>Всі права захищено, 2022-2023</TextCopyright>
      <TeamLink href="" target="_black" rel="noreferrer noopener nofollow">
        Сайт розроблено командою Brainstorm
      </TeamLink>
    </>
  );
};
