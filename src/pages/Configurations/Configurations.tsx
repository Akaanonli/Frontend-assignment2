import React from "react";
import { Link, useParams } from "react-router-dom";
import { RestClient } from "../../RestClient"
import { Button } from '@dnb/eufemia/components';
import { Heading } from '@dnb/eufemia/components';

function Configurations() {

	let[configurations, setConfigurations]= React.useState<Array<any>>([])

	React.useEffect(()=>{
		RestClient.getConfigurations()
					.then(configurations => setConfigurations(configurations))

	}, [])

	return(
		<div> 
		<h1>Configurations</h1>
		{configurations.map((c:any, i:number) =>
			
			<Link key={i} className='blockLink' to={`configuration/${c.id}`}>
			<Button
					variant="secondary"
					text={c.appName}
					icon="chevron_right_medium"
					size="large"
				/>
			</Link>
		)}
		</div>
	)
}


export default function useAddConfigurationFormMarkup() {

	const [value, setValue] = React.useState(0) 

	const handleSubmit = (e: any) => {
		e.preventDefault();
		let configuration = {
			id: (document.getElementById('id') as HTMLInputElement).value,
			appName:  (document.getElementById('appName') as HTMLInputElement).value,
			environment: (document.getElementById('environment') as HTMLInputElement).value,
			key: (document.getElementById('environment') as HTMLInputElement).value,
			value: (document.getElementById('environment') as HTMLInputElement).value,
			lastModifiedUserId: (document.getElementById('environment') as HTMLInputElement).value,
			lastModifiedDttm: (document.getElementById('environment') as HTMLInputElement).value
		}
		RestClient.addConfiguration(configuration)
		          .then( () => {
					  window.alert('Thanks!')
					  e.target.reset()
					  Configurations().push(configuration)
					  setValue(value => value + 1)     // Dummy state change, to trigger re-render
				  })
				  .catch(err => alert(err))
	}

	return (
		<div>
			<h2>Add Configuration</h2>
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor='id'>Id</label>
					<input id='id' type='text'/>
				</p>
				<p>
					<label htmlFor='appName'>Application Name</label>
					<input id='appName' type='text'/>
				</p>
				<p>
					<label htmlFor='environment'>Environment</label>
					<input id='environment' type='text'/>
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
					<label>&nbsp;</label> {/* Placeholder */}
					<button>Add configuration</button>
				</p>
			</form>
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