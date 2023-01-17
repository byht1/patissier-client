import { formatDate } from '../helpers';
import {
  ReviewWrap,
  ImgWrap,
  ReviewData,
  Img,
  ReviewName,
  ReviewComment,
} from './ReviewItem.styled';

export const ReviewItem = ({
  reviewItem: { date, avatar, name, comments },
}) => {
  // if (date.length>6) {
  //   formatDate(date);
  // }
  // const formatedDate = formatDate(date);
  console.log(date);

  return (
    <>
      <ReviewWrap>
        <ReviewData>
          <ImgWrap>
            <Img src="../../../../img/reviews/review-1.png" alt="аватар"></Img>
            {/* <Img src="../../../../img/reviews/review-1.png" alt="fbdfb">
              Picture
            </Img> */}
          </ImgWrap>
          <div>
            <ReviewName>{name}</ReviewName>
            <p>{formatDate(date)}</p>
          </div>
        </ReviewData>
        <ReviewComment>{comments}</ReviewComment>
      </ReviewWrap>
    </>
  );
};
