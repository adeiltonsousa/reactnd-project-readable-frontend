import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Store } from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Post from './components/Post'
import Erro404 from './components/Erro404'



ReactDOM.render(
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={ App } />
            <Route path="/post" component={ Post } />
            <Route path='*' component={ Erro404 } />
        </Switch>
      </BrowserRouter>
    </Provider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
