import expect from 'expect';
import {authorsFormattedForDropdown} from "./selectors";

describe ('Author selectors', () => {
  describe ('authors formatted for dropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
        const authors = [
          {Id: 'cory-house', FirstName: 'Cory', LastName: 'House'},
          {Id: 'scott-allen', FirstName: 'Scott', LastName: 'Allen'}
        ];
        const expected = [
          {value: 'cory-house', text: 'Cory House'},
          {value: 'scott-allen', text: 'Scott Allen'}
        ];
        expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});