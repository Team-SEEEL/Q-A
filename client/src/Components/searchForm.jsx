/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import Icon from '../../../public/searchIcon.png';

const StyledIcon = styled.input`
  top: 98px;
  right: 96%;
  z-index: 2;
  position: absolute;
  background-image: url(${Icon});
  background-size: 20px 20px;
  height: 20px;
  width: 20px;
  border: none;
  padding-top: 5px;
`;

const StyledForm = styled.form`
  height: 30px;
  padding: 15px 20px;
`;

const Input = styled.input`
  z-index: 1;
  position: relative;
  display: inline-flex;
  padding: 0.5em;
  padding-left: 50px;
`;

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
      <StyledForm action="/api/answers" method="get">
        {/* <input type="image" id="icon" alt="searchIcon" src={Icon} /> */}
        <StyledIcon type="submit" value="" />
        <Input type="text" id="search" name="body" value={this.state.body} placeholder="Have a question?Search for answers" maxLength="150" size="110" onChange={this.handleChange} />
      </StyledForm>
    );
  }
}

export default searchForm;
