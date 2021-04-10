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
			<p>
				<label> Id: </label>
				<span>{configuration.id}</span>
			</p>
			<p>
				<label> Application name: </label>
				<span>{configuration.appName}</span>
			</p>
			<p>
				<label> Environment: </label>
				<span>{configuration.environment}</span>
			</p>
			<p>
				<label> Key: </label>
				<span>{configuration.key}</span>
			</p>
			<p>
				<label> Value: </label>
				<span>{configuration.value}</span>
			</p>
			<p>
				<label> Last Modified By: </label>
				<span>{configuration.lastModifiedUserId}</span>
			</p>
			<p>
				<label> Last Modified At: </label>
				<span>{configuration.lastModifiedDttm}</span>
			</p>
		</div>
	)
}