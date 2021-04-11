import React , {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "../../RestClient";
import { Button } from '@dnb/eufemia/components';
import { Heading } from '@dnb/eufemia/components';
import ReactDOM from 'react-dom';


export default function EditConfiguration() {
	const [configurations, setConfiguration] = useState([] as any)
	const [appName, setAppName] = useState("");
	const [environmentId, setEnvironmentId] = useState("");
	const [key, setKey] = useState("");
	const [value, setValue] = useState("");
	const [lastModifiedUserId, setLastModified] = useState("");
	const [lastModifiedDttm,setLastModifiedAt]=useState("");
	const [id,setId]=useState(null)

  
	useEffect(() => {
		getConfigurations();
	}, [])
	function getConfigurations() {
	  fetch("https://localhost:44310/viewconfigurations").then((result) => {
		result.json().then((resp) => {
		
	      setConfiguration(resp)
		  setAppName(resp[0].appName)
		  setEnvironmentId(resp[0].environmentId)
		  setKey(resp[0].key)
		  setValue(resp[0].value)
		  setLastModified(resp[0].lastModifiedUserId)
		  setLastModifiedAt(resp[0].lastModifiedDttm)
		  setId(resp[0].id)
		})
	  })
	}
  
	function DeleteConfiguration(id: any) {
	  fetch(`https://localhost:44310/configurations/${id}`, {
		method: 'DELETE'
	  }).then((result) => {
		result.json().then((resp) => {
		  console.warn(resp)
		  getConfigurations()
		})
	  })
	}
	
	function SelectConfiguration(id:any)
	{
	  let item =configurations[id-1];
	  setAppName(item.appName)
	  setEnvironmentId(item.environmentId)
	  setKey(item.key)
	  setValue(item.value)
	  setLastModified(item.lastModifiedUserId)
	  setLastModifiedAt(item.lastModifiedDttm)
	  setId(item.id)
	}

	function UpdateConfiguration()
	{
	  let item={appName, environmentId, key, value, lastModifiedUserId, lastModifiedDttm}
	  console.warn("item",item)
	  fetch(`https://localhost:44310/configurations/${id}`, {
		method: 'PUT',
		headers:{
		  'Accept':'application/json',
		  'Content-Type':'application/json'
		},
		body:JSON.stringify(item)
	  }).then((result) => {
		result.json().then((resp) => {
		  console.warn(resp)
		  getConfigurations()
		})
	  })
	}


	return (
	  <div className="EditConfiguration">
		<h1>Update Configuration Data </h1>
		<table style={{ float: 'left' }}>
		  <tbody>
			<tr>
			  <td>Id</td>
			  <td>AppName</td>
			  <td>EnvironmentId</td>
			  <td>LastModified</td>
			  <td>LastModifiedAt</td>
			</tr>
			{
			  configurations.map((item: any, i: number) =>
				<tr key={i}>
				  <td>{item.id}</td>
				  <td>{item.appName}</td>
				  <td>{item.environmentId}</td>
				  <td>{item.key}</td>
				  <td>{item.value}</td>
				  <td>{item.lastModifiedUserId}</td>
				  <td>{item.lastModifiedDttm}</td>
				  <td><button onClick={() => DeleteConfiguration(item.id)}>Delete</button></td>
				  <td><button onClick={() => SelectConfiguration(item.id)}>Select</button></td>
  
				</tr>
			  )
			}
		  </tbody>
		</table>
		<div>
				<label htmlFor='appName'>Application Name: </label>
				<input id='appName' type="text" value={appName} onChange={(e)=>{setAppName(e.target.value)}} /> <br /><br />
				<label htmlFor='environmentId'>Environment Id: </label>
				<input id='environmentId' type="text" value={environmentId} onChange={(e)=>{setEnvironmentId(e.target.value)}} /> <br /><br />
				<label htmlFor='key'>Key: </label>
				<input id='key' type="text" value={key}  onChange={(e)=>{setKey(e.target.value)}} /> <br /><br />
				<label htmlFor='value'>Value: </label>
				<input id='value' type="text" value={value}  onChange={(e)=>{setValue(e.target.value)}} /> <br /><br />
				<label htmlFor='lastModifiedUserId'>Last Modified by user: </label>
				<input id='lastModifiedUserId' type="text" value={lastModifiedUserId}  onChange={(e)=>{setLastModified(e.target.value)}} /> <br /><br />
				<label htmlFor='lastModifiedDttm'>Last Modified at: </label>
				<input id='lastModifiedDttm'type="text" value={lastModifiedDttm}  onChange={(e)=>{setLastModifiedAt(e.target.value)}} /> <br /><br />
				<button onClick={UpdateConfiguration} >Update Configuration</button>  
		</div>
	  </div>
	);
  }