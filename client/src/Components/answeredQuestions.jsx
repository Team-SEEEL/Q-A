import React from 'react';
import Entries from './answeredQuestionsEntry.jsx';

const answeredQuestions = (props) => (
  <ul className="questions">
    {
      props.questions.map((answered) => (
        <Entries entry={answered} />
      ))
    }
  </ul>
);

export default answeredQuestions;
