import React from 'react';

import { TitleH3 } from 'components/global/text';
import { Container} from 'components/global/Container';
import { Slider } from 'components/modules/MasterClass/Swiper/Swiper';
import { Section } from 'components/global/Section';
import {Buttons, ButtonWrap, SwiperWrap, StartMKSection } from './StartMK.styled';


export const StartMK = () =>{
 
        return(
            <Section>
                <Container>
                    <StartMKSection>
                        <TitleH3 color="at">Старт навчання</TitleH3>
                        <ButtonWrap>
                            <Buttons>Всі пропозиції</Buttons>
                            <Buttons>Онлайн</Buttons>
                            <Buttons>Офлайн</Buttons>
                        </ButtonWrap>
                        <SwiperWrap>
                            <Slider/>
                        </SwiperWrap>
                    </StartMKSection>
                </Container>
            </Section>
        )
    }
    
