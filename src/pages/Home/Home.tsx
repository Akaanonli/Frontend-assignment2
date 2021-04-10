import React from "react";
import {Link} from "react-router-dom";
import {Button} from '@dnb/eufemia/components';

import splash from './Developer_girl.jpg'; 

function Home() {
    return (
	<div className="container">
		<div className="centered">Environments</div>
		<img src={splash} alt='Girl Coding'/>
        <Link to= "/configurations">
		<Button
                variant="secondary"
                text="See configurations"
                icon="chevron_right_medium"
                size="large"
            />
        </Link>
        
	</div>
	
    )
}
export default Home;