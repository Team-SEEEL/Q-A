import React from 'react';
import mongoose from 'mongoose';
import styled from 'styled-components';
import VoteArrows from './voteArrows.jsx';

const StyledListItem = styled.li`
  width: 70%;
  height: 100px;
  padding: 10px;
  font-family: Arial;
`;

const StyledRight = styled.div`
  margin-left: 10%;
  height: 50px;
`;

const StyledBox = styled.div`
  float: left;
`;

const StyledBody = styled.div`
  margin-left: 14%;
`;

class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
    this.highlighter = this.highlighter.bind(this);
  }

  highlighter(text, highlight) {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {' '}
        { parts.map((part, i) => (
          <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { backgroundColor: 'yellow' } : {}}>
            { part }
          </span>
        ))}
        {' '}

      </span>
    );
  }

  render() {
    if (this.props.search !== undefined) {
      return (
        <StyledListItem>
          <VoteArrows votes={this.props.entry.answers[0].votes} voteID={this.props.entry.answers[0]._id} questID={this.props.entry._id} />
          <StyledRight>
            <StyledBox>
              <strong>Question:</strong>
              <br />
              <br />
              <strong>Answer:</strong>
            </StyledBox>
            <StyledBody>
              <a href="#">{ this.highlighter(this.props.entry.body, this.props.search) }</a>
              <br />
              <br />
              <span>{ this.highlighter(this.props.entry.answers[0].answer, this.props.search) }</span>
              <br />
              By
              {' '}
              {this.props.entry.answers[0].name}
              {' '}
              on
              {' '}
              {this.props.entry.answers[0].time}
              <br />
            </StyledBody>
          </StyledRight>
        </StyledListItem>
      );
    }
    return (
      <StyledListItem>
        <VoteArrows votes={this.props.entry.answers[0].votes} voteID={this.props.entry.answers[0]._id} questID={this.props.entry._id} />
        <StyledRight>
          <StyledBox>
            <strong>Question:</strong>
            <br />
            <br />
            <strong>Answer:</strong>
          </StyledBox>
          <StyledBody>
            <a href="#">{ this.props.entry.body }</a>
            <br />
            <br />
            <span>{ this.props.entry.answers[0].answer }</span>
            <br />
            By
            {' '}
            {this.props.entry.answers[0].name}
            {' '}
            on
            {' '}
            {this.props.entry.answers[0].time}
            <br />
          </StyledBody>
        </StyledRight>
      </StyledListItem>
    );
  }
}

export default Entries;
