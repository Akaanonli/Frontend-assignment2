import React from "react";
import { Link, useParams } from "react-router-dom";
import { RestClient } from "../../RestClient"
import { Button } from '@dnb/eufemia/components';
import { Heading } from '@dnb/eufemia/components';

export default function Configurations() {

	let[configurations, setConfigurations]= React.useState<Array<any>>([])

	React.useEffect(()=>{
		RestClient.getConfigurations()
					.then(configurations => setConfigurations(configurations))

	}, [])

	return(
		<div> 
			<h1>Configurations</h1>
			{configurations.map((c:any, i:number) =>
				<h2>{c.appName}</h2>
			)}
		</div>
	)
}


/*
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


*/