import PropTypes from 'prop-types';
import { InstaCard } from './InstaItem.styled';

export const InstaItem = ({ post: { img, img2x, title } }) => {
  console.log(img, img2x);
  return (
    <InstaCard>
      <div>
        <img srcSet={`${img} 1x,${img2x} 2x`} src={img} alt={title} />
      </div>
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
