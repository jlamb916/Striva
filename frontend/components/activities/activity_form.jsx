import React from 'react';
import {NavLink} from 'react-router-dom';

class ActivityForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            date: "",
            time: "",
            distance: "",
            description: "",
            elevation: "",
            sport: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.activityProcessForm({
                title: this.state.title,
                date: this.state.date,
                time: this.state.time,
                sport: this.state.sport,
                description: this.state.description,
                distance: this.state.distance,
                elevation: this.state.elevation,
                route_id: this.state.route_id,
                user_id: this.props.userId,
            })
            .then((res) => this.props.history.push("/activities"));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>)
    }

    render () {
        const {formName, processForm} = this.props;
        return (
            <div className="activity-container">
                <header className="activity-index-header">
                    <div className="activity-index-title-container">
                        <h1>{formName} Activity Form</h1>
                    </div>
                </header>
                <div>
                    <div className="error-messages">{this.renderErrors()}</div>
                </div>
                <form className="activity-form" onSubmit={this.handleSubmit}>


                    <div>
                        <div className="title-container">
                            <label>Title</label>
                            <br />
                            <input
                                className="input-title form"
                                onChange={this.update("title")}
                                type="text"
                                placeholder="Afternoon Run"
                                value={this.state.title}
                            ></input>
                        </div>
                    </div>

                    <div className="section-one">
                        <div className="sport-container">
                            <label>Sport</label>
                            <br />
                            <input
                                className="input-sport form"
                                onChange={this.update("sport")}
                                type="text"
                                placeholder="Run"
                                value={this.state.sport}
                            ></input>
                        </div>

                        <div className="date-time-container">
                            <label>Date & Time</label><br />
                            <input
                                className="date-input form"
                                onChange={this.update("date")}
                                type="date"
                                value={this.state.date || ""}
                            ></input>
                            <input
                                className="time-input form"
                                onChange={this.update("time")}
                                type="text"
                                placeholder={this.state.time}
                                value={this.state.time || ""}
                            ></input>
                        </div>
                    </div>
                    <hr />
                    <div className="section-two">
                        <div className="distance-container">
                            <label>
                                Distance
                             <br />
                                <div className="distance-div">
                                <input
                                    className="distance-input form"
                                    type="text"
                                    value={this.state.distance}
                                    onChange={this.update("distance")}
                                />
                                <input
                                    className="placeholders"
                                    type="text"
                                    value="Miles"
                                    readOnly
                                ></input>
                                </div>
                            </label>
                        </div>

                        <div className="duration-container">
                            <label>
                                Duration
                        <br />
                                <div className="divider"></div>
                                <div className="duration-flex">
                                    <div className="duration-hour-container">
                                        <input
                                            className="duration-hour time"
                                            onChange={this.update("dHour")}
                                            type="text"
                                            placeholder="hr"
                                            value={this.state.dHour || ""}
                                        />
                                    </div>

                                    <div className="duration-min-container">
                                        <input
                                            className="duration-min time"
                                            onChange={this.update("dMin")}
                                            type="text"
                                            placeholder="min"
                                            value={this.state.dMin || ""}
                                        />
                                    </div>

                                    <div className="duration-sec-container">
                                        <input
                                            className="duration-sec time"
                                            onChange={this.update("dSec")}
                                            type="text"
                                            placeholder="sec"
                                            value={this.state.dSec || ""}
                                        />
                                    </div>
                                </div>
                            </label>
                        </div>

                        <div className="elevation-container">
                            <label>
                                Elevation
                            <div className="elevation-div">
                                    <input
                                        className="elevation-input form"
                                        onChange={this.update("elevation")}
                                        type="text"
                                        value={this.state.elevation || ""}
                                    />

                                    <input
                                        className="placeholders"
                                        type="text"
                                        value="feet"
                                        readOnly
                                    ></input>
                                </div>
                            </label>
                        </div>
                    </div>
                    <hr />

                    <div>
                        <div className="description-container">
                            <label>Description</label>
                            <br />
                            <textarea
                                className="description-text"
                                onChange={this.update("description")}
                                value={this.state.description || ""}
                                placeholder="How did it go? Were you tired or rested? How was the weather?"
                            ></textarea>
                        </div>
                    </div>

                    <div>
                        <button className="create-activity-button">Create</button>
                        <NavLink className="activity-cancel" to="/activities">Cancel</NavLink>
                    </div>
                </form>
            </div>  
        
        )
    }
}



export default ActivityForm;