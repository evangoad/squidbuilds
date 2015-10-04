import Immutable, { Map, List } from 'immutable';
import { WeaponData, ShoeData } from '../constants/Data';
import * as types from '../constants/ActionTypes';

let state = {
  selected: ['', ''],
  WeaponData,
  ShoeData,
};

const initialState = Immutable.fromJS(state);

function selected(state = List.of(['', '']), action) {
  switch (action.type) {
  case types.SELECT_WEAPON:
    return state.set(0, action.equipment);
  case types.DESELECT_WEAPON:
    return state.set(0, '');
  case types.SELECT_SHOE:
    return state.set(1, action.equipment);
  case types.DESELECT_SHOE:
    return state.set(1, '');
  case types.DESELECT_ALL:
    return state.clear();
  default:
    return state;
  }
}

export default function squidbuilds(state = initialState, action) {
  return state.merge(
    Map({
      selected: selected(state.get('selected'), action),
    })
  );
}
