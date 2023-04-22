import PropTypes from 'prop-types';
import { InstaCard } from './InstaItem.styled';

<<<<<<< HEAD
export const InstaItem = ({ post: { link, img, img2x, title } }) => {
=======
export const InstaItem = ({ post: { img, img2x, title } }) => {
  console.log(img, img2x);
>>>>>>> main
  return (
    <InstaCard>
      <img srcSet={`${img} 1x,${img2x} 2x`} src={img} alt={title} />
    </InstaCard>
  );
};

InstaItem.propTypes = {
  post: PropTypes.shape({
    img: PropTypes.string.isRequired,
    img2x: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
