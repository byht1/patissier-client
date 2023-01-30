import { ImgWrap, ExampleFoto } from './ExampleItem.styled';

export const ExampleItem = ({ img }) => {
  return (
    <ImgWrap>
      <ExampleFoto src={img} alt="Works of our students" />
    </ImgWrap>
  );
};
