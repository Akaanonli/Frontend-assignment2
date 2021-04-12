import React from "react";
import {Link} from "react-router-dom";
import { IconPrimary} from '@dnb/eufemia/components';
import { H1, P, Anchor } from '@dnb/eufemia/elements'

import './Home.css'

import splash from './Developer_girl.jpg'; 


function Home() {
    return (
	<div>
            
        <p>
            <H1>Developer environments</H1>
        </p>
        

        <div className="largespace">
            <P>
            Have you ever thought that DNB shoud gather all the different cofigurations <br></br> for all of the  different developer environments? <br></br> 
            That's what we thought too! <br></br> <br></br> So here it is, <Anchor href="/environments" className="dnb-anchor--no-icon"> a list of environments and their corresponding configurations <IconPrimary icon="chevron_right"/></Anchor>
            </P>
        </div>

        <p>
		<Link to= "/configurations">
            <P>
                 <img src={splash} alt='Girl who is coding'/>
            </P>
        </Link>
        </p>

        
        
	</div>
	
    )
}
export default Home;