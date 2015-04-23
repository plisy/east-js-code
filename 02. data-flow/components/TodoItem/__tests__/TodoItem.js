import React from 'react/addons';

import TodoItem from '../TodoItem';

const TestUtils = React.addons.TestUtils;


describe('TodoItem', () => {

    it('should render as li with description', () => {

        const item = {desc: 'desc'};
        const itemComponent = TestUtils.renderIntoDocument(<TodoItem item={item} />);

        TestUtils.findRenderedDOMComponentWithTag(itemComponent, 'li');

    });

    it('should invoke complete handler on click with item', function (done) {

        this.timeout(5);

        const item = {desc: 'stuff'};
        const completedHandler = (completedEvent) => {
            expect(completedEvent).to.deep.equal(item);
            done();
        };

        const itemComponent = TestUtils.renderIntoDocument(
            <TodoItem item={item} completedHandler={completedHandler} />
        );

        const itemElement = TestUtils.findRenderedDOMComponentWithTag(itemComponent, 'li');

        TestUtils.Simulate.click(itemElement);

    });

});
