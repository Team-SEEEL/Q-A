/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchForm from './searchForm.jsx';
import AnsweredQuestions from './answeredQuestions.jsx';
import NavTabs from './navigationTabs.jsx';
import PostQuestion from './postQuestion.jsx';

const StyledContainer = styled.div`
  border-top : 1px solid grey;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HighLight = styled.span`
  background-color: yellow;
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
    const { questions } = this.state;
    searchResults = searchResults.filter((question) => question.answers.every((answer) => answer.answer.toLowerCase().includes(query)) || question.body.toLowerCase().includes(query));
    this.setState({ filteredQuestions: searchResults, view: 'search', text: query });
  }

  render() {
    if (this.state.view === 'search') {
      return (
        <div className="main-container">
          <StyledContainer>
            <h2>Customer questions & answers</h2>
            <SearchForm search={this.searchQuestions} value={this.state.text} />
            <NavTabs />
            <AnsweredQuestions questions={this.state.filteredQuestions} searched={this.state.text} />
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
          <AnsweredQuestions questions={this.state.questions} />
          <PostQuestion post={this.postQuestion} page={this.state.page} />
        </StyledContainer>
      </div>
    );
  }
}

export default App;
