import React from "react";

import { Link } from "react-router-dom";
import splash from './Clouds.jpg'; 

function PageNotFound() {
    return (
	<div className="pagenotfound">
		<h1>OOPS 404</h1>
		<img src={splash} alt='Dark Clouds'/>
		<p>Invalid URL: {window.location.pathname}</p>
		<p>Full URL: {window.location.href}</p>
		<p><Link to="/">Home</Link></p>
	</div>
    )
}
export default PageNotFound;