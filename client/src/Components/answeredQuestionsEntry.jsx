/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VoteArrows from './voteArrows.jsx';

const AuthorNDate = styled.div`
  margin-left: 130px;
  opacity: 0.5;
`;

const StyledAnswer = styled.span`
  display: inline-flex;
  padding-top: 25px;
  position: relative;
  width: 75%;
`;

const StyledBody = styled.div`
  border-left: 1px solid silver;
  margin-left: 8%;
`;

const StyledBox = styled.div`
  float: left;
`;

const StyledListItem = styled.li`
  display: block;
  position: relative;
  width: 85%;
  height: 150px;
  font-family: Arial;
  font-size: 15px;
`;

const StyledQuestion = styled.span`
  display: inline-block;
  position: relative;
  padding-right: 50px;
`;

const StyledRight = styled.div`
  position: relative;
  left: -40px;
  top: -10px;
  height: 50px;
`;

const TitleOne = styled.span`
  display: inline-block;
  float: left;
  clear: left;
  padding-right: 50px;
`;

const TitleTwo = styled.span`
  padding-top: 25px;
  display: inline-block;
  float: left;
  clear: left;
`;

class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.highlighter = this.highlighter.bind(this);
  }

  highlighter(text, highlight) {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {' '}
        { parts.map((part) => (
          <span style={part.toLowerCase() === highlight.toLowerCase() ? { backgroundColor: 'yellow' } : {}}>
            { part }
          </span>
        ))}
        {' '}
      </span>
    );
  }

  render() {
    const { search, entry } = this.props;
    if (search !== undefined) {
      return (
        <StyledListItem>
          <VoteArrows votes={entry.answers[0].votes} voteID={entry.answers[0]._id} questID={entry._id} />
          <StyledRight>
            <StyledBox>
              <TitleOne>
                <strong>Question:</strong>
              </TitleOne>
              <TitleTwo>
                <strong>Answer:</strong>
              </TitleTwo>
            </StyledBox>
            <StyledBody>
              <StyledQuestion>
                <a href="#top">{ this.highlighter(entry.body, search) }</a>
              </StyledQuestion>
              <StyledAnswer>
                { this.highlighter(entry.answers[0].answer, search) }
              </StyledAnswer>
              <AuthorNDate>
                By
                {' '}
                {entry.answers[0].name}
                {' '}
                on
                {' '}
                {entry.answers[0].time}
              </AuthorNDate>
            </StyledBody>
          </StyledRight>
        </StyledListItem>
      );
    }
    return (
      <StyledListItem>
        <VoteArrows votes={entry.answers[0].votes} voteID={entry.answers[0]._id} questID={entry._id} />
        <StyledRight>
          <StyledBox>
            <TitleOne>
              <strong>Question:</strong>
            </TitleOne>
            <TitleTwo>
              <strong>Answer:</strong>
            </TitleTwo>
          </StyledBox>
          <StyledBody>
            <StyledQuestion>
              <a href="#top">{ entry.body }</a>
            </StyledQuestion>
            <StyledAnswer>
              { entry.answers[0].answer }
            </StyledAnswer>
            <AuthorNDate>
              By
              {' '}
              {entry.answers[0].name}
              {' '}
              on
              {' '}
              {entry.answers[0].time}
            </AuthorNDate>
          </StyledBody>
        </StyledRight>
      </StyledListItem>
    );
  }
}

Entries.propTypes = {
  search: PropTypes.string,
  entry: PropTypes.object,
};

export default Entries;
