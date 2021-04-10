import React from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "../../RestClient";

export default function Configuration() {

	let {id}: any =useParams()

	let[configuration, setConfiguration] = React.useState<any>(undefined)

	React.useEffect(()=> {
		RestClient.getConfiguration(id)
					.then(configuration => setConfiguration(configuration))
					.catch(err => alert(err))
	},[id])

	if (configuration) {
		return (
			<React.Fragment>
				<ConfigurationDetails {...configuration}/>
			</React.Fragment>
		)
	} else {
		return <p>Please wait...</p>
	}
}

function ConfigurationDetails (configuration: any){
	return(
		<div>
			<h1>{configuration.appName}</h1>
		</div>
	)
}