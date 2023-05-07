import styled from 'styled-components';

export const Box = styled.div`
  padding-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 60px;
`;

export const PopularQuestionsBox = styled.div``;
export const LetterBox = styled.div``;
export const Title = styled.h2`
  padding: 0px 0px 60px 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 1.33;
  color: ${p => p.theme.colors.at};
`;

export const ListOfQuestions = styled.ul`
  display: grid;
  row-gap: 24px;
`;

export const Tip = styled.p`
  padding-bottom: 40px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  display: flex;
  align-items: center;

  color: ${p => p.theme.colors.w};
`;

export const Form = styled.form`
  display: grid;
  row-gap: 40px;
`;
export const Label = styled.label`
  display: grid;
  row-gap: 12px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
`;
export const Input = styled.input`
  align-items: center;
  padding: 12px 16px;

  border: 1px solid ${p => p.theme.colors.aBg};
  border-radius: 12px;
  outline: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
`;

export const CommentInput = styled.textarea`
  align-items: center;
  padding: 12px 16px;

  border: 1px solid ${p => p.theme.colors.aBg};
  border-radius: 12px;
  outline: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  height: 92px;

  resize: none;
  overflow: hidden;
`;

export const SubmitBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  gap: 10px;

  width: 216px;
  height: 52px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: ${p => p.theme.colors.bt};

  background: ${p => p.theme.colors.at};
  border-radius: 12px;
`;
