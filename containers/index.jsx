import React from "react";
import { Router, Route, Link, History } from 'react-router';
export default class Index extends React.Component{
  render(){
    return (
      <div>
        index page
        <br/>
        <Link to={"/about"}>goto about page</Link>
      </div>
    )
  }
}
