/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      question: '',
    };
  }

  render() {
    return (
      <div className="main-container">
        <form>Have a question? Search for answers</form>
      </div>
    );
  }
}

export default App;
