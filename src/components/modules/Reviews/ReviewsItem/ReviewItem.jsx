import { formatDate } from '../helpers';
import {
  ReviewWrap,
  ImgWrap,
  ReviewData,
  Img,
  ReviewName,
  ReviewComment,
} from './ReviewItem.styled';

export const ReviewItem = ({ reviewItem }) => {
  const formatedDate = formatDate(reviewItem.date);

  return (
    <>
      <ReviewWrap>
        <ReviewData>
          <ImgWrap>
            <Img src={reviewItem.avatar} alt="аватар"></Img>
          </ImgWrap>
          <div>
            <ReviewName>{reviewItem.name}</ReviewName>
            <p>{formatedDate}</p>
          </div>
        </ReviewData>
        <ReviewComment>
          {reviewItem.comments}
          Дівчата, ці тістечка посто бомба-ракєта!!! Нарешті дійшов мій
          марципан, і я одразу приготувала, тому тепер я в графіку і в ногу з
          іншими учасниками курсу.
        </ReviewComment>
      </ReviewWrap>
    </>
  );
};
