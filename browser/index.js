'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// import AllPuppiesContainer from './AllPuppies';
import AllPuppiesContainer from './AllPuppiesContainer'
import {Provider} from 'react-redux';
import store from './store';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import SinglePuppy from './SinglePuppy';



ReactDOM.render(
  <Provider store={store}>
    <Router>
        <div className="container flexbox-container">
          <div className="jumbotron">
            <Switch>
              <Route exact path="/puppies" component={AllPuppiesContainer}/>
              <Route exact path="/"  component={AllPuppiesContainer} />  
              <Route exact path="/puppies/:id"  component={SinglePuppy}/> 
            </Switch>
          </div>
        </div>
      </Router>
  </Provider>,
  document.getElementById('app')
);

