import expect from 'expect';
import jsdomReact from '../jsdomReact';
import React from 'react/addons';
import EquipmentRow from '../../components/EquipmentRow';
import Weapon from '../../components/Weapon';

const { TestUtils } = React.addons;

function props() {
  return {
    equipment: [
      { name: 'Test Equipment 1' },
      { name: 'Test Equipment 2' },
    ],
    onSelected: expect.createSpy(),
    onDeselected: expect.createSpy(),
  }
}

function selectedProps() {
  return {
    selectedEquipment: 0,
    ...props(),
  }
}

function shallowRenderEquipmentRow(p) {
  let renderer = TestUtils.createRenderer();
  renderer.render(<EquipmentRow {...p} />);
  let output = renderer.getRenderOutput();

  return {
    props: p,
    output,
    renderer,
  };
}


function setup() {
  return shallowRenderEquipmentRow(props());
}

function selectedSetup() {
  return shallowRenderEquipmentRow(selectedProps());
}

describe('components', () => {
  jsdomReact();

  describe('EquipmentRow', () => {
    it('should render correctly', () => {
      const { output, props } = setup();

      expect(output.type).toBe('div');
      expect(output.props.className).toBe('equipment-row');

      output.props.children.forEach((child) => {
        expect(child.type).toBe(Weapon);
      });

      let [equip1, equip2] = output.props.children;

      expect(equip1.props.equipment).toBe('Test Equipment 1');
      expect(equip1.props.selected).toBe(false);

      expect(equip2.props.equipment).toBe('Test Equipment 2');
      expect(equip2.props.selected).toBe(false);

      equip1.props.onSelected();
      expect(props.onSelected.calls.length).toBe(1);
      equip1.props.onDeselected();
      expect(props.onDeselected.calls.length).toBe(1);

      equip2.props.onSelected();
      expect(props.onSelected.calls.length).toBe(2);
      equip2.props.onDeselected();
      expect(props.onDeselected.calls.length).toBe(2);
    });

    describe('when an equipment is selected', () => {
      it('should render correctly', () => {
        const { output, props } = selectedSetup();

        let [equip1, equip2] = output.props.children;

        expect(equip1.props.selected).toBe(true);
        expect(equip2.props.selected).toBe(false);
      });
    });
  });
});
