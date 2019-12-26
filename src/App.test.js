import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import { exact } from 'prop-types';


describe('App component', () => {
  it('Renders without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('Renders with props', () => {
    const props = {
      showLink: true
    }
    const div = document.createElement('div');
    ReactDOM.render(<App {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('Renders hide link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/hide link/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('Renders show link', () => {
    const props = {
      showLink: true
    }
    const { getByText } = render(<App {...props} />);
    const linkElement = getByText(/show link/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('Renders when state counter value with 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Count : 0');
  });
  it('Renders when state counter value is increased when button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Count : 1');
  })
  it('Renders when state is decremented', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.decrement');
    incrementBtn.simulate('click');
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Count : -1');
  })
  it('Renders when state is reset', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.reset');
    incrementBtn.simulate('click');
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Count : 0');
  })
  it('Renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
})