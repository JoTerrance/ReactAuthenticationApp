import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import Callback from './components/Callback';
import { Router, Route, browserHistory } from 'react-router';


const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={FoodJokes}/>
        <Route path="/special" component={CelebrityJokes} />
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));