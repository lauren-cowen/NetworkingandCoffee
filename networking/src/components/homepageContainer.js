import React, { Component } from "react";
import AppBarExampleIcon from './appBar';

class homepageContainer extends Component {
  state = {
    result: {},
    search: ""
  };

render() {
	return (<div> {AppBarExampleIcon} </div>)
}
}


export default homepageContainer;