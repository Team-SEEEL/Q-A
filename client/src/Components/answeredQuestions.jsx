import React from 'react';
import styled from 'styled-components';
import Entries from './answeredQuestionsEntry.jsx';

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledShowMore = styled.button`
  margin-top: 20px;
  margin-left: 16.5%;
`;

class answeredQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: 4,
    };
    this.handleCLick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ shown: this.state.shown + 4 });
  }

  render() {
    const shownEntries = this.state.shown;
    if (this.props.questions.length === 0) {
      return (
        <StyledList>
          There are no questions for this product.
        </StyledList>
      );
    }
    return (
      <StyledList>
        {
          this.props.questions.slice(0, shownEntries).map((answered) => (
            <Entries entry={answered} search={this.props.searched} />
          ))
        }
        <StyledShowMore onClick={() => this.handleClick()}>
          See more answered questions (
          {this.props.questions.length - shownEntries}
          )
        </StyledShowMore>
      </StyledList>
    );
  }
}

export default answeredQuestions;
