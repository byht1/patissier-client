import { getReviews } from 'api';
import { useEffect, useState } from 'react';
import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { ReviewsList, Title } from './Reviews.styled';
import { ReviewItem } from './ReviewsItem';
import { defaultReviewsList } from './defaultReviews';

export const Reviews = ({ title }) => {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    async function getReviewsList() {
      try {
        const reviews = await getReviews();
        setReviewsList(reviews);
      } catch (error) {
        setReviewsList(defaultReviewsList);
      }
    }
    getReviewsList();
  }, []);

  return (
    <Box as="section" pt={100} pb={100}>
      <Container display="flex" flexDirection="column" alignItems="center">
        <Title>{title}</Title>
        <ReviewsList>
          {reviewsList.map(reviewItem => (
            <ReviewItem key={reviewItem._id} reviewItem={reviewItem} />
          ))}
        </ReviewsList>
      </Container>
    </Box>
  );
};
