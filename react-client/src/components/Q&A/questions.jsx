import React from 'react';
import { useState } from 'react';

// components
import Answers from './answers.jsx';

export default function Questions({ question }) {
  const [isClicked, setClicked] = useState(false);
  const handleIncrement = () => {
    if (isClicked === false) {
      question.question_helpfulness += 1;
      setClicked(true);
    }
  }
  return (
    <span>
      <h2>
        Q:
      </h2>
      <span>
        Helpful?
         </span>
        <span onClick={handleIncrement}>
          Yes
        </span>
        <span>
         (
        {question.question_helpfulness}
        ) | Add Answer
      </span>
      <div>
        {question.question_body}
      </div>
      <Answers answer={question.answers}/>
    </span>
  );
}
