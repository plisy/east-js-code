import React from 'react/addons';
import Statefull from '../Statefull';


const TestUtils = React.addons.TestUtils;


describe('Statefull', () => {

    it('should be not open by default', () => {

        const accordion = TestUtils.renderIntoDocument(<Statefull />);

        expect(accordion.refs.body).to.equal(void 0);

    });

    it('should open on toggle click', () => {

        const accordion = TestUtils.renderIntoDocument(<Statefull />);

        TestUtils.Simulate.click(accordion.refs.toggle);
        expect(accordion.refs.body).to.not.equal(void 0);

    });

    it('should close on two toggle clicks', () => {

        const accordion = TestUtils.renderIntoDocument(<Statefull />);

        TestUtils.Simulate.click(accordion.refs.toggle);
        TestUtils.Simulate.click(accordion.refs.toggle);
        expect(accordion.refs.body).to.equal(void 0);

    });

    it('should pass body prop to statefull body', () => {

        const props = {
            body: "I'm a statefull body"
        };

        const accordion = TestUtils.renderIntoDocument(<Statefull {...props} />);
        TestUtils.Simulate.click(accordion.refs.toggle);

        expect(React.findDOMNode(accordion.refs.body).innerHTML).to.equal(props.body);

    });

    it('should pass body prop to statefull body', () => {

        const props = {
            body: "I'm a statefull body"
        };

        const accordion = TestUtils.renderIntoDocument(<Statefull {...props} />);
        TestUtils.Simulate.click(accordion.refs.toggle);

        expect(React.findDOMNode(accordion.refs.body).innerHTML).to.equal(props.body);

    });


});
