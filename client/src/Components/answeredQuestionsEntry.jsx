import React from 'react';
import mongoose from 'mongoose';
import styled from 'styled-components';
import VoteArrows from './voteArrows.jsx';

const StyledListItem = styled.li`
  ${({ active }) => active && `
    background: yellow;
  `}
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
  ${({ active }) => active && `
    background: yellow;
  `}
  margin-left: 14%;
`;

const Entries = (props) => {
  console.log(props.entry);
  return (
    <StyledListItem>
      <VoteArrows votes={props.entry.answers[0].votes} voteID={props.entry.answers[0]._id} questID={props.entry._id} />
      <StyledRight>
        <StyledBox>
          <strong>Question:</strong>
          <br />
          <br />
          <strong>Answer:</strong>
        </StyledBox>
        <StyledBody>
          <a href="#" id="myText">{ props.entry.body }</a>
          <br />
          <br />
          <span id="myText">{ props.entry.answers[0].answer }</span>
          <br />
          By
          {' '}
          {props.entry.answers[0].name}
          {' '}
          on
          {' '}
          {props.entry.createdAt}
          <br />
        </StyledBody>
      </StyledRight>
    </StyledListItem>
  );
};

export default Entries;
