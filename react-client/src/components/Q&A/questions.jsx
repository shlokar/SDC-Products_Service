import React from 'react';

// components
import Answers from './answers.jsx';

export default function Questions({ question }) {
  return (
    <span>
      <h2>
        Q:
      </h2>
      <div>
        helpful? Yes: (
        {question.question_helpfulness}
        ) | Add Answer
      </div>
      <div>
        {question.question_body}
      </div>
      <Answers answer={question.answers}/>
    </span>
  );
}
