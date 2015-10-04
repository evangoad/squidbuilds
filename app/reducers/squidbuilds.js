import Immutable, { Map } from 'immutable';
import { WeaponData, ShoeData, ClothingData, HeadgearData} from '../constants/Data';
import * as types from '../constants/ActionTypes';

let state = {
  selected: { 
    weapon: undefined,
    shoe: undefined,
    clothing: undefined,
    headgear: undefined,
  },
  WeaponData,
  ShoeData,
  ClothingData,
  HeadgearData,
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
  case types.SELECT_CLOTHING:
    return state.set('clothing', action.equipment);
  case types.DESELECT_CLOTHING:
    return state.set('clothing', undefined);
  case types.SELECT_HEADGEAR:
    return state.set('headgear', action.equipment);
  case types.DESELECT_HEADGEAR:
    return state.set('headgear', undefined);
  case types.DESELECT_ALL:
    return initialSelected;
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
