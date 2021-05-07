
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Login from '../pages/Login';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Layout>

        </BrowserRouter>
    );
}

export default App;