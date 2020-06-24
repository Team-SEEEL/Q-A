/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import SearchForm from './searchForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      questions: [],
    };
  }

  render() {
    return (
      <div className="main-container">
        <h2>Customer questions & answers</h2>
        <SearchForm />
        {/* <VoteArrows />
        <AnsweredQuestions /> */}
      </div>
    );
  }
}

export default App;
