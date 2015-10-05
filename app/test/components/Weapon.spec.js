import expect from 'expect';
import jsdomReact from '../jsdomReact';
import React from 'react/addons';
import Weapon from '../../components/Weapon';

const { TestUtils } = React.addons;

function props() {
  return {
    equipment: 'Test Equipment',
    selected: false,
    onSelected: expect.createSpy(),
    onDeselected: expect.createSpy(),
  };
};

function selectedProps() {
  return {
    equipment: 'Test Equipment',
    selected: true,
    onSelected: expect.createSpy(),
    onDeselected: expect.createSpy(),
  };
};

function setup() {
  return shallowRenderWeapon(props());
}

function selectedSetup() {
  return shallowRenderWeapon(selectedProps());
}

function shallowRenderWeapon(p) {
  let renderer = TestUtils.createRenderer();
  renderer.render(<Weapon {...p} />);
  let output = renderer.getRenderOutput();

  return {
    props: p,
    output,
    renderer,
  };
}


describe('components', () => {
  jsdomReact();

  describe('Weapon', () => {
    it('should render correctly', () => {
      const { output, props } = setup();

      expect(output.type).toBe('div');
      expect(output.props.className).toBe('weapon');

      let name = output.props.children;

      expect(name).toBe(props.equipment);
    });

    it('should call onSelected when clicked', () => {
      let p = props();
      let weapon = TestUtils.renderIntoDocument(
        <Weapon {...p} />
      );

      let div = TestUtils.findRenderedDOMComponentWithTag(
        weapon,
        'div'
      );

      TestUtils.Simulate.click(React.findDOMNode(div));

      expect(p.onSelected.calls.length).toBe(1);
      expect(p.onDeselected.calls.length).toBe(0);
    });

    describe('when selected', () => {
      it('should render correctly', () => {
        const { output, props } = selectedSetup();

        expect(output.type).toBe('div');
        expect(output.props.className).toBe('weapon selected');

        let name = output.props.children;

        expect(name).toBe(props.equipment);
      });

      it('should call onDeselected when clicked', () => {
        let p = selectedProps();

        let weapon = TestUtils.renderIntoDocument(
          <Weapon {...p} />
        );

        let div = TestUtils.findRenderedDOMComponentWithTag(
          weapon,
          'div'
        );

        TestUtils.Simulate.click(React.findDOMNode(div));

        expect(p.onDeselected.calls.length).toBe(1);
        expect(p.onSelected.calls.length).toBe(0);
      });
    });
  });
});
