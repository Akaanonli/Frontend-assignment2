import React from "react";

import { Link } from "react-router-dom";

import styled from '@emotion/styled'
import {Input, Button} from '@dnb/eufemia/components';
 
/*


function Signin(admin:any) {

    const [value, setValue] = React.useState(0)

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let loggin = {
            username = (document.getElementById('username') as HTMLInputElement).value,
            password = (document.getElementById('password') as HTMLInputElement).value
        }
        RestClient.getLoggin(admin.id, loggin)
		          .then( () => {
					  window.alert('Thanks dude!')
					  e.target.reset()
					  destination.reviews.push(review)
					  setValue(value => value + 1)
				  })
				  .catch( (e: any) => alert(e))
    }

    */
   function Signin(){

     return (
        <div>
			<h2>Logg inn</h2>
			<form >
				<p>
					<label htmlFor='comment'>Username</label>
					<Input type='text' id='by'/>
				</p>
				<p>
					<label htmlFor='by'>Password</label>
					<Input type='text' id='by'/>
				</p>
				<p>
					<label>&nbsp;</label> {/* Placeholder */}
					<Button text="Sign in" />
				</p>
			</form>
		</div>
        
    )
}
export default Signin;