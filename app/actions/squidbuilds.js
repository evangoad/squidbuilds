import * as types from '../constants/ActionTypes'

export function selectEquipment(equipment) {
  return { type: types.SELECT_EQUIPMENT, equipment }
}

export function deselectEquipment(equipment) {
  return { type: types.DESELECT_EQUIPMENT, equipment }
}

export function deselectAll() {
  return { type: types.DESELECT_ALL }
}
