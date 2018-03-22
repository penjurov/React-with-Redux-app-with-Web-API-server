import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Form from './Form';

function setup(saving){
    let props = {
        title: 'Add course',
        children: []
    };
    
    return shallow(<Form {...props}/>);
}



describe('Form via Enzyme', () => {
    it('renders form and h2', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h2').text()).toEqual('Add course');
    });
});