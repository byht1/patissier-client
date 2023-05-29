// import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {getCourseById} from 'api/courses';

import {MainTextItem} from './MainTextItem';
import { Container } from 'components/global/Container';
import { Section } from 'components/global/Section';
import { Box } from 'components/global/Box';
import { TitleH1, TitleH4, Text  } from 'components/global/text';
import {ImageWrap, MKImage, TextList, MKSection, TextWrap} from './MainMK.styled';
// import Image from 'img/mk/main.jpg';


export const MainMK = () => {
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

 if (isSuccess) {
  const {previewText, description, images, category} = data;
  const textArray = description.split('.');
   return (
    <Section>
      <Container>
       <MKSection>
        {data.type === "courses" ? (
          <TitleH1 size={84} mb={52} color="at">Курс "{category}"</TitleH1>
          ) : (
            <TitleH1 size={84} mb={52} color="at">{category}</TitleH1>
          ) }

         <Text color="t" mb={56} width={558} textAlign="center" lh='big'>{previewText}</Text>
           
           <Box display="flex">
             
             <ImageWrap>
                 <MKImage src={images[0]} alt={category} loading="lazy" />
             </ImageWrap>
             <TextWrap>
                {data.type === "courses" ? (
                    <TitleH4 mb={16}>Про курс</TitleH4>
                    ) : (
                      <TitleH4 mb={16}>Про майстер-клас</TitleH4>
                    ) }
                
                <TextList>
                  {textArray.map((text) =>{
                                            return(
                                            <MainTextItem
                                            key={text}
                                            description={text}
                                            
                                            />
                                            )
                                        })}
                </TextList>
            </TextWrap>
         </Box>
       </MKSection>
     </Container>
    </Section>
     
    
   );
 }
  
};
