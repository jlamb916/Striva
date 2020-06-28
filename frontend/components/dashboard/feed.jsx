import React from 'react';


class Feed extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllRoutes();
    }

    render () {
        const allRoutes = this.props.routes.map((route) => (
            <li className="feed" key={`${route.id}`}>
                <ul>
                    <li>
                        {`${route.route_name}`}
                    </li>
                    <li>
                        {`${route.route_description}`}
                    </li>
                </ul>
            </li>
        ))
        
        return (
            <div className="feeds-container">
                <ul>
                    {allRoutes}
                </ul>
            </div>
        )
    }
}

export default Feed;