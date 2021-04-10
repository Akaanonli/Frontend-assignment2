import React from "react";
import { Link, useParams } from "react-router-dom";
import { RestClient } from "../../RestClient"
import { Button } from '@dnb/eufemia/components';
import { Heading } from '@dnb/eufemia/components';



export default function ListConfig(){
	return (
		<React.Fragment>
     	 	<Heading size="medium">Click a button to call a REST API [see Console for results]</Heading>
			<p>Hei{() => showAppNameInList()}</p>
      		<Button onClick={() => firstTry()}>Configurations</Button>
    	</React.Fragment>
	);

	function firstTry() {
		const promise = RestClient.getConfigurations()
		promise.then(data => console.log(`All destinations: ${JSON.stringify(data)}`))
	  } 
	
	function showAppNameInList() {
		const promise = RestClient.getConfigurations()
		promise.then(data => {
			const nameIwant = data.appName

			return (
				<div>
					<ul>
						{nameIwant}
					</ul>
					
				</div>
			)
		}
			)
	}
}


