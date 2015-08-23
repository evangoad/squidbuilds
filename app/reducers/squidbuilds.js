import * as types from '../constants/ActionTypes'

const initialState = {
  selected: []
};

export default function squidbuilds(state = initialState, action) {
  switch (action.type) {
    case types.DESELECT_ALL:
      return Object.assign({}, state, {
        selected: []
      });
    default:
      return state;
  }
}
