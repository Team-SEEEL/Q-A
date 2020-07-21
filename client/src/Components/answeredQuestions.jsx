/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import Entries from './answeredQuestionsEntry.jsx';

const StyledList = styled.ul`
  padding-top: 20px;
  list-style-type: none;
`;

const StyledShowMore = styled.button`
  margin-left: 14.3%;
  &:hover {
    background: silver;
  }
  :focus {
    outline: none;
    border-color: orange orange orange orange;
  }
  cursor: pointer;
  border: none;
  background: rgb(230,230,230);
  background: linear-gradient(0deg, rgba(230,230,230,1) 0%, rgba(247,247,247,1) 100%);
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  z-index: 1;
  position: sticky;
  border-radius: 5px;
`;

class answeredQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      shown: 4,
    };
    this.handleCLick = this.handleClick.bind(this);
    this.alwaysPositive = this.alwaysPositive.bind(this);
  }

  alwaysPositive(min) {
    const { shown } = this.state;
    let diff = min - shown;
    if (diff <= 0) {
      diff = 0;
    } else {
      return diff;
    }
    return diff;
  }

  handleClick() {
    this.setState((prevState) => ({ shown: prevState.shown + 4 }));
    // window.scrollTo(0, this.myRef.current.offsetTop);
  }

  render() {
    const { shown } = this.state;
    const { questions, searched } = this.props;
    const shownEntries = shown;
    const total = questions.length;
    if (questions.length === 0) {
      return (
        <StyledList>
          There are no questions for this product.
        </StyledList>
      );
    }
    return (
      <StyledList ref={this.myRef}>
        {
          questions.slice(0, shownEntries).map((answered) => (
            <Entries entry={answered} search={searched} />
          ))
        }
        <StyledShowMore onClick={() => this.handleClick()}>
          See more answered questions (
          {this.alwaysPositive(total)}
          )
        </StyledShowMore>
      </StyledList>
    );
  }
}

answeredQuestions.propTypes = {
  questions: PropTypes.array,
  searched: PropTypes.string,
};

export default answeredQuestions;
