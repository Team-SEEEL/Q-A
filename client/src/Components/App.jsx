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
      <form>Have a question? Search for answers</form>
    );
  }
}

export default App;
