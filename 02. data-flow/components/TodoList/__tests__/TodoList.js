import React from 'react/addons';

import TodoList from '../TodoList';
import TodoItem from '../../TodoItem/TodoItem';

const TestUtils = React.addons.TestUtils;


describe('TodoList', () => {

    it('should render TodoItem for each todo entry from props', () => {

        const todos = [
            {desc: 'Hello'},
            {desc: 'EastJS'}
        ];

        const list = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        const items = TestUtils.scryRenderedComponentsWithType(list, TodoItem);

        expect(items.length).to.equal(2);

    });

    it('should pass item as prop to TodoItem', () => {
        const todos = [
            {desc: 'Hello'}
        ];

        const list = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        const item = TestUtils.findRenderedComponentWithType(list, TodoItem);

        expect(item.props.item).to.deep.equal(todos[0]);
    });

    it('should pass completedHandler as prop to TodoItem', () => {

        const todos = [
            {desc: 'Hello'}
        ];
        const completedHandler = () => {};

        const list = TestUtils.renderIntoDocument(<TodoList todos={todos} completedHandler={completedHandler} />);
        const item = TestUtils.findRenderedComponentWithType(list, TodoItem);

        expect(item.props.completedHandler).to.equal(completedHandler);
    });

});
