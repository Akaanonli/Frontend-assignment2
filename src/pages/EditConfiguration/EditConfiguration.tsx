import React , {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "../../RestClient";
import { Button } from '@dnb/eufemia/components';
import { Heading } from '@dnb/eufemia/components';
import ReactDOM from 'react-dom';


export default function EditConfiguration() {
	/*return (
		<div>Til Alina - denne kan du selvfølgelig slette når du driver å tester. Den er lagt inn for at løsningen skulle compile før jeg pushet. Ref. ha noe som fungerer;)</div>
	)*/


	let {id}: any =useParams()

	let[environmentToEdit, setEnvironment] = React.useState<any>(undefined)

	React.useEffect(()=> {
		RestClient.getEnvironment(id)
					.then(environmentToEdit => setEnvironment(environmentToEdit))
					.catch(err => alert(err))
	},[id])

	if (environmentToEdit) {
		return (
			<React.Fragment>
				<EnvDetails {...environmentToEdit}/>
				{<EnvConfigurations {...environmentToEdit}/>}
			</React.Fragment>
		)
	} else {
		return <p>Please wait...</p>
	}
}

function EnvDetails (environmentToEdit: any){
	return(
		<div>
			<p>
				<label> Key name: </label>
				<span>{environmentToEdit.keyName}</span>
			</p>
			<p>
				<label> Long Name: </label>
				<span>{environmentToEdit.longName}</span>
			</p>
		</div>
	)
}


function EnvConfigurations(environmentToEdit: any) {
	return (
		<React.Fragment>
			{EditConfigurationsMarkup(environmentToEdit)}
			{EditConfigurationFormMarkup(environmentToEdit)}
		</React.Fragment>
	)
}


function EditConfigurationsMarkup(environmentToEdit: any) {
	if (!environmentToEdit.configurations || !environmentToEdit.configurations.length) {
		return <div>No configurations yet</div>
	}
	else {
		return (
			<div>
				<h2>Current configurations</h2>
				{environmentToEdit.configurations.map((r:any,i: number) => 
					<p key={i}>
						<span className='id'>{r.id}</span>
						<span className='appName'>{r.appName}</span>
						<span className='environmentId'>{r.environmentId}</span>
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



function EditConfigurationFormMarkup(environmentToEdit: any) {

	// Dummy state, which we will update after the user has added a review.
	// By updating this state, we are telling React to re-render the component (i.e. to show the new review).
	const [value, setValue] = React.useState(0) 

	const handleSubmit = (e: any) => {
		e.preventDefault();
		let configuration = {
			id:  (document.getElementById('id') as HTMLInputElement).value,
			appName:  (document.getElementById('appName') as HTMLInputElement).value,
			environmentId: (document.getElementById('environmentId') as HTMLInputElement).value,
			key: (document.getElementById('key') as HTMLInputElement).value,
			value: (document.getElementById('value') as HTMLInputElement).value,
			lastModifiedUserId: (document.getElementById('lastModifiedUserId') as HTMLInputElement).value,
			lastModifiedDttm: (document.getElementById('lastModifiedDttm') as HTMLInputElement).value
		}
		RestClient.changeConfiguration(environmentToEdit.id, configuration)
		          .then( () => {
					  window.alert('Thanks')
					  e.target.reset()
					  environmentToEdit.configurations.push(configuration)
					  setValue(value => value + 1)     // Dummy state change, to trigger re-render
				  })
				  .catch(err => alert(err))
	}

	return (
		<div>
			<h2>Edit Configuration details</h2>
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
					<button>Submit changes</button>
				</p>
			</form>
		</div>
	)
}
