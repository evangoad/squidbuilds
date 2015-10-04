import Immutable, { Map, List } from 'immutable';
import { WeaponData, ShoeData } from '../constants/Data';
import * as types from '../constants/ActionTypes';

let state = {
  selected: { 
    weapon: undefined,
    shoe: undefined,
  },
  WeaponData,
  ShoeData,
};

const initialState = Immutable.fromJS(state);
const initialSelected = initialState.get('selected');

function selected(state = initialSelected, action) {
  switch (action.type) {
  case types.SELECT_WEAPON:
    return state.set('weapon', action.equipment);
  case types.DESELECT_WEAPON:
    return state.set('weapon', undefined);
  case types.SELECT_SHOE:
    return state.set('shoe', action.equipment);
  case types.DESELECT_SHOE:
    return state.set('shoe', undefined);
  case types.DESELECT_ALL:
    return initialSelected
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
