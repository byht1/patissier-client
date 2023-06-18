import { TitleH3, TitleH4, Text  } from 'components/global/text';
import { Container} from 'components/global/Container';
import { ProgramItem } from './ProgramItem';
import { DetailsSection, ButtonPay, ImageBlock, DetailsImage, ProgramList, Block, DetailsBlock, DetailsAbout, DetailsAboutPrice } from './DetailsMK.styled';
import Image from 'img/mk/detailsImg.jpg';
import { Section } from 'components/global/Section';
export const DetailsMK = ({stageList}) =>{
    return(
        <Section>
            <Container>
                <DetailsSection>
                    <TitleH3 color="at">Деталі навчання</TitleH3>
                    {/* <ButtonWrap>
                        <Buttons>Онлайн</Buttons>
                        <Buttons>Офлайн</Buttons>
                    </ButtonWrap> */}
                    <DetailsBlock>
                        <Block>
                            <DetailsAbout>
                                <TitleH4 color="at" mb={20}>Програма</TitleH4>
                                <ProgramList>
                                {stageList.map(({stage, name}) =>{
                                    return(
                                    <ProgramItem
                                    key={name}
                                    stage={stage}
                                    name={name}
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
                    
                        
                    </DetailsBlock>

                </DetailsSection>
            </Container>
        </Section>
    
    )
}