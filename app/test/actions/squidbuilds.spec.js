import assert from 'assert';
import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/squidbuilds';

describe('squidbuilds actions', () => {

  it('selectShoe should create SELECT_SHOE action', () => {
    const action = actions.selectShoe(0);

    assert.deepEqual(
      action,
      { type: types.SELECT_SHOE, equipment: 0 }
    );
  });

  it('deselectShoe should create DESELECT_SHOE action', () => {
    const action = actions.deselectShoe(0);

    assert.deepEqual(
      action,
      { type: types.DESELECT_SHOE, equipment: 0 }
    );
  });

  it('selectWeapon should create SELECT_WEAPON action', () => {
    const action = actions.selectWeapon(0);

    assert.deepEqual(
      action,
      { type: types.SELECT_WEAPON, equipment: 0 }
    );
  });

  it('deselectWeapon should create DESELECT_WEAPON action', () => {
    const action = actions.deselectWeapon(0);

    assert.deepEqual(
      action,
      { type: types.DESELECT_WEAPON, equipment: 0 }
    );
  });

  it('deselectShoe should create DESELECT_SHOE action', () => {
    const action = actions.deselectShoe(0);

    assert.deepEqual(
      action,
      { type: types.DESELECT_SHOE, equipment: 0 }
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
