import { mount, render, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { createSerializer } from 'enzyme-to-json';
import fetch from 'node-fetch';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
configure({ adapter: new Adapter() });

global.React = React;
global.sinon = sinon;
global.fetch = fetch;
global.shallow = shallow;
global.render = render;
global.mount = mount;
