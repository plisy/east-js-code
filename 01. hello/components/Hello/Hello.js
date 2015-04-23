import React from 'react';

const {Component} = React;

const styles = {
    title: {
        fontSize: 50
    }
};

class Hello extends Component {
    render () {
        return (
            <div style={styles.title}>
                Hello, EastJS!
            </div>
        );
    }
}


export default Hello;
