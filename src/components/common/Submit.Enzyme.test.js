import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Submit from './Submit';

function setup(saving){
    let props = {
        onSave: () => {},
        saving: saving
    };
    
    return shallow(<Submit {...props}/>);
}

describe('Submit via Enzyme', () => {
    it('save button is labeled "Save" when not saving', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." when not saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});