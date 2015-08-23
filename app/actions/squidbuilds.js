import * as types from '../constants/ActionTypes'

export function select_equipment(equipment) {
  return { type: SELECT_EQUIPMENT, equipment }
}

export function deselect_equipment(equipment) {
  return { type: DESELECT_EQUIPMENT, equipment }
}

export function deselect_all() {
  return { type: DESELECT_ALL }
}
