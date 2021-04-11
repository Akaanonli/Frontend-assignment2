import React from "react";
import { Link } from "react-router-dom";
import { RestClient } from "../../RestClient"
import { Button } from '@dnb/eufemia/components';
import { Heading } from '@dnb/eufemia/components';


export default function EditConfigurations() {
	return(
	<p> Endret for å pushe</p>
	)
}

/*
	let[environments, setEnvironments]= React.useState<Array<any>>([])

	React.useEffect(()=>{
		RestClient.getEnvironments()
					.then(environments => setEnvironments(environments))

	}, [])

	return(
		<div> 
		<h1>Environments</h1>
		{environments.map((c:any, i:number) =>
			<Link key={i} className='blockLink' to={`editconfiguration/${c.id}`}>
			/<Button
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


*/
