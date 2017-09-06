'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppies from './AllPuppies';
import AllPuppiesContainer from './AllPuppies';
import {Provider} from 'react-redux';
import store from './store';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

// *********//
import {fetchPuppies, selectPuppy, fetchPuppy} from './action-creators'
import SinglePuppy from './SinglePuppy';


const hardcodedPuppy = {
  id: 1,
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
};

const loadPuppies = () =>{
  store.dispatch(fetchPuppies())
}

const loadPuppy = () => {
  store.dispatch(selectPuppy(hardcodedPuppy))
  // const id = props.match.params.id
  // store.dispatch(fetchPuppy(id))
}


ReactDOM.render(
  <Provider store={store}>
    <Router>
        <div className="container flexbox-container">
          <div className="jumbotron">
            <Switch>
              <Route exact path="/puppies" onEnter={loadPuppies()} component={AllPuppiesContainer}/>
              <Route exact path="/" onEnter={loadPuppies()} component={AllPuppiesContainer} />
              <Route exact path="/puppies/:id" onEnter={loadPuppy()} component={SinglePuppy}/>
            </Switch>
           {/* <AllPuppiesContainer />*/}
          </div>
        </div>


      </Router>
  </Provider>,
  document.getElementById('app')
);