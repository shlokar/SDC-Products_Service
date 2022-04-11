import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// components
import Answers from './answers.jsx';
import AnswerModal from './AnswerModal.jsx'

const AnswerButton = styled.span`
  text-decoration: underline;
  font-family: 'Roboto-Thin';
  font-size 11px;
  color: #696969;
  cursor: pointer;
`;

const QuestionHeader = styled.span`
  font-weight: bold;
  position: relative
  padding-top: 10px;
  padding-left: 4px;
`;

const QuestionFunctions = styled.span`
  font-size 11px;
  color: #696969;
  padding: 1px;
  cursor: pointer;
`;

const QuestionFunctionsWrapper = styled.div`
  position: relative;
  top: -18px;
  left: 70%;
`;

export default function Questions({ question }) {
  const [isClicked, setClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleIncrement = () => {
    if (isClicked === false) {
      question.question_helpfulness += 1;
      setClicked(true);
    }
  }

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <span>
      <QuestionHeader>
        Q:
      </QuestionHeader>
      <QuestionHeader>
        {question.question_body}
      </QuestionHeader>
      <QuestionFunctionsWrapper>
        <QuestionFunctions>
          Helpful?&nbsp;
        </QuestionFunctions>
        <QuestionFunctions style={{ textDecorationLine: 'underline' }} onClick={handleIncrement}>
          Yes&nbsp;
        </QuestionFunctions>
        <QuestionFunctions>
          (
          {question.question_helpfulness}
          ) &nbsp;|&nbsp;
        </QuestionFunctions>
        <AnswerButton onClick={openModal}>Add Answer</AnswerButton>
      </QuestionFunctionsWrapper>
      <AnswerModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Answers answer={question.answers} />
    </span>
  );
}
