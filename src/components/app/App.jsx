import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HeyArnoldContainer from '../../containers/HeyArnoldContainer';
// eslint-disable-next-line max-len
import HeyArnoldDetailsContainer from '../../containers/HeyArnoldDetailsContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <HeyArnoldDetailsContainer />
        </Route>
        <Route path="/">
          <HeyArnoldContainer />
        </Route>
      </Switch>
    </Router>
  );
}
