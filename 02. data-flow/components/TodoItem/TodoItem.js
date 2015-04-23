import React from 'react';


class TodoItem extends React.Component {

    completeHandler () {
        if (this.props.completedHandler) {
            return this.props.completedHandler(this.props.item);
        }
    }

    render () {
        return (
            <li onClick={this.completeHandler.bind(this)}>
                {this.props.item.desc}
            </li>
        );
    }
}

TodoItem.propTypes = {
    completedHandler: React.PropTypes.func,
    item: React.PropTypes.shape({
        desc: React.PropTypes.string.isRequired
    })
};


export default TodoItem;
