import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Weapon extends Component {
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
        className={classNames(
          'weapon',
          this.props.equipment,
          { selected: this.props.selected})
        }
        onClick={() => this.handleClick()}
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

Weapon.displayName = 'Weapon';
