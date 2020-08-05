import React from 'react';
import { NavLink } from 'react-router-dom';

class ActivityIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const {title, sport, duration, distance, elevation, description } = this.props.activity;
        return (
            <tr>
                <td>{sport}</td>
                <td>date</td>
                <td>{title}</td>
                <td>{duration}</td>
                <td>{distance}</td>
                <td>{elevation}</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        )
    }

}

export default ActivityIndexItem;