import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/squidbuilds';
import EquipmentRow from './EquipmentRow';

class App extends Component {
  render() {
    const { dispatch, selected, WeaponData } = this.props;

    return (
      <div>
        <a onClick={() => dispatch(actions.deselectAll()) }>
          Deselect
        </a>
        <EquipmentRow
          equipment={WeaponData}
          onDeselected={equipment =>
            dispatch(actions.deselectEquipment(equipment))
          }
          onSelected={equipment =>
            dispatch(actions.selectEquipment(equipment))
          }
          selectedEquipment={selected}
        />
      </div>
    );
  }
}

App.propTypes = {
  WeaponData: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
};

App.displayName = 'App';

function select(state) {
  return state.toJS();
}

export default connect(select)(App);
