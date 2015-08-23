import Immutable, { Map, List } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = Map({
  selected: List.of()
})

export default function squidbuilds(state = initialState, action) {
  switch (action.type) {
    case types.DESELECT_ALL:
      return state.set('selected', List.of());
    case types.SELECT_EQUIPMENT:
      let selected = state.get("selected");
      let newSelected = selected.push(action.equipment);

      return state.set('selected', newSelected);
    default:
      return state;
  }
}
