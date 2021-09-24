import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeyArnoldDetails from '../../containers/HeyArnoldDetailList';
import HeyArnoldList from '../../containers/HeyArnoldList';
import Header from '../Header';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
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
