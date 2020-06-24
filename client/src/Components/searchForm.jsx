/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

class searchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <form action="/api/answers" method="get">
        <input type="text" placeholder="Have a question?Search for answers" maxLength="150" size="110"></input>
      </form>
    );
  }
}

export default searchForm;
