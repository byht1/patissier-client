import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {getCourseById} from 'api/courses';
import { TitleH3} from 'components/global/text';
import { Container} from 'components/global/Container';
import { ConsistsItem } from './ConsistsItem';
import {ConsistsList, ConsistsSection} from './Consists.styled';
import { Section } from 'components/global/Section';

export const ConsistsMK = () => {

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
        
        const detailsArray = Object.values(data.details);
        return(
            <Section>
                <Container >
                    <ConsistsSection>
                        <TitleH3 color="at">Що містить майстер клас?</TitleH3>
                        <ConsistsList>
                         
                                {detailsArray.map(({name, description}) =>{
                                        return(
                                        <ConsistsItem
                                                key={name}
                                                name={name}
                                                description={description}
                                        
                                        />
                                        )
                                    })}
                    
                        </ConsistsList>
                
    
                    </ConsistsSection>
                </Container>
            </Section>
        )
    }
    

        
    }
      
            

        
    
   
