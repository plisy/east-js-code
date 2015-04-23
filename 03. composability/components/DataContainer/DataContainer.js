import React from 'react';
import assign from 'object-assign';


class NoopComponent extends React.Component {
    render () {
        return false;
    }
}


const resolve = (data, props, context) => {

    props = props || {};
    context = context || null;

    const inProps = (propName) => propName in props;
    const not = (f) => (b) => !f(b);

    let dataPromises = Object.keys(data)
        .filter(not(inProps))
        .filter(propName => typeof data[propName] === 'function')
        .reduce((obj, propName) => {
            obj[propName] = data[propName].call(context);
            return obj;
        }, {});

    // in case there are no data promises left, return just props
    if (!Object.keys(dataPromises).length) {
        return Promise.resolve(props);
    }

    return Promise.props(dataPromises)
        .then(d => assign({}, d, props))
        .catch(err => {
            throw err;
        });
};


class DataResolver {



    static createContainer (Component, options) {

        const LoadingComponent = options.LoadingComponent || NoopComponent;
        const ErrorComponent = options.ErrorComponent || NoopComponent;

        return class extends React.Component {

            constructor () {
                super();

                this.state = {
                    loading: true
                };
            }

            componentDidMount () {

                const dataPromise = resolve(
                    options.data || {},
                    this.props,
                    this
                );

                dataPromise.then(d => {
                    this.setState({
                        loading: false,
                        data: d,
                        error: null
                    });
                }).catch(err => {
                    this.setState({
                        loading: false,
                        data: null,
                        error: err
                    });
                });

            }

            render () {
                if (this.state.loading) {
                    return <LoadingComponent />;
                }

                if (this.state.error) {
                    return <ErrorComponent error={this.state.error} />;
                }

                const props = assign({}, this.state.data, this.props);

                return <Component {...props} />;
            }

        };
    }

}


export default DataResolver;
