import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Weapon from './Weapon';

class EquipmentRow extends Component {
  render() {
    return (
      <div
        className='equipment-row'
      >
        {this._renderEquips()}
      </div>
    );
  }

  _renderEquips() {
    const { equipment, selectedEquipment } = this.props;

    let equips = equipment.map((equip, index) => {
      let selected = (selectedEquipment === index);

      return (
        <Weapon
          equipment={equip.name}
          key={index}
          onDeselected={() =>
            this.props.onDeselected(index)
          }
          onSelected={() =>
            this.props.onSelected(index)
          }
          selected={selected}
        />
      );
    });

    return equips;
  }

}

EquipmentRow.propTypes = {
  equipment: PropTypes.array.isRequired,
  onDeselected: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  selectedEquipment: PropTypes.number,
};

EquipmentRow.displayName = 'EquipmentRow';

export default EquipmentRow;
