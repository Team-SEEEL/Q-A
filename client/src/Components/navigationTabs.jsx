/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabA = styled.button`
  :focus {
    font-weight: bold;
    border-color: transparent transparent orange transparent;
  }
  border-width: 0 0 3px 0;
  border-style: solid;
  outline: none;
  display: inline-block;
  height: 60px;
  width: 80px;
  padding: 5px;
  background: transparent;
  border-color: transparent transparent transparent transparent;
`;

const TabB = styled.button`
  :focus {
    font-weight: bold;
    border-color: transparent transparent orange transparent;
  }
  border-width: 0 0 3px 0;
  border-style: solid;
  outline: none;
  display: inline-block;
  height: 60px;
  width: 200px;
  padding: 5px;
  background: transparent;
  border-color: transparent transparent transparent transparent;
`;

const TabC = styled.button`
  :focus {
    font-weight: bold;
    border-color: transparent transparent orange transparent;
  }
  border-width: 0 0 3px 0;
  border-style: solid;
  outline: none;
  display: inline-block;
  height: 60px;
  width: 200px;
  padding: 5px;
  background: transparent;
  border-color: transparent transparent transparent transparent;
`;

const TabD = styled.button`
  :focus {
    font-weight: bold;
    border-color: transparent transparent orange transparent;
  }
  border-width: 0 0 3px 0;
  border-style: solid;
  outline: none;
  display: inline-block;
  height: 60px;
  width: 200px;
  padding: 5px;
  background: transparent;
  border-color: transparent transparent transparent transparent;
`;

const TabFolder = styled.div`
  display: block;
  border-bottom: solid silver 1px;
`;

const NavTabs = (props) => (
  <TabFolder>
    <TabA type="button">All</TabA>
    <TabB type="button">Product Information</TabB>
    <TabC type="button">Customer Q&amp;A&apos;s</TabC>
    <TabD type="button">Customer Reviews</TabD>
  </TabFolder>
);

export default NavTabs;
