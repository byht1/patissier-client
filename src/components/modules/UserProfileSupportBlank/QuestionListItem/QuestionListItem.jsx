import { useState } from 'react';
import {
  Item,
  AnswerContent,
  Question,
  OpenArrowIc,
  CloseArrowIc,
} from './QuestionListItem.styled';

export function QuestionListItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const toogle = () => {
    switch (showAnswer) {
      case true:
        setShowAnswer(false);
        break;
      case false:
        setShowAnswer(true);
        break;

      default:
        break;
    }
  };
  return (
    <Item>
      {!showAnswer ? (
        <OpenArrowIc onClick={toogle} />
      ) : (
        <CloseArrowIc onClick={toogle} />
      )}
      <Question>{question}</Question>
      {showAnswer ? <AnswerContent>{answer}</AnswerContent> : null}
    </Item>
  );
}
