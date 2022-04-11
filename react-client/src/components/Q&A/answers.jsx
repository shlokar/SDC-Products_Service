import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Button = styled.span`
  min-width: 50px;
  padding: 8px 22px ;
  border-radius: 4px;
  background: #fff;
  color: #141414;
  font-size: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const AnswerFunctions = styled.span`
  font-size: 11px;
  color: #696969;
  padding-top: 10px;
  padding-left: 2px;
  line-height: 30px;
  position: relative
`;

const AnswerFunctionsWrapper = styled.div`
  padding-left: 22px;
`;

const AnswerA = styled.span`
  font-weight: bold;
  position: relative
  padding-top: 10px;
  padding-left: 4px;
`;

const StyledAnswerBody = styled.span`
  position: relative
  padding-top: 10px;
  padding-left: 4px;
  font-size: 13px;
  color: #595959
`;

export default function Answers({ answer }) {
  const [answerIsClicked, setClicked] = useState(false);

  const handleIncrement = (element) => {
    console.log('this ran', answer[element].helpfulness, answerIsClicked);
    if (answerIsClicked === false) {
      answer[element].helpfulness += 1;
      setClicked(true);
    }
  };
  const loaded = Object.keys(answer).map((element) =>
    <div>
      <AnswerA>
        A:
      </AnswerA>
      <StyledAnswerBody>{answer[element].body}</StyledAnswerBody>
      <div>
        <AnswerFunctionsWrapper>
        <AnswerFunctions>
          by&nbsp;
          {answer[element].answerer_name} &nbsp;|
          &nbsp;
          {moment(answer[element].question_date).format('MMMM, D, YYYY')}
          &nbsp; | &nbsp;
        </AnswerFunctions>
        <AnswerFunctions>
          Helpful?
        </AnswerFunctions>
        <AnswerFunctions style={{ textDecorationLine: 'underline' }}
        onClick={() => handleIncrement(element)}>Yes</AnswerFunctions>
        <AnswerFunctions> (
          {answer[element].helpfulness}
          ) | Report
        </AnswerFunctions>
        </AnswerFunctionsWrapper>
      </div>
    </div>);

  const [current, setCurrent] = useState([loaded[0], loaded[1]]);

  const handleClick = () => {
    setCurrent(loaded);
  };
  return (
    <div>
      <div>
        {current.map((element) => element)}
      </div>
      <div>
        <Button onClick={handleClick}>LOAD MORE ANSWERS</Button>
      </div>
      <div>&nbsp;</div>
    </div>
  );
}
