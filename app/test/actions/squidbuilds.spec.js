import assert from 'assert';
import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/squidbuilds';

describe('squidbuilds actions', () => {

  it('selectEquipment should create SELECT_EQUIPMENT action', () => {
    const action = actions.selectEquipment(0);

    assert.deepEqual(
      action,
      { type: types.SELECT_EQUIPMENT, equipment: 0 }
    );
  });

  it('deselectEquipment should create DESELECT_EQUIPMENT action', () => {
    const action = actions.deselectEquipment(0);

    assert.deepEqual(
      action,
      { type: types.DESELECT_EQUIPMENT, equipment: 0 }
    );
  });

  it('deselectAll should create DESELECT_ALL action', () => {
    const action = actions.deselectAll();

    assert.deepEqual(
      action,
      { type: types.DESELECT_ALL }
    );
  });
});
