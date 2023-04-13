import { TitleH3} from 'components/global/text';
import { Box } from 'components/global/Box';
import { Container} from 'components/global/Container';
import { ConsistsItem } from './ConsistsItem';
import {ConsistsList} from './Consists.styled';


export const ConsistsMK = ({aboutList}) =>{
    return(
        <Container>
        <Box mt={200} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
            <TitleH3 color="at" mb={60} alignItems='center'>Що містить майстер клас?</TitleH3>
            <ConsistsList>
            {aboutList.map(({ title, text}) =>{
                    return(
                    <ConsistsItem
                            title={title}
                            text={text}
                    
                    />
                    )
                })}
                
            </ConsistsList>
            

        </Box>
    </Container>
    )
}