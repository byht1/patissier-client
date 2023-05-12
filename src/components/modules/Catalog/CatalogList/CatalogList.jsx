import React from 'react';
import { List, Item, Image } from './CatalogList.styled';
import F from '../../../../img/catalog/grid/Rectangle1.png';
import S from '../../../../img/catalog/grid/Rectangle2.png';
import T from '../../../../img/catalog/grid/Rectangle3.png';
import Fr from '../../../../img/catalog/grid/Rectangle4.png';
import Ff from '../../../../img/catalog/grid/Rectangle5.png';
export const CatalogList = () => {
  return (
    <List>
      <Item>
        <Image src={F} alt="catalog desserts" />
      </Item>
      <Item>
        <Image src={S} alt="catalog desserts" />
      </Item>
      <Item>
        <Image src={T} alt="catalog desserts" />
      </Item>
      <Item>
        <Image src={Fr} alt="catalog desserts" />
      </Item>
      <Item>
        <Image src={Ff} alt="catalog desserts" />
      </Item>
    </List>
  );
};
