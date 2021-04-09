import React from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "../../RestClient";

/*
export default function Environment() {
	
	let { id } : any = useParams();
	let [environment, setEnvironment] = React.useState<any>(undefined)

	React.useEffect(() => {
		RestClient.getConfigurations(id)
		          .then(environment => setEnvironment(environment))
				  .catch((err: any) => alert(err))
	}, [])

	if (environment) {
		return (
			<React.Fragment>
				<EnvironmentDetails {...environment} />
			</React.Fragment>
		)
	} else {
		return <p>...</p>
	}
}

function EnvironmentDetails(environment: any) {
	return (
		<div>
			<h1>{environment.appname}</h1>
			<p>
				<label>Environment</label>
				<span>{environment.appenvironment}</span>
			</p>
			<p>
				<label>Key</label>
				<span>{environment.key}</span>
			</p>
			<p>
				<label>Value</label>
				<span>{environment.value}</span>
			</p>
			<p>
				<label>Last modified by:</label>
				<span>{environment.lastmodifieduserid}</span>
			</p>
            <p>
				<label>Last modified date:</label>
				<span>{environment.lastmodifieddttm}</span>
			</p>
			<p>
				<img src={RestClient.baseUrl + "/" + environment.image}
				     alt={environment.place} />
			</p>
		</div>
	)
}
*/