import React , {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "../../RestClient";
import { Button } from '@dnb/eufemia/components';
import { Heading } from '@dnb/eufemia/components';
import ReactDOM from 'react-dom';


export default function Environment() {

	let {id}: any =useParams()

	let[environment, setEnvironment] = React.useState<any>(undefined)

	React.useEffect(()=> {
		RestClient.getEnvironment(id)
					.then(environment => setEnvironment(environment))
					.catch(err => alert(err))
	},[id])

	if (environment) {
		return (
			<React.Fragment>
				<EnvironmentDetails {...environment}/>
				<EnvironmentConfigurations {...environment}/>
			</React.Fragment>
		)
	} else {
		return <p>Please wait...</p>
	}
}

function EnvironmentDetails (environment: any){
	return(
		<div>
			<p>
				<label> Key name: </label>
				<span>{environment.keyName}</span>
			</p>
			<p>
				<label> Long Name: </label>
				<span>{environment.longName}</span>
			</p>
		</div>
	)
}


function EnvironmentConfigurations(environment: any) {
	return (
		<React.Fragment>
			{useConfigurationsMarkup(environment)}
			{useAddConfigurationFormMarkup(environment)}
		</React.Fragment>
	)
}

function useConfigurationsMarkup(environment: any) {
	if (!environment.configurations || !environment.configurations.length) {
		return <div>No configurations yet</div>
	}
	else {
		return (
			<div>
				<h2>Configurations</h2>
				{environment.configurations.map((r:any,i: number) => 
					<p key={i}>
						<span className='appName'>{r.appName}</span>
						<span className='key'>{r.key}</span>
						<span className='value'> {r.value}</span>
						<span className='lastModifiedUserId'> {r.lastModifiedUserId}</span>
						<span className='lastModifiedDttm'> [{r.lastModifiedDttm}]</span>
					</p>
				)}
			</div>
		)
	}
}



function useAddConfigurationFormMarkup(environment: any) {

	// Dummy state, which we will update after the user has added a review.
	// By updating this state, we are telling React to re-render the component (i.e. to show the new review).
	const [value, setValue] = React.useState(0) 

	const handleSubmit = (e: any) => {
		e.preventDefault();
		let configuration = {
			appName:  (document.getElementById('appName') as HTMLInputElement).value,
			key: (document.getElementById('key') as HTMLInputElement).value,
			value: (document.getElementById('value') as HTMLInputElement).value,
			lastModifiedUserId: (document.getElementById('lastModifiedUserId') as HTMLInputElement).value,
			lastModifiedDttm: (document.getElementById('lastModifiedDttm') as HTMLInputElement).value
		}
		RestClient.addConfiguration(environment.id, configuration)
		          .then( () => {
					  window.alert('Thanks')
					  e.target.reset()
					  environment.configurations.push(configuration)
					  setValue(value => value + 1)     // Dummy state change, to trigger re-render
				  })
				  .catch(err => alert(err))
	}

	return (
		<div>
			<h2>Add Configuration</h2>
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor='appName'>Application Name</label>
					<input id='appName' type='text'/>
				</p>
				<p>
					<label htmlFor='key'>Key</label>
					<input id='key' type='text'/>
				</p>
				<p>
					<label htmlFor='value'>Value</label>
					<input id='value' type='text'/>
				</p>
				<p>
					<label htmlFor='lastModifiedDttm'>Last Modified at:</label>
					<input id='lastModifiedDttm' type='text'/>
				</p>
				<p>
					<label htmlFor='lastModifiedUserId'>Last Modified by user:</label>
					<input id='lastModifiedUserId' type='text'/>
				</p>

				<p>
					<label>&nbsp;</label> {}
					<button>Add Configurations</button>
				</p>
			</form>
		</div>
	)
}
