import React from "react";
import { Link } from 'react-router';
import { connect } from 'react-redux';
import IndexReducer from "../reducers/index-reducer.js";
import {getIndex} from "../actions/index-action.js";

const RaisedButton = require('material-ui/lib/raised-button');
class Index extends React.Component{

  render(){
    return (
      <div>
        index page
        <RaisedButton label="Default" />
      </div>
    )
  }
}



export default connect(IndexReducer)(Index);
