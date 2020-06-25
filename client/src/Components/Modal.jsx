import React from 'react';
import styled from 'styled-components';

const Modal = ({ show, handleClose }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  if (show === false) {
    return null;
  }
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose}>close</button>
        <p>MODAL SHOWN</p>
      </section>
    </div>
  );
};

export default Modal;
