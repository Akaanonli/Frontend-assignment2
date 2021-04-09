import React from "react";
import {Button} from '@dnb/eufemia/components';

import splash from './Developer_girl.jpg'; 

function Home() {
    return (
	<div className="container">
		<div className="centered">Environments</div>
		<img src={splash} alt='Girl Coding'/>
		<Button
                variant="secondary"
                text="See environments"
                icon="chevron_right_medium"
                size="large"
            />
	</div>
	
    )
}
export default Home;