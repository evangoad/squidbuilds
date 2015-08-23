import Immutable, { Map, List } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = Map({
  selected: List.of()
})

function selected(state = List.of(), action) {
  switch (action.type) {
  case types.DESELECT_ALL:
    return List.of();
  case types.SELECT_EQUIPMENT:
    let newSelected = state.push(action.equipment);

    return newSelected;
  default:
    return state;
  }
}

export default function squidbuilds(state = initialState, action) {
  return Map({
    selected: selected(state.get("selected"), action)
  });
}
