import React from 'react';
import Overview from './Overview/Overview.jsx';
import QAndAs from './QuestionsAndAnswers/QAndAs.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import Suggestions from './Suggestions/Suggestions.jsx';

function App() {
  return (
    <div>
      <Overview />
      <QAndAs />
      <RatingsAndReviews />
      <Suggestions />
    </div>
  );
}

export default App;
