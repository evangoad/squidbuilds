import assert from 'assert';
import Immutable, { Map, List } from 'immutable';
import squidbuilds from '../../reducers/squidbuilds';
import { WeaponData, ShoeData } from '../../constants/Data';
import * as types from '../../constants/ActionTypes';

describe('squidbuilds reducer', () => {

  let state = {
    selected: {
      weapon: undefined,
      shoe: undefined
    }
  };

  const initialState = Immutable.fromJS(state);

  it('should handle initial state', () => {
    let result = squidbuilds(undefined, {});

    assert(
      Immutable.is(
        initialState.get('selected'),
        result.get("selected")
      )
    );
  });

  it('should handle DESELECT_ALL', () => {
    let result = squidbuilds(undefined, { type: types.DESELECT_ALL, });

    assert(
      Immutable.is(
        initialState.get('selected'),
        result.get('selected')
      )
    );
  });

  it('should handle DESELECT_ALL with something selected', () => {
    let result = squidbuilds(
      initialState.merge(Map({
        selected: Map({weapon: 0}),
      })), {
        type: types.DESELECT_ALL,
      }
    );

    assert(Immutable.is(initialState, result));
  });

  it('should handle SELECT_WEAPON with nothing selected', () => {
    let result = squidbuilds(initialState, {
      type: types.SELECT_WEAPON,
      equipment: 0,
    });
    let selected = result.get('selected').get('weapon');

    assert(selected === 0);
  });

  it('should handle SELECT_WEAPON with something selected', () => {
    let state = initialState.merge(Map({
      selected: Map({weapon: 0})
    }));

    let result = squidbuilds(state, {
      type: types.SELECT_WEAPON,
      equipment: 1,
    });

    let selected = result.get('selected').get('weapon');

    assert(selected === 1);
  });

  it('should handle DESELECT_WEAPON with nothing selected', () => {
    let result = squidbuilds(initialState, {
      type: types.DESELECT_WEAPON,
      equipment: 0,
    });
    let selected = result.get('selected').get('weapon');

    assert(selected === undefined);
  });

  it('should handle DESELECT_WEAPON with something selected', () => {
    let state = initialState.merge(Map({
      selected: Map({weapon: 0})
    }));

    let result = squidbuilds(state, {
      type: types.DESELECT_WEAPON,
      equipment: 1,
    });

    let selected = result.get('selected').get('weapon');

    assert(selected === undefined);
  });

  it('should handle SELECT_SHOE with nothing selected', () => {
    let result = squidbuilds(initialState, {
      type: types.SELECT_SHOE,
      equipment: 0,
    });
    let selected = result.get('selected').get('shoe');

    assert(selected === 0);
  });

  it('should handle SELECT_SHOE with something selected', () => {
    let state = initialState.merge(Map({
      selected: Map({shoe: 0})
    }));

    let result = squidbuilds(state, {
      type: types.SELECT_SHOE,
      equipment: 1,
    });

    let selected = result.get('selected').get('shoe');

    assert(selected === 1);
  });

  it('should handle DESELECT_SHOE with nothing selected', () => {
    let result = squidbuilds(initialState, {
      type: types.DESELECT_SHOE,
      equipment: 0,
    });
    let selected = result.get('selected').get('shoe');

    assert(selected === undefined);
  });

  it('should handle DESELECT_SHOE with something selected', () => {
    let state = initialState.merge(Map({
      selected: Map({shoe: 0})
    }));

    let result = squidbuilds(state, {
      type: types.DESELECT_SHOE,
      equipment: 1,
    });

    let selected = result.get('selected').get('shoe');

    assert(selected === undefined);
  });
});
