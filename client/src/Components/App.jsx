/* eslint-disable no-console */
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
  visibility: ${(props) => (props.view !== 'loading' ? 'hidden' : 'visible')};
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
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    let index;
    if (window.location.pathname === '/') {
      index = Math.floor(Math.random() * 100);
    } else {
      // eslint-disable-next-line radix
      index = parseInt(window.location.pathname.slice(1));
    }
    axios.get(`/questions/api/products/${index}`)
      .then((response) => {
        this.setState({ questions: response.data, page: index });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  changeView(options) {
    this.setState({ view: options });
  }

  searchQuestions(query) {
    const { questions } = this.state;
    this.setState({ filteredQuestions: [] });
    let searchResults = [...questions];
    query = query.toLowerCase();
    searchResults = searchResults.filter((question) => question.answers.every((answer) => answer.answer.toLowerCase().includes(query)) || question.body.toLowerCase().includes(query));
    this.setState({ text: query, view: 'loading' });
    setTimeout(() => {
      if (this.state.text.length === 0) {
        this.setState({ filteredQuestions: searchResults }, () => {
          this.changeView('home');
        });
      } else {
        this.setState({ filteredQuestions: searchResults }, () => {
          this.changeView('search');
        });
      }
    }, 1200);
  }

  render() {
    const {
      view, text, page, questions, filteredQuestions,
    } = this.state;
    if (view === 'search') {
      return (
        <div className="main-container">
          <StyledContainer>
            <h2>Customer questions & answers</h2>
            <SearchForm search={this.searchQuestions} value={text} />
            <NavTabs searchBody={text} nav={this.changeView} />
            <AnsweredQuestions questions={filteredQuestions} searched={text} view={view} />
            <PostQuestion post={this.postQuestion} />
          </StyledContainer>
        </div>
      );
    } if (view === 'info') {
      return (
        <div />
      );
    }
    return (
      <div className="main-container">
        <StyledContainer>
          <h2>Customer questions & answers</h2>
          <SearchForm search={this.searchQuestions} value={text} />
          <Loader view={view} />
          <AnsweredQuestions questions={questions} />
          <PostQuestion post={this.postQuestion} page={page} />
        </StyledContainer>
      </div>
    );
  }
}

export default App;
