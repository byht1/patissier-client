import styled from 'styled-components';
import { ButtonsGhost } from 'components/global/button';
import { Text, TitleH4, devices } from 'components/global';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

export const SwiperContainer = styled.div`
  box-shadow: 52px 4px 104px -30px rgba(199, 103, 56, 0.1),
    -52px -4px 104px -30px rgba(199, 103, 56, 0.1);
`;

export const GroupsSwiper = styled(Swiper)`
  position: static;
  border-radius: 12px;
`;

export const GroupSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-grow: 1;
  max-width: 282px;
  height: auto;

  box-shadow: var(--shadow);
  border-radius: 12px;

  &:last-child {
    margin-right: 0 !important;
  }
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 282px;

  background: #030305;
  border-radius: 12px;
  padding: 20px;
`;

export const SlideTitle = styled(TitleH4)`
  flex-grow: 1;
`;

export const FormatText = styled(Text)`
  text-transform: capitalize;
`;

export const Button = styled(ButtonsGhost)`
  min-width: 184px;
  padding: 16px 40px;
`;

// pagination

export const StyledPagination = styled.div`
  .swiper-pagination {
    ${devices.desktopDown} {
      display: none;
    }
    bottom: -32px;

    display: flex;
    justify-content: center;
    gap: 4px;
  }

  .swiper-pagination-bullet {
    position: relative;

    background: var(--text);
    height: 12px;
    min-height: 12px;
    width: 12px;

    &.swiper-pagination-bullet-active {
      background: var(--accent-bg);

      height: 12px;
      width: 40px;
      border-radius: 10px;
    }
  }
`;
