import * as types from '../constants/ActionTypes'

export function select_equipment(equipment) {
  return { type: types.SELECT_EQUIPMENT, equipment }
}

export function deselect_equipment(equipment) {
  return { type: types.DESELECT_EQUIPMENT, equipment }
}

export function deselect_all() {
  return { type: types.DESELECT_ALL }
}
