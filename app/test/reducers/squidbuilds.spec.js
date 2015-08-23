import assert from 'assert';
import Immutable, { Map, List } from 'immutable';
import squidbuilds from '../../reducers/squidbuilds';
import * as types from '../../constants/ActionTypes';

describe('squidbuilds reducer', () => {

  let initialState = Map({
    selected: List.of()
  });

  it('should handle initial state', () => {
    let result = squidbuilds(undefined, {});

    assert(Immutable.is(initialState, result));
  });

  it('should handle DESELECT_ALL', () => {
    let result = squidbuilds(
      Map({
        selected: List.of("Splattershot")
      }), {
        type: types.DESELECT_ALL
      }
    );

    assert(Immutable.is(initialState, result));
  });

  it('should handle SELECT_EQUIPMENT with nothing selected', () => {
    let result = squidbuilds(initialState, {
      type: types.SELECT_EQUIPMENT,
      equipment: "Splattershot"
    });
    let selected = result.get("selected");

    assert(selected.includes("Splattershot"));
  });

  it('should handle SELECT_EQUIPMENT with something selected', () => {
    let state = Map({
      selected: List.of("Splattershot Jr.")
    });
    let result = squidbuilds(state, {
      type: types.SELECT_EQUIPMENT,
      equipment: "Splattershot"
    });
    let selected = result.get("selected");

    assert(selected.includes("Splattershot"));
  });

});
