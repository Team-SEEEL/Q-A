/* eslint-disable react/prop-types */
import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('qanda-modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  render() {
    const { children } = this.props;
    return createPortal(children, this.element);
  }
}

export default Modal;
