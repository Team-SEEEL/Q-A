import React from 'react';
import styled from 'styled-components';

class NavTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
    };
  }

  render() {
    return (
      <div>
        <button type="button">All</button>
        <button type="button">Product Information</button>
        <button type="button">Customer Q&amp;A&apos;s</button>
        <button type="button">Customer Reviews</button>
      </div>
    );
  }
}

export default NavTabs;
