import React from "react";
import {Link} from "react-router-dom";
import {Button , IconPrimary} from '@dnb/eufemia/components';
import { H1, P, Anchor } from '@dnb/eufemia/elements'

import './Home.css'

import splash from './Developer_girl.jpg'; 
import Environments from "../Environments/Environments";

function Home() {
    return (
	<div>
            
        <p>
        <H1>Developer environments</H1>
        </p>
        
        
        <P>
        Have you ever thought that DNB shoud gather all the different cofigurations for all of the developer environments? <br></br>
        That's what we thought too! So here it is, <Anchor href="/environments" className="dnb-anchor--no-icon"> a list of environments and their corresponding configurations <IconPrimary icon="chevron_right"/></Anchor>
        </P>

		<Link to= "/configurations">
        <p>
		<img src={splash} alt='Girl Coding'/>
        </p>
        </Link>

        
        
	</div>
	
    )
}
export default Home;