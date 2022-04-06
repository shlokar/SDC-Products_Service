import React from 'react';
import moment from 'moment';
import { useState } from 'react';

export default function Answers({ answer }) {
  let loaded = Object.keys(answer).map((element) => {
    return (
      <div>
        <h2>
          A:
        </h2>
        <p>{answer[element].body}</p>
        <div>
          by {answer[element].answerer_name}
          - Seller,
          {moment(answer[element].question_date).format('MMMM, D, YYYY')}
          |
        </div>
        <div>
          Helpful? Yes: (
          {answer[element].helpfulness}
          ) | Report
        </div>
      </div>
    )
  });

  const [current, setCurrent] = useState([loaded[0], loaded[1]]);

  let handleClick = () => {
    setCurrent(loaded);
  };
  return (
    <div>
  <div>
    {current.map((element) => {
      return element;
    })}
  </div>
  <div>
    <input type="button" value="More Answers" onClick={handleClick}></input>
  </div>
  </div>
  )
}
