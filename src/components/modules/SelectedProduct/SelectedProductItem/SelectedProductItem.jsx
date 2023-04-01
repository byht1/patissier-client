import {
  ProductItem,
  ImageWrap,
  ProductImg,
} from './SelectedProductItem.styled';

export const SelectedProductItem = ({ product }) => {
  return (
    <ProductItem key={product._id}>
      <ImageWrap>
        <ProductImg src={product.picture} alt="Фото десерту" />
      </ImageWrap>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <div>
        <p>
          <span>{product.price} грн/шт</span>
        </p>
        <button>Купити</button>
      </div>
    </ProductItem>
  );
};
