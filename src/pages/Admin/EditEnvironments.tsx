import React from "react";
import {RestClient } from "./../../RestClient"
import { useParams } from "react-router-dom";
import { Heading, Button } from '@dnb/eufemia/components';
import { Div, H2 } from '@dnb/eufemia/elements';
import { Link } from "react-router-dom";
import Environments from "../Environments/Environments";


export default function EditEnvironments(){

    let [environments, setEnvironments] = React.useState<Array<any>>([])

	React.useEffect(() => {
		RestClient.getEnvironments()
				  .then(environments => setEnvironments(environments))
	}, [])

    if(environments){
        return (

            <React.Fragment>   
                {EnvironmentsInDataBase(environments)}
                <AddEnvironmentForm {...environments} />
            </React.Fragment>
  
        )
    } else {
        return <p>Oh no</p>
    }
}

function AddEnvironmentForm (environments:any){
    return(
        <React.Fragment>
            {useAddEnvironmentFormMarkup(environments)}
        </React.Fragment>
    )
}

function EnvironmentsInDataBase (environments:any){
    
        return(
            <React.Fragment>
                <h1>Environments in Database</h1>
                    <ul>
                    {environments.map((d:any, i: number)=>
                    <li key={i}>{d.keyName}</li>)}
                    </ul>
            </React.Fragment>
               
        )
}




function useAddEnvironmentFormMarkup(environments: any) {

	const [value, setValue] = React.useState(0) 

	const handleSubmit = (e: any) => {
		e.preventDefault();
		let newEnvironment = {
			keyName:  (document.getElementById('keyName') as HTMLInputElement).value,
			longName: (document.getElementById('longName') as HTMLInputElement).value
			
		}
		RestClient.addEnvironment(newEnvironment)
		          .then( () => {
					  window.alert('Environment added')
					  e.target.reset()
					  environments.push(newEnvironment)
					  setValue(value => value + 1)
                  })
				  .catch(err => alert(err))
	
                  }
	return (
		<div>
			<h2>Add Environment</h2>
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor='keyName'>Short Name</label>
					<input id='keyName' type='text'/>
				</p>
				<p>
					<label htmlFor='longName'>Long Name</label>
					<input id='longName' type='text'/>
				</p>
				

				<p>
					<label>&nbsp;</label> {}
					<button>Add Environment</button>
				</p>
			</form>
		</div>
	)
}
