import styled from 'styled-components';

import { ReactComponent as openArrowSVG } from '../../../../img/svg/openArrowForToogleMenu.svg';
import { ReactComponent as closeArrowSVG } from '../../../../img/svg/closeArrowForToogleMenu.svg';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;

  background: #101011;
  border-radius: 12px;
  width: 612px;

  position: relative;
`;

export const Question = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  display: flex;
  align-items: center;

  color: ${p => p.theme.colors.w};
`;

export const AnswerContent = styled.p`
  padding-top: 20px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  display: flex;
  align-items: center;

  color: ${p => p.theme.colors.w};
`;

export const OpenArrowIc = styled(openArrowSVG)`
  cursor: pointer;

  position: absolute;
  top: 12px;
  right: 12px;
`;

export const CloseArrowIc = styled(closeArrowSVG)`
  cursor: pointer;

  position: absolute;
  top: 12px;
  right: 12px;
`;
