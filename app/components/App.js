import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/squidbuilds';
import EquipmentRow from './EquipmentRow';

class App extends Component {
  get displayName() {
    return 'App';
  }

  render() {
    const { dispatch, selected, WeaponData } = this.props

    return (
      <div>
        <a onClick={() => dispatch(actions.deselectAll()) }>
          Deselect
        </a>
        <EquipmentRow
          selectedEquipment={selected}
          equipment={WeaponData}
          onSelected={equipment =>
            dispatch(actions.selectEquipment(equipment))
          }
          onDeselected={equipment =>
            dispatch(actions.deselectEquipment(equipment))
          }
        />
      </div>
    );
  }
}

function select(state) {
  return state.toJS()
}

export default connect(select)(App);
