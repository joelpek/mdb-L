import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

import logo from './mdb-l.png';
import './App.css';

import rootReducer from './rootReducer';

import MoviesList from './movies/MoviesList';
import MovieDetail from './movies/MovieDetail';
// import Watchlist from './movies/Watchlist';

const middleware = [thunk, logger];

const store = createStore(
  rootReducer, 
  load(), 
  composeWithDevTools(applyMiddleware(...middleware, save())), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          {/* <Route path="/watchlist" component={Watchlist} /> */}
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;