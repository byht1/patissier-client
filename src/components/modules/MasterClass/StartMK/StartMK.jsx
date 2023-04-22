import { TitleH3 } from 'components/global/text';
import { Box } from 'components/global/Box';
import { Container} from 'components/global/Container';
import { Slider } from 'components/modules/MasterClass/Swiper/Swiper';

import {Buttons, ButtonWrap, SwiperWrap } from './StartMK.styled';

import dataStartMK from './data-start';

export const StartMK = () =>{
    return(
        <Container pt={100} pb={86}>
        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
            <TitleH3 color="at" mb={60} alignItems='center'>Старт навчання</TitleH3>
            <ButtonWrap>
                <Buttons>Всі пропозиції</Buttons>
                <Buttons>Онлайн</Buttons>
                <Buttons>Офлайн</Buttons>
            </ButtonWrap>
            <SwiperWrap>
                <Slider startList={dataStartMK}/>
            </SwiperWrap>
            

        </Box>
    </Container>
    )
}