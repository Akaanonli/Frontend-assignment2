import React from "react";
import {RestClient } from "./../../RestClient"
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

            /*
            <React.Fragment>
                <EnvironmentsInDataBase {...environments} />
            </React.Fragment>
            */

            
            <Div>
            <Heading  size= "small">
                Here i planned the following functions:
            </Heading>
           
            <ul>
                <li>list of current environments</li>
                <li>Add environments</li>
                <li>link to edit environents</li>
            </ul>
            </Div>
            
        )
    } else {
        return <p>Oooh no</p>
    }
}

function EnvironmentsInDataBase (environments:any){
    
        return(
            <React.Fragment>
                <h1>Environments</h1>
                    
                    {environments.map((d:any, i: number)=>
                    <span key={i}>{d.keyName}</span>)}
                    
            </React.Fragment>
		    
		
		
                        
        )

}
    

/*
function addEnvironmentForm (environment:any){

    const [value, setValue] = React.useState(0)

    const handleSubmit = (e:any) 0> {
        e.preventDefault();
        let environmentToUpdate = {
            longName: (document.getElementById('longName') as HTMLInputElement).value
        }
    }

}
*/