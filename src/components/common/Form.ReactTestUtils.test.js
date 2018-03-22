import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Form from './Form';

function setup(saving){
    let props = {
        title: '',
        children: []
    };
    let renderer = TestUtils.createRenderer();
    renderer.render(<Form {...props}/>);
    let output = renderer.getRenderOutput();

    return{
        props,
        output,
        renderer
    };
}

describe('Form via React Test Utils', () => {
    it('renders form and h2', () => {
        const {output} = setup();
        expect(output.type).toBe('form');
        let [ h2 ] = output.props.children;
        expect(h2.type).toBe('h2');
    });
});