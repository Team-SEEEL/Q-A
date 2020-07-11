/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import Icon from '../../../public/searchIcon.png';

const SearchWrapper = styled.div`
  left: 1px;
  position: relative;
  height: 30px;
`;

const StyledIcon = styled.input`
  left: -5px;
  z-index: 2;
  position: relative;
  background-image: url(${Icon});
  background-size: 18px 18px;
  height: 18px;
  width: 18px;
  border: none;
  top: 4px;
`;

const StyledForm = styled.form`
  height: 30px;
  padding: 15px 20px;
`;

const Input = styled.input`
  :focus {
    border-style: solid;
    border-color: orange orange orange orange;
    outline: solid 1.5px orange;
    opacity: 95%;
    box-shadow: 0px 2px 4px 1px #ccc;
  }
  left: -30px;
  z-index: 1;
  position: relative;
  padding: 0.5em;
  padding-left: 30px;
`;

const Xbutton = styled.button`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  position: relative;
  top: 2px;
  left: -58px;
  z-index: 10;
  background: transparent;
  border-color: transparent transparent transparent transparent;
  outline: none;
  font-size: 20px;
`;

class searchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      show: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.props.search(value));
    if (value.length > 0) {
      this.setState({ show: !this.state.show });
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.search('');
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <StyledForm>
        {/* <input type="image" id="icon" alt="searchIcon" src={Icon} /> */}
        <SearchWrapper>
          <StyledIcon type="submit" value="" />
          <Input type="text" id="search" name="body" value={this.props.value} placeholder="Have a question? Search for answers" maxLength="150" size="110" onChange={this.handleChange} />
          <Xbutton show={this.state.show}  onClick={() => this.handleClick()}>x</Xbutton>
        </SearchWrapper>
      </StyledForm>
    );
  }
}

export default searchForm;
