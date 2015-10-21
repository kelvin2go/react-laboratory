import React from "react";
import App from "./containers/app.jsx";
import About from "./containers/about.jsx";
import Index from "./containers/index.jsx";
import { render } from 'react-dom'
import { Router, Route, Link, History,IndexRoute } from 'react-router'
import { createHistory} from 'history'

const history = createHistory();

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.body)
