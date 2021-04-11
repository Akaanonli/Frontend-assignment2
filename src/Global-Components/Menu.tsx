import React from "react";
import { useParams } from "react-router-dom";
import { Anchor, P } from '@dnb/eufemia/elements'
import { IconPrimary} from '@dnb/eufemia/components';
import "./Menu.css"




export default function Menu(){
    return(
        <nav>
        <P>
        <Anchor href="/" className="dnb-anchor--contrast"> Home </Anchor>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Anchor href="/environments" className="dnb-anchor--contrast"> Environments </Anchor>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Anchor href="/sign-in" className="dnb-anchor--contrast"> Sign in <IconPrimary icon="log_in"/></Anchor> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Anchor href="/admin-configurations" className="dnb-anchor--contrast"> Configurations<IconPrimary icon="log_in"/></Anchor> 
        </P>  
        </nav>
    )
}
