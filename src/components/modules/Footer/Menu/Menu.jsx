import { Box } from 'components/global/Box';

import logo from 'img/footer/logo.svg';
import { NavList, ItemLink, LogoLink } from './Menu.styled';

export const Menu = () => {
  return (
    <>
      <Box as="nav" marginBottom="52px">
        <LogoLink href="">
          <img src={logo} alt="logo" />
        </LogoLink>
        <NavList>
          <li>
            <ItemLink to="/about-us">Про нас</ItemLink>
          </li>
          <li>
            <ItemLink href="/store">Магазин</ItemLink>
          </li>
          <li>
            <ItemLink href="/courses">Курси</ItemLink>
          </li>
          <li>
            <ItemLink href="">Блог</ItemLink>
          </li>
          <li>
            <ItemLink href="">Контакти</ItemLink>
          </li>
        </NavList>
      </Box>
    </>
  );
};
