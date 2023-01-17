import { getReviews } from 'api';
import { useEffect, useState } from 'react';
import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { TitleH2 } from 'components/global/text';
import { ReviewsList } from './Reviews.styled';
import { ReviewItem } from './ReviewsItem';

export const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    async function getReviewsList() {
      try {
        const reviews = await getReviews();
        setReviewsList(reviews);
      } catch (error) {
        console.log(error);
      }
    }
    getReviewsList();
  }, []);

  return (
    <>
      {reviewsList.length > 0 && (
        <Container pt={114} pb={100}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TitleH2 mb={75} color="at">
              Відгуки
            </TitleH2>
            <ReviewsList>
              {reviewsList.map(reviewItem => (
                <ReviewItem key={reviewItem._id} reviewItem={reviewItem} />
              ))}
            </ReviewsList>
          </Box>
        </Container>
      )}
    </>
  );
};
