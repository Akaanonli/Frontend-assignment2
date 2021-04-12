import React from "react";
import {RestClient } from "./../../RestClient"
import './EditEnvironments.css';

import { useParams } from "react-router-dom";
import { Heading, Button, FormSet, FormLabel, Input } from '@dnb/eufemia/components';
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
                    <p></p>
                    <Heading>Edit environments</Heading>
                    <p>
                        <H2 size="medium">Curren environments:</H2>
                    </p>
                    
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
			<H2>Add Environment</H2>
			<form onSubmit={handleSubmit}>
				<p>
					<FormLabel htmlFor='keyName'>Short Name</FormLabel>
					<Input id='keyName' type='text'/>
				</p>
				<p>
					<FormLabel htmlFor='longName'>Long Name</FormLabel>
					<Input id='longName' type='text'/>
				</p>
				

				<p>
					<button>ADD</button>
				</p>
			</form>
		</div>
	)
}
