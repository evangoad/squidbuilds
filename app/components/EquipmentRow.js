import React, { Component, PropTypes } from 'react';
import Weapon from './Weapon'

class EquipmentRow extends Component {
  get displayName() {
    return 'EquipmentRow';
  }

  render() {
    const { equipment, selectedEquipment } = this.props;

    let equips = equipment.map((equip, index) => {
      let selected = (selectedEquipment.indexOf(index) > -1);

      return (
        <Weapon
          equipment={equip.name}
          selected={selected}
          onSelected={() =>
            this.props.onSelected(index)
          }
          onDeselected={() =>
            this.props.onDeselected(index)
          }
        />
      )
    })

    return (
      <div>
        {equips}
      </div>
    )
  }
}

EquipmentRow.propTypes = {
  selectedEquipment: PropTypes.array.isRequired,
  equipment: PropTypes.array.isRequired,
  onSelected: PropTypes.func.isRequired,
  onDeselected: PropTypes.func.isRequired
}

export default EquipmentRow;
