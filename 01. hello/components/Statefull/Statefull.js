import React from 'react';

const {Component} = React;

class Statefull extends Component {

    constructor () {
        super();

        this.state = {
            open: false
        };
    }

    toggleBody () {
        this.setState({
            open: !this.state.open
        });
    }

    render () {
        const body = this.state.open && (
            <div ref="body">
                {this.props.body}
            </div>
        );

        return (
            <div>
                <div ref="toggle" onClick={()=>this.toggleBody()}>
                </div>
                {body}
            </div>
        );
    }

}

Statefull.propTypes = {
    body: React.PropTypes.any
};


export default Statefull;
