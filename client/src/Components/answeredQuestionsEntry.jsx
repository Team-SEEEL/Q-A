import React from 'react';

const Entries = (props) => (
  <li>
    Question:
    { props.entry.body }
    <br />
  </li>
);

export default Entries;
