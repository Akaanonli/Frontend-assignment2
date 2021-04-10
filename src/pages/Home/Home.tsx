import React from "react";
import {Link} from "react-router-dom";
import {Button} from '@dnb/eufemia/components';

import splash from './Developer_girl.jpg'; 

function Home() {
    return (
	<div className="container">
		<div className="centered">
            
            
        <h1>Configuration Data</h1>
			<p>
				This application allows you to view application configuration data. 
				Please choose an environment to inspect which application data it contains.
			</p>
			<p>
				In order to add, modify or delete data, you have to log in as an administrator.
			</p>
        </div>

		<img src={splash} alt='Girl Coding'/>
        <Link to= "/environments">
		<Button
                variant="secondary"
                text="View Application Environments"
                icon="chevron_right_medium"
                size="large"
            />
        </Link>

        <Link to= "/configurations">
		<Button
                variant="secondary"
                text="View Application Configurations"
                icon="chevron_right_medium"
                size="large"
            />
        </Link>
        
	</div>
	
    )
}
export default Home;