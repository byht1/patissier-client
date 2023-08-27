import styled from 'styled-components';
import { devices } from 'components/global';

// Groups.jsx components:
export const Container = styled.div`
  padding-left: 12px;

  ${devices.desktop} {
    width: 1224px;
    padding-right: 12px;
    margin: 0 auto;
  }
`;

// GroupList.jsx components:
export const GroupsSwiperContainer = styled.div`
  position: relative;
  max-width: 100vw;
  width: ${p => (p.itemsQuantity > 3 ? '100%' : 'min-content')};

  border-radius: 12px;
  box-shadow: 0px 0px 104px 15px rgba(199, 103, 56, 0.1),
    inset 0px 0px 104px 30px rgba(199, 103, 56, 0.1);
`;
