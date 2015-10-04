import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/squidbuilds';
import EquipmentRow from './EquipmentRow';

class App extends Component {
  render() {
    const {
      dispatch,
      selected,
      WeaponData,
      ShoeData,
      ClothingData,
    } = this.props;

    return (
      <div>
        <a onClick={() => dispatch(actions.deselectAll()) }>
          Deselect All
        </a>
        <EquipmentRow
          equipment={WeaponData}
          onDeselected={equipment =>
            dispatch(actions.deselectWeapon(equipment))
          }
          onSelected={equipment =>
            dispatch(actions.selectWeapon(equipment))
          }
          selectedEquipment={selected.weapon}
        />
        <EquipmentRow
          equipment={ShoeData}
          onDeselected={equipment =>
            dispatch(actions.deselectShoe(equipment))
          }
          onSelected={equipment =>
            dispatch(actions.selectShoe(equipment))
          }
          selectedEquipment={selected.shoe}
        />
        <EquipmentRow
          equipment={ClothingData}
          onDeselected={equipment => 
            dispatch(actions.deselectClothing(equipment))
          }
          onSelected={equipment =>
            dispatch(actions.selectClothing(equipment))
          }
          selectedEquipment={selected.clothing}
          />
      </div>
    );
  }
}

App.propTypes = {
  ClothingData: PropTypes.array.isRequired,
  ShoeData: PropTypes.array.isRequired,
  WeaponData: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
};

App.displayName = 'App';

function select(state) {
  return state.toJS();
}

export default connect(select)(App);
