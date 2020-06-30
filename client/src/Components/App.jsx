/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchForm from './searchForm.jsx';
import AnsweredQuestions from './answeredQuestions.jsx';
import NavTabs from './navigationTabs.jsx';
import PostQuestion from './postQuestion.jsx';
import Votes from './voteArrows.jsx';

const StyledContainer = styled.div`
  border-top : 1px solid grey;
`;

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
        this.setState({ text: query, questions: response.data, view: 'search' });
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
        <div className="main-container">
          <StyledContainer>
            <h2>Customer questions & answers</h2>
            <SearchForm search={this.searchQuestions} value={this.state.text}/>
            <NavTabs />
            <AnsweredQuestions questions={this.state.questions} searched={this.state.text}/>
          </StyledContainer>
            <PostQuestion post={this.postQuestion} />
        </div>
      );
    }
    return (
      <StyledContainer>
        <h2>Customer questions & answers</h2>
        <SearchForm search={this.searchQuestions} />
        <AnsweredQuestions questions={this.state.questions} />
      </StyledContainer>
    );
  }
}

export default App;
