import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Home from './Home';
import { exact } from 'prop-types';


describe('Home component', () => {
    fit('render without props', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    fit('render with props', () => {
        let wrapper = shallow(<Home />);
        wrapper.setProps({ name: 'abc' });
        expect(wrapper).toMatchSnapshot();
    })
    fit('Set state', () => {
        let wrapper = shallow(<Home />);
        wrapper.setState({ age: 28 });
        expect(wrapper).toMatchSnapshot();
    })
    fit('update state using function check state', () => {
        let wrapper = shallow(<Home />);
        let wrapperInstance = wrapper.instance()
        wrapperInstance.setAge(50);
        expect(wrapper.find('.age').text()).toEqual('50')
    })
    fit('update state using function', () => {
        let wrapper = shallow(<Home />);
        wrapper.setState({ age: 28 });
        expect(wrapper.find('.age').text()).toEqual('28')
        let wrapperInstance = wrapper.instance()
        wrapperInstance.setAge(50);
        expect(wrapper.find('.age').text()).toEqual('50')
    })

    fit('update state on 1st button click', () => {
        let wrapper = shallow(<Home />);
        let button = wrapper.find('button').first();
        button.simulate('click');
        expect(wrapper.find('.age').text()).toEqual('100')
    })
    fit('update state on 2nd button click', () => {
        let wrapper = shallow(<Home />);
        let button = wrapper.find('button').at(1);
        button.simulate('click');
        expect(wrapper.find('.age').text()).toEqual('200')
    })
});