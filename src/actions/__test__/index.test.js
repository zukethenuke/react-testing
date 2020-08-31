import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveCommet', () => {
    let action;
    beforeEach(() => {
        action = saveComment({ comment: 'new comment' });
    })

    it('has the correct type', () => {
        expect(action.type).toEqual(SAVE_COMMENT);
    })  
    
    it('has the correct payload', () => {
        expect(action.payload).toEqual({ comment: 'new comment' });
    })
})
