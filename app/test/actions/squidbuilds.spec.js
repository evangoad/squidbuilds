import assert from 'assert';
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions/squidbuilds'

describe('squidbuilds actions', () => {

  it('select_equipment should create SELECT_EQUIPMENT action', () => {
    const action = actions.select_equipment("Splattershot");

    assert.deepEqual(
      action,
      { type: types.SELECT_EQUIPMENT, equipment: "Splattershot" }
    );
  })

  it('deselect_equipment should create DESELECT_EQUIPMENT action', () => {
    const action = actions.deselect_equipment("Splattershot");

    assert.deepEqual(
      action,
      { type: types.DESELECT_EQUIPMENT, equipment: "Splattershot" }
    );
  })

  it('deselect_all should create DESELECT_ALL action', () => {
    const action = actions.deselect_all();

    assert.deepEqual(
      action,
      { type: types.DESELECT_ALL }
    );
  })
});
