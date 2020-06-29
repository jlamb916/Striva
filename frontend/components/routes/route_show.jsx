import React from 'react';

class RouteShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.route === undefined) {
            this.props.fetchRoute(this.props.routeId);
        }
    }

    render () {
        return (
        <div className="route-container">
            <h1>routes page!</h1>
        </div>
        )
    }
}

export default RouteShow;