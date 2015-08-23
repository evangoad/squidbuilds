import React, { Component, PropTypes } from 'react';

export default class Weapon extends Component {
  get displayName() {
    return 'Weapon';
  }

  handleClick() {
    if (this.props.selected) {
      this.props.onDeselected(this.props.equipment);
    } else {
      this.props.onSelected(this.props.equipment);
    }
  }

  render() {
    return (
      <div
        className={this.props.equipment}
        onClick={() => this.handleClick()}
        style={{
          background: this.props.selected ? 'red' : 'blue',
        }}
      >
        {this.props.equipment}
      </div>
    );
  }
}

Weapon.propTypes = {
  equipment: PropTypes.string.isRequired,
  onDeselected: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
