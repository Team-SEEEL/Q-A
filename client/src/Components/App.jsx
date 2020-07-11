/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import SearchForm from './searchForm.jsx';
import AnsweredQuestions from './answeredQuestions.jsx';
import NavTabs from './navigationTabs.jsx';
import PostQuestion from './postQuestion.jsx';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  visibility: ${props => props.view !== 'loading' ? 'hidden' : 'visible'};
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  margin-left: 500px;
  border-top : 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const StyledContainer = styled.div`
  border-top : 1px solid grey;
  display: flex;
  flex-direction: column;
  width: 100%;
  scroll-behavior: smooth;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      view: 'home',
      questions: [],
      filteredQuestions: [],
      page: '',
    };
    this.searchQuestions = this.searchQuestions.bind(this);
  }

  componentDidMount() {
    let index;
    if (window.location.pathname === '/') {
      index = Math.floor(Math.random() * 100);
    } else {
      index = parseInt(window.location.pathname.slice(1));
    }
    axios.get(`/questions/api/products/${index}`)
      .then((response) => {
        this.setState({ questions: response.data, page: index });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  searchQuestions(query) {
    this.setState({ filteredQuestions: [] });
    let searchResults = [...this.state.questions];
    query = query.toLowerCase();
    const { questions, text, view } = this.state;
    searchResults = searchResults.filter((question) => question.answers.every((answer) => answer.answer.toLowerCase().includes(query)) || question.body.toLowerCase().includes(query));
    this.setState({ text: query, view: 'loading' });
    setTimeout(() => {
      if (this.state.text.length === 0) {
        this.setState({ filteredQuestions: searchResults, view: 'home' });
      } else {
        this.setState({ filteredQuestions: searchResults, view: 'search' });
      }
    }, 1200);
  }

  render() {
    if (this.state.view === 'search') {
      return (
        <div className="main-container">
          <StyledContainer>
            <h2>Customer questions & answers</h2>
            <SearchForm search={this.searchQuestions} value={this.state.text} />
            <NavTabs searchBody={this.state.text} />
            <AnsweredQuestions questions={this.state.filteredQuestions} searched={this.state.text} view={this.state.view} />
            <PostQuestion post={this.postQuestion} />
          </StyledContainer>
        </div>
      );
    }
    return (
      <div className="main-container">
        <StyledContainer>
          <h2>Customer questions & answers</h2>
          <SearchForm search={this.searchQuestions} value={this.state.text} />
          <Loader view={this.state.view} />
          <AnsweredQuestions questions={this.state.questions} />
          <PostQuestion post={this.postQuestion} page={this.state.page} />
        </StyledContainer>
      </div>
    );
  }
}

export default App;
