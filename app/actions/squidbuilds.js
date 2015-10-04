import * as types from '../constants/ActionTypes';

export function selectWeapon(equipment) {
  return { type: types.SELECT_WEAPON, equipment };
}

export function deselectWeapon(equipment) {
  return { type: types.DESELECT_WEAPON, equipment };
}

export function selectShoe(equipment) {
  return { type: types.SELECT_SHOE, equipment };
}

export function deselectShoe(equipment) {
  return { type: types.DESELECT_SHOE, equipment };
}

export function deselectAll() {
  return { type: types.DESELECT_ALL };
}
