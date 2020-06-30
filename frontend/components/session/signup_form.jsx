import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUserLogin = this.demoUserLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount () {
        this.setState({
            username: '',
            password: '',
            email: ''
        })
    }
    componentWillUnmount() {
        this.props.clearErrors();
    }

    demoUserLogin(e) {
        e.preventDefault();
        const demoUser = {
            username: "demo",
            password: "password"
        }
        this.props.processDemo(demoUser);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
            <div className="form-content">
            <div className="login-form-container">
                    <p className="session-signup">Join Striva today,</p>
                    <p className="session-signup two">it's Free.</p>
                <form id="login-form" onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div className="login-form">
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
                        <label>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                            <button className="session-submit demo" onClick={this.demoUserLogin}>Try Demo</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default SignupForm;
