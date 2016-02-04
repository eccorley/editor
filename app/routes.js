import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import EditorPage from './containers/EditorPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={EditorPage} />
  </Route>
);
