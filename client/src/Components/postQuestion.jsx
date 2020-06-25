import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx'

class PostQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
        <main>
          <Modal show={this.state.show} handleClose={this.hideModal} />
          <span>Don&apos;t see the answer you&apos;re looking for?</span>
          <button id="postQuestion" onClick={this.showModal}>Post Question</button>
        </main>
    );
  }
}

export default PostQuestion;
