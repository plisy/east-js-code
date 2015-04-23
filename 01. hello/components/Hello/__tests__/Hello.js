import React from 'react/addons';

import HelloConf from '../Hello';

const TestUtils = React.addons.TestUtils;


describe('HelloConf', () => {

    it('should render "Hello, EastJS!" message', () => {

        const helloer = TestUtils.renderIntoDocument(
            <HelloConf />
        );

        expect(React.findDOMNode(helloer).innerHTML)
            .to.equal('Hello, EastJS!');

    });

});
