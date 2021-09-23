import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeyArnoldDetails from '../../containers/HeyArnoldDetailList';
import HeyArnoldList from '../../containers/HeyArnoldList';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id">
          <HeyArnoldDetails />
        </Route>
        <Route path="/">
          <HeyArnoldList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
