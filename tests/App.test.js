/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import App from '../client/src/Components/App';

const axios = require('axios');

describe('<App />', () => {
  // it('Should return questions with a GET request', () => {
  //   return axios.get('http://localhost:3000/api/questions')
  //     .then((response) => {
  //       expect(response.data).toHaveLength(100);
  //     });
  // });

  it('Should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  xit('Should render 12 question components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).to.have.lengthOf(12);
  });

  xit('Should render children when passed in', () => {
    const wrapper = shallow((
      <App>
        <div className="unique" />
      </App>
    ));
    expect(wrapper.contains(<div className="unique" />).to.equal(true));
  });

  xit('Should simulate click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<App onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

  xit('Should simulate typing', () => {
    const onKeystroke = sinon.spy();
    const wrapper = shallow(<App onKeystroke={onKeystroke} />);
    wrapper.find('form').simulate('change');
    expect(onKeystroke).to.have.property('callCount', 1);
  });

  xit('Should change state when onKeystroke() is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().onKeystroke('event');
    expect(wrapper.state()).toEqual({ text: 'event' });
  });

  it('Should update a state in a callback', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ question: 'new' }, () => {
      expect(wrapper.state()).toEqual({ question: 'new', text: '' });
    });
  });
});
