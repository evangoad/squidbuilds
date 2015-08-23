import React, { Component, PropTypes } from 'react';

export default class Weapon extends Component {
  get displayName() {
    return "Weapon";
  }

  render() {
    return (
      <div
        className={this.props.equipment}
        style={{
          background: this.props.selected ? "red" : "blue"
        }}
        onClick={e => this.handleClick(e)}>
        {this.props.equipment}
      </div>
    )
  }

  handleClick(e) {
    if (this.props.selected) {
      this.props.onDeselected(this.props.equipment)
    } else {
      this.props.onSelected(this.props.equipment)
    }
  }
}

Weapon.propTypes = {
  onSelected: PropTypes.func.isRequired,
  onDeselected: PropTypes.func.isRequired,
  equipment: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
}
