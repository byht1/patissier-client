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
  return (
    <>
      <ReviewWrap>
        <ReviewData>
          <ImgWrap>
            <Img src={avatar} alt="аватар"></Img>
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
