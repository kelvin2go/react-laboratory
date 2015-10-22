import React from "react";
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import appReducers from "../reducers/all.js";

const RaisedButton = require('material-ui/lib/raised-button');


let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(appReducers);

export default class App extends React.Component{
  constructor(props){
    super(props);
    store.subscribe(()=>{
      this.setState(store.getState());
    });

  }
  render(){
    return (
      <Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>
    )
  }
}
