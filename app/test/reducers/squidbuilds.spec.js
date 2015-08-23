import expect from 'expect';
import squidbuilds from '../../reducers/squidbuilds';
import * as types from '../../constants/ActionTypes';

describe('squidbuilds reducer', () => {

  it('should handle initial state', () => {
    expect(
      squidbuilds(undefined, {})
    ).toEqual({
      selected: []
    });
  });

  it('should handle DESELECT_ALL', () => {
    expect(
      squidbuilds({
        selected: ["Splattershot"]
      }, {
        type: types.DESELECT_ALL
      })
    ).toEqual({
      selected: []
    });
  });

});
