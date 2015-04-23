import React from 'react';

import TodoItem from '../TodoItem/TodoItem';


class TodoList extends React.Component {

    render () {

        let items = this.props.todos || [];
        items = items.map((item, index) => <TodoItem key={index} item={item} completedHandler={this.props.completedHandler} />);

        return (
            <ul>
                {items}
            </ul>
        );
    }

}

TodoList.propTypes = {
    todos: React.PropTypes.array,
    completedHandler: React.PropTypes.func
};


export default TodoList;
