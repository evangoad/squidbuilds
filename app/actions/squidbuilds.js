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

export function selectClothing(equipment) {
  return { type: types.SELECT_CLOTHING, equipment };
}

export function deselectClothing(equipment) {
  return { type: types.DESELECT_CLOTHING, equipment };
}

export function selectHeadgear(equipment) {
  return { type: types.SELECT_HEADGEAR, equipment };
}

export function deselectHeadgear(equipment) {
  return { type: types.DESELECT_HEADGEAR, equipment };
}

export function deselectAll() {
  return { type: types.DESELECT_ALL };
}
