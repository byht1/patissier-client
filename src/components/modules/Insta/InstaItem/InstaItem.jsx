import PropTypes from 'prop-types';
import { InstaCard } from './InstaItem.styled';

export const InstaItem = ({ post: { link, img, img2x, title } }) => {
  console.log(img, img2x);
  return (
    <InstaCard>
      <a href={link} target="_blank" rel="noopener nofollow noreferrer">
        <img srcSet={`${img} 1x,${img2x} 2x`} src={img} alt={title} />
      </a>
    </InstaCard>
  );
};

InstaItem.propTypes = {
  post: PropTypes.shape({
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    img2x: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
