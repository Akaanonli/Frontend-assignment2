import React from "react";
import { Link } from "react-router-dom";
import { RestClient } from "../../RestClient"

export default function ListConfig(){
	return (
		<React.Fragment>
     	 	<div>Click a button to call a REST API [see Console for results]</div>
      		<button onClick={() => firstTry()}>See environments</button>
    	</React.Fragment>
	);

	function firstTry() {
		const promise = RestClient.getConfigurations()
		promise.then(data => console.log(`All destinations: ${JSON.stringify(data)}`))
	  }
}
