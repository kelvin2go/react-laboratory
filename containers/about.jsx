import React from "react";

export default class About extends React.Component{
  constructor(props){
    super(props);
    console.log("loaded about page");
  }
  render(){
    return (
      <div>
        about page
        <a href="#" onClick={ () => this.props.history.goBack()}>go back home page</a>
      </div>
    )
  }

}
