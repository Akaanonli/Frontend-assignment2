import React from "react";
import { Link } from "react-router-dom";
import { RestClient } from "../../RestClient"
import { Button } from '@dnb/eufemia/components';
import { Heading } from '@dnb/eufemia/components';


export default function Environments() {

	let[environments, setEnvironments]= React.useState<Array<any>>([])

	React.useEffect(()=>{
		RestClient.getEnvironments()
					.then(environments => setEnvironments(environments))

	}, [])

	return(
		<div> 
		<h1>Environments</h1>
		{environments.map((c:any, i:number) =>
			
			<Link key={i} className='blockLink' to={`environments/${c.id}`}>
			<Button
					variant="secondary"
					text={c.keyName}
					icon="chevron_right_medium"
					size="large"
				/>
			</Link>
		)}
		</div>
	)
}





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
