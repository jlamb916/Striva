import React from 'react';


class SigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUserLogin = this.demoUserLogin.bind(this);
    }

    // before unmount remove errors
    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demoUserLogin (e) {
        const demoUser = {
            username: "demo",
            password: "password"
        }
        this.props.processForm(demoUser);
    }

    renderErrors() {
        return (
            <ul className="error-messages">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-image-content">
            <div className="login-form-container">
                <h2 className="session-name">{this.props.formType}</h2>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                        <label>
                            <input type="text"
                                value={this.state.username}
                                placeholder="Username"
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <label>
                            <input type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <button className="session-submit demo" onClick={this.demoUserLogin}>Try Demo</button>
                </form>
                </div>
            </div>
        );
    }
}

export default SigninForm;
