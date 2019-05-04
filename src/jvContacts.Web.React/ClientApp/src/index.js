import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';

import { AppProvider, Layout } from 'components';
import NotFound from 'pages/Errors/NotFound';
import registerServiceWorker from 'registerServiceWorker';

render(
    <AppProvider>
        <BrowserRouter>
            <Switch>   
                <Route exact path="/404" component={NotFound} />                
                <Route path="/" component={Layout} />
            </Switch>
        </BrowserRouter>
    </AppProvider>
    , document.getElementById('root'));

registerServiceWorker();
