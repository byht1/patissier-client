import { ReviewWrap, ImgWrap } from './ReviewItem.styled';

export const ReviewItem = ({ reviewItem }) => {
  return (
    <>
      <ReviewWrap>
        <RevieData>
          <ImgWrap>
            <img src={reviewItem.avatar} alt="аватар"></img>
          </ImgWrap>
          <div>
            <p>{reviewItem.name}</p>
            <p>{reviewItem.date}</p>
          </div>
        </RevieData>
        <p>{reviewItem.comments}</p>
        Перегляньте найближчі по даті події, авторські курси та майстер-класи
      </ReviewWrap>
      {/* <ReviewWrap>
        Перегляньте найближчі по даті події, авторські курси та майстер-класи
      </ReviewWrap>
      <ReviewWrap>
        Перегляньте найближчі по даті події, авторські курси та майстер-класи
      </ReviewWrap>
      <ReviewWrap>
        Перегляньте найближчі по даті події, авторські курси та майстер-класи
      </ReviewWrap> */}
    </>
  );
};
