import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// components
import Answers from './answers';
import AnswerModal from './AnswerModal';

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
  left: 82%;
`;

const LoadButton = styled.span`
  min-width: 50px;
  padding: 8px 22px ;
  border-radius: 4px;
  background: #fff;
  color: #141414;
  font-size: 10px;
  cursor: pointer;
  font-weight: bold;
`;

export default function Questions({ question, prodName }) {
  const [isClicked, setClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const handleIncrement = () => {
    if (isClicked === false) {
      question.question_helpfulness += 1;
      setClicked(true);
    }
  };

  const storedAnswers = Object.keys(question.answers).map(
    (element) => <Answers key={question.answers[element].id} answer={question.answers[element]} />,
  );

  const [loadedAnswers, setLoadedAnswers] = useState([storedAnswers[0], storedAnswers[1]]);

  useEffect(() => {
    setLoadedAnswers([storedAnswers[0], storedAnswers[1]]);
    setShowButton(true);
  }, [question]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const updateAnswers = (answer) => {
    setLoadedAnswers(answer);
  };
  const handleClick = () => {
    const newLoad = loadedAnswers.slice();
    if ((loadedAnswers.length !== storedAnswers.length)) {
      newLoad.push(storedAnswers[loadedAnswers.length]);
      newLoad.push(storedAnswers[loadedAnswers.length - 1]);
    }
    if (loadedAnswers.length === storedAnswers.length) {
      setShowButton((prev) => !prev);
    }
    updateAnswers(newLoad);
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
        prodName={prodName}
      />
      {loadedAnswers}
      <div>
        {showButton ? <LoadButton onClick={handleClick}>LOAD MORE ANSWERS</LoadButton> : null}
      </div>
      <div>&nbsp;</div>
    </span>
  );
}
