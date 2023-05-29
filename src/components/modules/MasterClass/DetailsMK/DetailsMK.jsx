import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {getCourseById} from 'api/courses';
import { TitleH3, TitleH4, Text  } from 'components/global/text';
import { Container} from 'components/global/Container';
import { ProgramItem } from './ProgramItem';
import { DetailsSection, ButtonPay, ImageBlock, DetailsImage, ProgramList, Block, DetailsBlock, DetailsAbout, DetailsAboutPrice } from './DetailsMK.styled';
// import Image from 'img/mk/detailsImg.jpg';
import { Section } from 'components/global/Section';

export const DetailsMK = () =>{

    const {id: courseId } = useParams();

    const {data, isSuccess, isLoading, isError, error } = useQuery({
      queryKey: ['courses', courseId],
      queryFn: () => getCourseById(courseId),
      staleTime: 5 * 60 * 1000,
    });

    if (isLoading) {
        return "Loader...";
      }

    if (isError){
        return error
    }
    if (isSuccess){
        const {images, category} = data;
        const programArray = Object.values(data.program);
        // const groupsArray = Object.values(data.groups);
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
                                    {programArray.map(({description, name}) =>{
                                        return(
                                        <ProgramItem
                                        key={name}
                                        description={description}
                                        name={name}
                                        />
                                        )
                                    })}
                                    </ProgramList>
                                </DetailsAbout>
                                <DetailsAboutPrice>
                                <TitleH4 color="at" mb={20}>Вартість</TitleH4>
                                <Text weight={700} size={20} lh='big' mb={20}>{data.groups[0].price} грн</Text>
                                <Text color="t" mb={20}>*Перед оплатою уточніть наявність вільних місць, а також умов оплати</Text>
                                <ButtonPay>Оплатити</ButtonPay>
                                </DetailsAboutPrice>
                            </Block>
                            <ImageBlock>
                                <DetailsImage src={images[1]} alt={category} loading="lazy" />
                            </ImageBlock>
                        
                            
                        </DetailsBlock>
    
                    </DetailsSection>
                </Container>
            </Section>
        
        )
    }
    
}