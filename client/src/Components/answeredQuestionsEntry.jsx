import React from 'react';
import mongoose from 'mongoose';
import VoteArrows from './voteArrows.jsx';

const Entries = (props) => (
  <li>
    <VoteArrows votes={props.entry.answers[0].votes}/>
    Question:
    { props.entry.body }
    <br />
    Answer: { props.entry.answers[0].answer }
    <br />
    By {props.entry.answers[0].name} on {props.entry.createdAt}
  </li>
);

export default Entries;
