import React from 'react';
import { NavLink } from 'react-router-dom';
import activities_edit_container from './activities_edit_container';

class ActivityIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render () {
        const {title, sport, duration, distance, elevation, description, created_at, id} = this.props.activity;
        let date = Date(created_at).split(" ")
        let day = date[0];
        let month = date[1] + " " + date[2] + " " + " " + date[3] 
     return (
            <tr>
                <td>{sport}</td>
                <td>{day}, {month}</td>
                <td><NavLink className="activity-title-index" to={`/activities/${id}`}>{title}</NavLink></td>
                <td>{duration} </td>
                <td>{distance} mi</td>
                <td>{elevation} ft</td>
                <td><NavLink className="activity-edit-index" to={`/activities/${id}/edit`} activity={this.props}>Edit</NavLink></td>
                <td><button className="activity-delete-index" onClick={() => this.props.deleteActivity(id)}>Delete</button></td>
            </tr>
        )
    }

}

export default ActivityIndexItem;