import React from "react";
// import About from "./containers/about.jsx";
// import Index from "./containers/index.jsx";
// import appReducers from "./reducers/index.js";
// import { createStore} from 'redux';
// import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route,IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from "./containers/app.jsx";
import Index from "./containers/index.jsx";
import About from "./containers/about.jsx";



let history = createBrowserHistory();

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="about" component={About}></Route>
    </Route>
  </Router>
),document.body)
