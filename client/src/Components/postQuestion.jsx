import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';

const Background = styled.div`
  position: fixed;
  margin: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
  z-index: 10;
`;

const BottomBar = styled.div`
  position: relative;
  width: 70%;
  height: 80px;
  background: rgba(0,0,0,0.04);
  bottom: 50px;
  left: 0;
  text-align: left;
  z-index: 0;
`;

const StyledModal = styled.div`
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 500px;
  height: 250px;
  box-shadow: 0 5px 10px 2px rgba(195,192,192,.5);
  padding: 20px;
  text-align: left;
  border-radius: 12px;
  z-index: 2000;
  transition: all 0.4s ease;
`;

const StyledClose = styled.button`
  position: absolute;
  background-color: transparent;
  right: 5px;
  top: 5px;
  cursor: pointer;
  border: none;
  font-size: 15px;
`;

const StyledToggle = styled.button`
  :focus {
    outline: none;
  }
  cursor: pointer;
  background-color: blue;
  border: none;
  color: white;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  top: 10px;
  left: 350px;
  z-index: 1;
  position: relative;
  border-radius: 2px;
`;

const TopBar = styled.div`
  width: 100%;
  left: 0;
  position: absolute;
  top: 0;
  background: rgb(253,70,31);
  background: linear-gradient(196deg, rgba(253,70,31,1) 24%, rgba(253,96,31,1) 32%, rgba(253,118,31,1) 42%, rgba(253,133,31,1) 53%, rgba(253,133,31,1) 72%, rgba(252,172,69,1) 100%);
  z-index: 1;
  height: 30px;
  text-indent: 5%;
  border-radius: 12px 12px 0 0;
`;

const StyledTextArea = styled.textarea`
  position: absolute;
  top: 50px;
  left: 18px;
`;

const StyledTitle = styled.span`
  position: absolute;
  width: 50%;
  top: 5px;
  left: 0;
`;

const StyledCloseButton = styled.button`
  height: 45px;
  width: 60px;
  position: absolute;
  right: 85px;
  bottom: 15px;
`;

const StyledPostButton = styled.button`
  height: 45px;
  width: 60px;
  position: absolute;
  right: 15px;
  bottom: 15px;
  z-index: 1;
`;

const StyledDescript = styled.span`
  position: absolute;
  bottom: 100px;
`;

const Text = styled.span`
  position: relative;
  left: 30px;
  top 30px;
`;

class PostQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <StyledToggle onClick={this.toggleModal}>
          { !showModal ? 'Post your question' : 'Post your question' }
        </StyledToggle>
        {
              showModal ? (
                <Modal>
                  <StyledModal toggle={this.state.showModal}>
                    <TopBar>
                      <StyledTitle><strong>Post your Question</strong></StyledTitle>
                      <StyledClose onClick={this.toggleModal}>
                        x
                      </StyledClose>
                    </TopBar>
                    <StyledTextArea placeholder="Please enter a question." cols="60" rows="4" />
                    <StyledDescript>Your question may be answered by sellers, manufacturers, or customers who purchased this item, who are all part of the Amoozon community.</StyledDescript>
                    <StyledCloseButton onClick={this.toggleModal}>Cancel</StyledCloseButton>
                    <StyledPostButton onClick={this.toggleModal}>Post</StyledPostButton>
                  </StyledModal>
                  <Background onClick={this.toggleModal} />
                </Modal>
              ) : null
            }
        <BottomBar>
          <Text>
            <strong>Don&apos;t see the answer you&apos;re looking for?</strong>
          </Text>
        </BottomBar>
      </div>
    );
  }
}

export default PostQuestion;
