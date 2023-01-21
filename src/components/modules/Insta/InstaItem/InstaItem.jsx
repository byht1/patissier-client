import { InstaCard } from './InstaItem.styled';

export const InstaItem = ({ post: { link, img, img2x, title } }) => {
  console.log(img, img2x);
  return (
    <InstaCard>
      <a href={link} target="_blank" rel="noopener nofollow noreferrer">
        <img srcset={`${img} 1x,${img2x} 2x`} src={img} alt={title} />
      </a>
    </InstaCard>
  );
};
