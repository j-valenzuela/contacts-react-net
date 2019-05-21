import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Errors/NotFound';
import Layout from './Layout/Layout';
import AppProvider from '../context/AppProvider';

function App() {
  return (
   <AppProvider>
        <BrowserRouter>
            <Switch>   
                <Route exact path="/404" component={NotFound} />                
                <Route path="/" component={Layout} />
            </Switch>
        </BrowserRouter>
    </AppProvider>
  );
}

export default App;
