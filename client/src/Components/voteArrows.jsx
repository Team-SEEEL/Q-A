import React from 'react';

const voteArrows = (props) => {
  return (
    <div className="left-element">
      <span>&#8657;</span>
      <br />
      {props.votes}
      <br />
      <span>&#8659;</span>
    </div>
  );
};

export default voteArrows;
