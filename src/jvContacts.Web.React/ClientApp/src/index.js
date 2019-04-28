import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';

import { AppProvider, Layout } from 'components';
import { Contacts, Users } from 'pages';

import registerServiceWorker from 'registerServiceWorker';

render(
    <AppProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/users" component={Users} />
                <Route path="/" component={Layout} />
            </Switch>
        </BrowserRouter>
    </AppProvider>
    , document.getElementById('root'));

registerServiceWorker();
