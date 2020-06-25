import React from 'react';

const voteArrows = (props) => {
  return (
    <select className="arrows">
      <option value="upvote" />
      {props.votes}
      <option value="downvote" />
    </select>
  );
};

export default voteArrows;
