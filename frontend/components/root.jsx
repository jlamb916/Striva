import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

//provider makes the redux store available to all nested components
// that have been wrapped in connect

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
}

export default Root;