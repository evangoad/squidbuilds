import React, { Component, PropTypes } from 'react';
import Weapon from './Weapon';

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

    return (
      <div>
        {equips}
      </div>
    );
  }
}

EquipmentRow.propTypes = {
  equipment: PropTypes.array.isRequired,
  onDeselected: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  selectedEquipment: PropTypes.array.isRequired,
};

export default EquipmentRow;
