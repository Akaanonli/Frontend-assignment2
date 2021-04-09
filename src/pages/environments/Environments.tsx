import React from "react";
import { Link } from "react-router-dom";
import { RestClient } from "../../RestClient"
import { Button } from '@dnb/eufemia/components';
import { Heading } from '@dnb/eufemia/components';
/*
export default function ListEnvironments(){
	return (
		<React.Fragment>
     	 	<Heading size="medium">click to show environments</Heading>
      		<Button onClick={() => secondTry()}>Environments</Button>
    	</React.Fragment>
	);


	  function secondTry() {
		const promise = RestClient.getEnvironments()
		promise.then(data => {
			var correspondingConfigsForEnvironmentOne = data[0].configurations
            for(var c of correspondingConfigsForEnvironmentOne) {
                console.log(c.keyName)
            }
		})
	  
    }
}
*/
