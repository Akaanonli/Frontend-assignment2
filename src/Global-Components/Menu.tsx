import React from "react";
import { useParams } from "react-router-dom";
import { P, Link } from '@dnb/eufemia/elements'
import "./Menu.css"




export default function Menu(){
    return(
        <nav>
        <P>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/environments">See environments</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/sign-in">Sign in</Link>
        </P>  
        </nav>
    )
}
