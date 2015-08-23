import React, { Component } from 'react';
import { connect } from 'react-redux';
import squidbuilds from '../reducers/squidbuilds';
import * as actions from '../actions/squidbuilds';
import Weapon from './Weapon';

class App extends Component {
  get displayName() {
    return 'App';
  }

  render() {
    const { dispatch, selected, WeaponData } = this.props

    let weapons = WeaponData.map((equipment) => {
      const weap = equipment.name;
      const weapSelected = (selected.indexOf(weap) > -1);

      return (
        <div>
          <Weapon
            equipment={weap}
            selected={weapSelected}
            onSelected={equipment =>
              dispatch(actions.selectEquipment(equipment))
            }
            onDeselected={equipment =>
              dispatch(actions.deselectEquipment(equipment))
            }
            />
        </div>
      );
    })
    return (
      <div>
        {weapons}
      </div>
    );
  }
}

function select(state) {
  return {
    selected: state.get("selected").toJS(),
    WeaponData: state.get("WeaponData")
  }
}

export default connect(select)(App);
