/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import axios from 'axios';
import SearchForm from './searchForm.jsx';
import AnsweredQuestions from './answeredQuestions.jsx';
import NavTabs from './navigationTabs.jsx';
import PostQuestion from './postQuestion.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      view: 'home',
      questions: [],
    };
    this.searchQuestions = this.searchQuestions.bind(this);
  }

  searchQuestions(query) {
    axios.get('/api/answers', { params: query })
      .then((response) => {
        console.log(response.data);
        this.setState({ text: query, questions: response.data, view: 'search' });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.questions.length === 0 && this.state.view === 'home') {
      axios.get('/api/questions')
        .then((response) => {
          this.setState({ questions: response.data });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (this.state.view === 'search') {
      return (
        <div>
          <div className="main-container">
            <h2>Customer questions & answers</h2>
            <SearchForm search={this.searchQuestions} />
            <NavTabs />
            <AnsweredQuestions questions={this.state.questions} />
          </div>
          <div className="post">
            <PostQuestion post={this.postQuestion} />
          </div>
        </div>
      );
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
