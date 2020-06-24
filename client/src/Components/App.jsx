/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import axios from 'axios';
import SearchForm from './searchForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      questions: [],
    };
    this.searchQuestions = this.searchQuestions.bind(this);
  }

  searchQuestions(query) {
    axios.get('/api/answers', { params: query })
      .then((response) => {
        console.log(response);
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="main-container">
        <h2>Customer questions & answers</h2>
        <SearchForm search={this.searchQuestions} />
        {/* <VoteArrows />
        <AnsweredQuestions questions={}/> */}
      </div>
    );
  }
}

export default App;
