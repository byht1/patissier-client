import { TitleH3} from 'components/global/text';
import { Container} from 'components/global/Container';
import { ConsistsItem } from './ConsistsItem';
import {ConsistsList, ConsistsSection} from './Consists.styled';


export const ConsistsMK = ({aboutList}) =>{
    return(
        <Container pt={100} pb={100}>
        <ConsistsSection>
            <TitleH3 color="at" mb={60} alignItems='center'>Що містить майстер клас?</TitleH3>
            <ConsistsList>
            {aboutList.map(({ title, text, id}) =>{
                    return(
                    <ConsistsItem
                            key={id}
                            title={title}
                            text={text}
                    
                    />
                    )
                })}
                
            </ConsistsList>
            

        </ConsistsSection>
    </Container>
    )
}