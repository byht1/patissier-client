import { TitleH3 } from 'components/global/text';
import { Box } from 'components/global/Box';
import { Container} from 'components/global/Container';
import { Slider } from 'components/modules/Swiper/Swiper';
// import { ProgramItem } from './ProgramItem';
// import {  ButtonPay, ImageBlock, DetailsImage, ProgramList, Block, DetailsBlock, DetailsAbout, DetailsAboutPrice } from './DetailsMK.styled';
import {Buttons, ButtonWrap, SwiperWrap } from './StartMK.styled';
// import Image from 'img/mk/detailsImg.jpg';

export const StartMK = () =>{
    return(
        <Container>
        <Box mt={200} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
            <TitleH3 color="at" mb={60} alignItems='center'>Старт навчання</TitleH3>
            <ButtonWrap>
                <Buttons>Всі пропозиції</Buttons>
                <Buttons>Онлайн</Buttons>
                <Buttons>Офлайн</Buttons>
            </ButtonWrap>
            <SwiperWrap>
                <Slider/>
            </SwiperWrap>
            
            {/* <DetailsBlock>
                <Block>
                    <DetailsAbout>
                        <TitleH4 color="at" mb={20}>Програма</TitleH4>
                        <ProgramList>
                        {stageList.map(({stage}) =>{
                            return(
                            <ProgramItem
                            stage={stage}
                            />
                            )
                        })}
                        </ProgramList>
                    </DetailsAbout>
                    <DetailsAboutPrice>
                    <TitleH4 color="at" mb={20}>Вартість</TitleH4>
                    <Text weight={700} size={20} lh='big' mb={20}>499 грн</Text>
                    <Text color="t" mb={20}>*Перед оплатою уточніть наявність вільних місць, а також умов оплати</Text>
                    <ButtonPay>Оплатити</ButtonPay>
                    </DetailsAboutPrice>
                </Block>
                <ImageBlock>
                    <DetailsImage src={Image} alt="foto" loading="lazy" />
                </ImageBlock>
               
                
            </DetailsBlock> */}

        </Box>
    </Container>
    )
}