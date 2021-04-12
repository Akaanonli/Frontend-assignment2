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
			{useAddConfigurationFormMarkup()}
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
						<span className='appName'>Name: {r.appName} </span>
						<span className='value'>Value:  {r.value} </span>
						<span className='key'>Key: {r.key} </span>
						<span className='value'>Value:  {r.value} </span>
						<span className='lastModifiedUserId'> Last modified by: {r.lastModifiedUserId} </span>
						<span className='lastModifiedDttm'> Last modified at: [{r.lastModifiedDttm}] </span>
					</p>
				)}
			</div>
		)
	}
}

/*
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

		RestClient.addConfiguration(environment.id,configuration)
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
}*/



function useAddConfigurationFormMarkup() {
	const [appName, setAppName] = useState("");
	const [key, setKey] = useState("");
	const [value, setValue] = useState("");
	const [lastModifiedUserId, setLastModified] = useState("");
	const [lastModifiedDttm,setLastModifiedAt]=useState("");
	const [id,setId]=useState(null)
   
function saveData()
   {
	let data={appName, key, value, lastModifiedUserId, lastModifiedDttm}
   // console.warn(data);
	 fetch(`https://localhost:44310/configurations/${environmentId}`, {
	   method: "POST",
	   headers: {
		 'Accept': 'application/json',
		 'Content-Type': 'application/json',
	   },
	   body:JSON.stringify(data)
	 }).then((resp)=>{
	   // console.warn("resp",resp);;
	   resp.json().then((result)=>{
		 console.warn("result",result)
	   })
	 })
   }
	 return (
	   <div className="useAddConfigurationFormMarkup">
		 <h1>POST API </h1>  
		 <input type="text" name="appName" value={appName} onChange={(e)=>{setAppName(e.target.value)}}   /> <br /> <br />
		 <input type="text" name="key"  value={key}  onChange={(e)=>{setKey(e.target.value)}} /> <br /> <br />
		 <input type="text" name="value"  value={value}  onChange={(e)=>{setValue(e.target.value)}} /> <br /> <br />
		 <input type="text" name="lastModifiedUserId"  value={lastModifiedUserId}  onChange={(e)=>{setLastModified(e.target.value)}} /> <br /> <br />
		 <input type="text" name="lastModifiedDttm"  value={lastModifiedDttm}  onChange={(e)=>{setLastModifiedAt(e.target.value)}} /> <br /> <br />
		 <button type="button" onClick={saveData} >Save New Configurations</button>
	   </div>
	 );
}


	