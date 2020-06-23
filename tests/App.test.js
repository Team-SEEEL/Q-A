import App from '../client/src/Components/App.jsx';

describe('<App />', () => {

  it('Should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should render 12 question components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).to.have.lengthOf(12);
  });

  it('Should render children when passed in', () => {
    const wrapper = shallow((
      <App>
        <div className='unique'></div>
      </App>
    ));
    expect(wrapper.contains(<div className='unique' />).to.equal(true));
  });

  it('Should simulate click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<App onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

  it('Should simulate typing', () => {
    const onKeystroke = sinon.spy();
    const wrapper = shallow(<App onKeystroke={onKeystroke} />);
    wrapper.find('form').simulate(change);
    expect(onKeystroke).to.have.property('callCount', 1);
  });

  it('Should change state when onKeystroke() is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().onKeystroke(event);
    expect(wrapper.state()).toEqual({ text: event.target });
  });

  it('Should update a state in a callback', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ question: 'new' }, () => {
      expect(wrapper.state()).toEqual({ question: 'new' });
    });
  });

});