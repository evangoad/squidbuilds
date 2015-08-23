import Immutable, { Map, List } from 'immutable';
import { WeaponData } from '../constants/Data';
import * as types from '../constants/ActionTypes';

let state = {
  selected: [],
  WeaponData,
};

const initialState = Immutable.fromJS(state);

function selected(state = List.of(), action) {
  switch (action.type) {
  case types.SELECT_EQUIPMENT:
    return state.push(action.equipment);
  case types.DESELECT_EQUIPMENT:
    return state.filter(num => num !== action.equipment);
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
