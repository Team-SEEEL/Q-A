/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

class searchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.props.search(value));
  }

  render() {
    return (
      <form action="/api/answers" method="get">
        <input type="text" name="body" value={this.state.body} placeholder="Have a question?Search for answers" maxLength="150" size="110" onChange={this.handleChange} />
      </form>
    );
  }
}

export default searchForm;
