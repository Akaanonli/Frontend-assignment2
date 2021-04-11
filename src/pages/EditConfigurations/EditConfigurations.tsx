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

<<<<<<< HEAD
	let[environmentsToEdit, setEnvironments]= React.useState<Array<any>>([])
=======
/*
	let[environments, setEnvironments]= React.useState<Array<any>>([])
>>>>>>> 1b9e7b48964844e75ca7e591cf7114da0dbc365c

	React.useEffect(()=>{
		RestClient.getEnvironments()
					.then(environmentsToEdit => setEnvironments(environmentsToEdit))

	}, [])

	return(
		<div> 
		<h1>Environments</h1>
		{environmentsToEdit.map((c:any, i:number) =>
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
