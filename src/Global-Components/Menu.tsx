import React from "react";
import { useParams } from "react-router-dom";
import { Anchor, P, Link } from '@dnb/eufemia/elements'
import "./Menu.css"




export default function Menu(){
    return(
        <nav>
        <P>
        <Anchor href="/" className="dnb-anchor--contrast"> Home </Anchor>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Anchor href="/environments" className="dnb-anchor--contrast"> Environments </Anchor>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Anchor href="/sign-in" className="dnb-anchor--contrast"> Sign in </Anchor>  
        </P>  
        </nav>
    )
}
