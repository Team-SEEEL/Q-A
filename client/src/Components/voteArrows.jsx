import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledLeft = styled.div`
  width: 8%;
  height: 80px;
  float: left;
  border-right: solid 1px grey;
  text-align: center;
  position: relative;
  right: 50px;
  bottom: 25px;
`;

const StyledUpArrow = styled.button`
  &:hover {
    border-color: transparent transparent orange transparent;
  }
  :focus {
    border-color: transparent transparent orange transparent;
  }
  padding: 0;
  outline: none;
  background: transparent;
  height: 0;
  width: 0;
  border-style: solid;
  border-width: 0 15px 15px 15px;
  border-color: transparent transparent #a1a1a1 transparent;
  margin-left: 17%;
  margin-bottom: 10px;
`;

const StyledDownArrow = styled.button`
  &:hover {
    border-color: orange transparent transparent transparent;
  }
  :focus {
    border-color: orange transparent transparent transparent;
  }
  padding: 0;
  outline: none;
  background: transparent;
  height: 0;
  width: 0;
  border-style: solid;
  border-width: 15px 15px 0px 15px;
  border-color: #a1a1a1 transparent transparent transparent;
  margin-left: 17%;
  margin-top: 10px;
`;

const StyledVote = styled.span`
  margin-left: 14%;
  text-align: center;
  font-size: medium;
  padding: 5px;
`;

class voteArrows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glow: false,
    };
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  upvote(event) {
    event.preventDefault();
    this.setState({ glow: true });
    if (this.state.glow === true) {
      axios.patch('/questions/api/products/1/questions', { voteID: this.props.voteID, questID: this.props.questID, query: 'up' })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  downvote(event) {
    event.preventDefault();
    this.setState({ glow: true });
    if (this.state.glow === true) {
      axios.patch('/questions/api/products/1/questions', { voteID: this.props.voteID, questID: this.props.questID, query: 'down' })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <StyledLeft>
        <StyledUpArrow onClick={this.upvote} />
        <br />
        <StyledVote>
          {this.props.votes}
        </StyledVote>
        <br />
        <StyledVote>
          votes
        </StyledVote>
        <br />
        <StyledDownArrow onClick={this.downvote} />
      </StyledLeft>
    );
  }
}

export default voteArrows;
