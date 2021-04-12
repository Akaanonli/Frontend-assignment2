import React from "react";
import { Link } from "react-router-dom";

import {Input, Button, FormSet, Heading, FormLabel} from '@dnb/eufemia/components';
import { H1, P } from '@dnb/eufemia/elements'

   function Signin(){

     return (
        <div>
			<p>
			<Heading>Sign in</Heading>
			</p>
			
			<FormSet >
				<p>
					<FormLabel htmlFor='comment'>Username</FormLabel>
					<Input type='text' id='by'/>
				</p>
			
					<FormLabel htmlFor='by'>Password</FormLabel>
					<Input type='text' id='by'/>
				
				<p>
					
					<Link to={`/edit-environments`} style={{ textDecoration: 'none' }}>
					
					<Button text="Sign in" />
					</Link>
				</p>
			</FormSet>
		</div>
        
    )
}
export default Signin;