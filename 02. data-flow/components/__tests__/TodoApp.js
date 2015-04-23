import React from 'react/addons';

import TodoApp from '../TodoApp';
import TodoList from '../TodoList/TodoList';

const TestUtils = React.addons.TestUtils;


describe('TodoApp', () => {

    it('should instantiate todo list with sample items', () => {

        const app = TestUtils.renderIntoDocument(<TodoApp />);

        const list = TestUtils.findRenderedComponentWithType(app, TodoList);

        expect(list.props.todos).to.deep.equal([
            {desc: 'Write failing test'},
            {desc: 'Make it pass'},
            {desc: 'Refactor'},
            {desc: 'Repeat until done.'}
        ]);

    });

});
