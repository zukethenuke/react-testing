import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
})

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})

describe('the text area', () => {
    beforeEach(() => {
        wrapped
            .find('textarea')
            .simulate('change', { target: { value: 'new comment' } })
            .update();
    })

    it('can be type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    })
    
    it('clears after a comment is submitted', () => {
        wrapped
            .find('form')
            .simulate('submit')
            .update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
})
