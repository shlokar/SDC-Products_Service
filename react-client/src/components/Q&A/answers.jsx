import React from 'react';
import moment from 'moment';
import { useState } from 'react';

export default function Answers({ answer }) {
  const [answerIsClicked, setClicked] = useState(false);

  const handleIncrement = (element) => {
    console.log('this ran', answer[element].helpfulness, answerIsClicked)
    if (answerIsClicked === false) {
      answer[element].helpfulness += 1;
      setClicked(true);
    }
  };
  const loaded = Object.keys(answer).map((element) =>
    <div>
      <h2>
        A:
      </h2>
      <p>{answer[element].body}</p>
      <span>
        by {answer[element].answerer_name}
        - Seller,
        {moment(answer[element].question_date).format('MMMM, D, YYYY')}
        |
      </span>
      <span>
        Helpful?
        </span>
        <span onClick={() => handleIncrement(element)}> Yes:</span>
        <span> (
        {answer[element].helpfulness}
        ) | Report
      </span>
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
        <input type="button" value="More Answers" onClick={handleClick}></input>
      </div>
    </div>
  )
}
