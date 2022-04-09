import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// components
import Questions from './questions.jsx';
import Modal from './Modal.jsx'

const Container = styled.div`
  display: flex;
  padding: 16px 32px;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 25vh;
  `;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: solid;
  background: #fff;
  color: #141414;
  font-size: 24px;
  cursor: pointer;
`;

const newQaContext = createContext(
  axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions?product_id=62635',
    headers: { authorization: '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' },
  }).then((results) => {
    return results.data
  }),
);

export default function QuestionsAnswers() {
  const questions = useContext(qaContext);
  const [searchTerm, setSearchTerm] = useState('');
  const storedQuestions = questions.results.map((element) => {
    return <Questions question={element}/>
  });
  const [currentQs, setCurrentQs] = useState([storedQuestions[0], storedQuestions[1]])
  const [hideButton, setHideButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [addQuestion, setAddedQuestion] = useState({});

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const handleQuestionButtonClick = () => {
    console.log(questionButton)
    setCurrentQs(storedQuestions);
  }

  const hiddenButton = () => {
    setQuestionButton(<></>)
  }

  let [questionButton, setQuestionButton] = useState(<Button type="button"  onClick={() => {
    handleQuestionButtonClick()
    hiddenButton();
  }}>More Answered Questions</Button>);

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    if(searchTerm.length > 1) {
      search(searchTerm)
    } else if (searchTerm.length < 2){
      setCurrentQs([storedQuestions[0], storedQuestions[1]])
    }
  }
  const search = (term) => {
    var matchedQuestions = [];
    //use questions array to manipulate what items appear
    for (const question in questions.results) {
      if (questions.results[question].question_body.includes(term)) {
        matchedQuestions.push(questions.results[question]);
      }
    }
     setCurrentQs(matchedQuestions.map((element) => {
      return <Questions question={element}/>
    }));
  }

  return (
    <div>
      <div>
        Questions and Answers
        <input placeholder=" Have a question? Search for answers..." value={searchTerm} onChange={handleChange}/>
      </div>
      <div>
        {currentQs}
      </div>
      <p />

      <Container>
      <span>{questionButton}</span>
        <Button onClick={openModal}>Add a Question +</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} addQuestion={addQuestion} setAddedQuestion={setAddedQuestion}/>
      </Container>
    </div>
  );
}
