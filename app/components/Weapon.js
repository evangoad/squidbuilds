import React, { Component, PropTypes } from 'react';

export default class Weapon extends Component {
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
    console.log(this.props.selected)
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
