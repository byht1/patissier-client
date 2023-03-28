import { TitleH3, TitleH4  } from 'components/global/text';
import { Box } from 'components/global/Box';
import { Button, ButtonWrap, ImageBlock, DetailsImage, Block, DetailsBlock, DetailsAbout } from '../MasterClasses.styled';
import Image from 'img/mk/detailsImg.jpg';

export const DetailsMK = () =>{
    return(
        <Box mt={200}display="flex" justifyContent="center" flexDirection="column" alignItems="center">
            <TitleH3 color="at" mb={60} alignItems='center'>Деталі навчання</TitleH3>
            <ButtonWrap>
                <Button>Онлайн</Button>
                <Button>Офлайн</Button>
            </ButtonWrap>
            <DetailsBlock>
                <Block>
                    <DetailsAbout>
                        <TitleH4 color="at" mb={20}>Програма</TitleH4>
                    </DetailsAbout>
                    <DetailsAbout></DetailsAbout>
                </Block>
                <ImageBlock>
                    <DetailsImage src={Image} alt="foto" loading="lazy" />
                </ImageBlock>
               
                
            </DetailsBlock>

        </Box>
    )
}