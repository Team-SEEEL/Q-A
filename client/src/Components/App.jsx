/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchForm from './searchForm.jsx';
import AnsweredQuestions from './answeredQuestions.jsx';

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
        console.log(response.data);
        this.setState({ questions: response.data });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.questions.length === 0) {
      axios.get('/api/questions')
        .then((response) => {
          this.setState({ questions: response.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return (
      <div className="main-container">
        <h2>Customer questions & answers</h2>
        <SearchForm search={this.searchQuestions} />
        <AnsweredQuestions questions={this.state.questions} />
      </div>
    );
  }
}

export default App;
