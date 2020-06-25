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
            <ul>
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
                    <h2 className="session-name">{this.props.formType}</h2>
                <form id="login-form" onSubmit={this.handleSubmit} className="login-form-box">
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
                        <input className="session-submit demo" type="submit" value="Try Demo" onClick={this.demoUserLogin}/>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default SignupForm;
