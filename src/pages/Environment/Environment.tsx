import React , {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "../../RestClient";
import { H1, H2, Paragraph } from '@dnb/eufemia/elements'
import'./Environment.css'
import { FormLabel, Input } from "@dnb/eufemia/components";


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
			<p></p>
			<H1>{environment.longName}</H1>
			
				<p>
					<Paragraph>Here you will find all available configurations for the <b>{environment.longName}</b>  environment.<br></br> 
					Possibly better known as:<b> {environment.keyName}</b></Paragraph>
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
				<H2>Configurations</H2>
				{environment.configurations.map((r:any,i: number) => 
					<p key={i}>
						<span className='appName'> Name:<b> {r.appName}</b></span> <br></br>
						<span className='key'>Key: <b>{r.key} </b></span><br></br>
						<span className='value'>Value:  {r.value} </span><br></br>
						<span className='lastModifiedUserId'> Last modified by: {r.lastModifiedUserId} </span><br></br>
						<span className='lastModifiedDttm'> Last modified at: [{r.lastModifiedDttm}] </span>
					</p>
				)}
			</div>
		)
	}
}



function useAddConfigurationFormMarkup(environment: any) {

	
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
			<H2>Add Configuration</H2>
			<p>
					<Paragraph>Do you hav any additional configurations for: <b> {environment.keyName}</b>? Add them here.</Paragraph>
				</p>
			<form onSubmit={handleSubmit}>
				<p>
					<FormLabel htmlFor='appName'>Application Name: </FormLabel>
					<input id='appName' type='text'/>
				</p>
				<p>
					<FormLabel htmlFor='key'> Key: </FormLabel>
					<input id='key' type='text'/>
				</p>
				<p>
					<FormLabel htmlFor='value'>Value: </FormLabel>
					<input id='value' type='text'/>
				</p>
				<p>
					<FormLabel htmlFor='lastModifiedDttm'>Last Modified at:  </FormLabel>
					<input id='lastModifiedDttm' type='text'/>
				</p>
				<p>
					<FormLabel htmlFor='lastModifiedUserId'>Last Modified by user: </FormLabel>
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
