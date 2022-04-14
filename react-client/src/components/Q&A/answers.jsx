import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

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
  const [reportStatus, setReportStatus] = useState('Report');

  const handleIncrement = (element) => {
    if (answerIsClicked === false) {
      answer.helpfulness += 1;
      setClicked(true);
    }
  };

  const report = () => {
    setReportStatus('Reported');
  }

  return (
    <div>
      <div>
        <div>
          <AnswerA>
            A:
          </AnswerA>
          <StyledAnswerBody>{answer.body}</StyledAnswerBody>
          <div>
            <AnswerFunctionsWrapper>
              <AnswerFunctions>
                by&nbsp;
                {answer.answerer_name} &nbsp;|
                &nbsp;
                {moment(answer.question_date).format('MMMM, D, YYYY')}
                &nbsp; | &nbsp;
              </AnswerFunctions>
              <AnswerFunctions>
                Helpful?
              </AnswerFunctions>
              <AnswerFunctions style={{ textDecorationLine: 'underline' }}
                onClick={() => handleIncrement(answer)}>Yes</AnswerFunctions>
              <AnswerFunctions> (
                {answer.helpfulness}
                ) |&nbsp;
                <span style={{ textDecorationLine: 'underline' }} onClick={report}>{ reportStatus }</span>
              </AnswerFunctions>
            </AnswerFunctionsWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
