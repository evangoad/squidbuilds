import assert from 'assert';
import Immutable, { Map, List } from 'immutable';
import squidbuilds from '../../reducers/squidbuilds';
import { WeaponData } from '../../constants/Data';
import * as types from '../../constants/ActionTypes';

describe('squidbuilds reducer', () => {

  let initialState = Map({
    selected: List.of(),
    WeaponData
  });

  it('should handle initial state', () => {
    let result = squidbuilds(undefined, {});

    assert(Immutable.is(initialState, result));
  });

  it('should handle DESELECT_ALL', () => {
    let result = squidbuilds(
      initialState.merge(Map({
        selected: List.of("Splattershot")
      })), {
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

  it('should handle DESELECT_EQUIPMENT with something selected', () => {
    let state = initialState.merge(Map({
      selected: List.of("Splattershot")
    }));
    let result = squidbuilds(state, {
      type: types.DESELECT_EQUIPMENT,
      equipment: "Splattershot"
    });
    let selected = result.get("selected");

    assert(!selected.includes("Splattershot"));
  });

});
