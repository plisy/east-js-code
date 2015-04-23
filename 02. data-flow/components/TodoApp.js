import React from 'react';

import TodoList from './TodoList/TodoList';


class TodoApp extends React.Component {

    constructor () {
        super();

        this.state = {
            todos: [
                {desc: 'Write failing test'},
                {desc: 'Make it pass'},
                {desc: 'Refactor'},
                {desc: 'Repeat until done.'}
            ]
        };
    }

    render () {

        const todos = this.state.todos;

        return (
            <div>
                <h1>TODOs</h1>
                <TodoList todos={todos} />
            </div>
        );
    }

}


export default TodoApp;
