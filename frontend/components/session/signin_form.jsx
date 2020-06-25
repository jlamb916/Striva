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
            <div className="content container">
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h2 className="session-name">{this.props.formType}</h2>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Username <br />
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                            <input className="session-submit" type="submit" value="Demo User" onClick={this.demoUserLogin}/>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default SigninForm;
