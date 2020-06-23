import React from 'react';
import GreetingContainer from './greeting_container';

const App = () => {
    return (
        <div>
            <header>Welcome to Striva</header>
            <GreetingContainer />
        </div>
        // <Route path="/login" component={LoginFormContainer} />
        // <Route path="/signup" component={SigninFormContainer} />
    )
}

export default App;