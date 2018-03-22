import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Submit from './Submit';

function setup(saving){
    let props = {
        saving: saving, 
        onSave: () => {}
    };
    
    let renderer = TestUtils.createRenderer();
    renderer.render(<Submit {...props}/>);
    let output = renderer.getRenderOutput();

    return{
        props,
        output,
        renderer
    };
}

function getNodeByType(type, node){
    function check(result, node){
        if (result || !node) {
            return result;
        }

        return node.type === type && node || check(null, node.props.children);
    }

    return check(null, node);
}

describe('Submit via React Test Utils', () => {
    it('save button is labeled "Save" when not saving', () => {
        const {output} = setup(false);
        const submitButton = getNodeByType('input', output);
        expect(submitButton.props.value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const {output} = setup(true);
        const submitButton = getNodeByType('input', output);
        expect(submitButton.props.value).toBe('Saving...');
    });
});