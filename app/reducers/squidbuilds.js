import Immutable, { Map, List } from 'immutable';
import { WeaponData } from '../constants/Data';
import * as types from '../constants/ActionTypes';

const initialState = Map({
  selected: List.of(),
  WeaponData
})

function selected(state = List.of(), action) {
  switch (action.type) {
  case types.SELECT_EQUIPMENT:
    return state.push(action.equipment);
  case types.DESELECT_EQUIPMENT:
    return state.filter(equipment => equipment !== action.equipment)
  case types.DESELECT_ALL:
    return List.of();
  default:
    return state;
  }
}

export default function squidbuilds(state = initialState, action) {
  return state.merge(
    Map({
      selected: selected(state.get("selected"), action)
    })
  );
}
