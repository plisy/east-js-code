import React from 'react';

import DataResolver from '../DataResolver/DataResolver';


class DataComponent extends React.Component {
    render () {
        return (
            <div>
                async status: {this.props.status}
            </div>
        );
    }
}

DataComponent.propTypes = {
    status: React.PropTypes.string.isRequired
};


let Component = DataResolver.createContainer(DataComponent, {
    data: {
        status () {
            return Promise.resolve('Async data loaded');
        }
    }
});


export default Component;
