import React from "react";
import { Link } from "react-router-dom";
import { RestClient } from "../../RestClient"
import { Button } from '@dnb/eufemia/components';
import { Heading } from '@dnb/eufemia/components';
import { Anchor } from "@dnb/eufemia/elements";


export default function Environments() {

	let[environments, setEnvironments]= React.useState<Array<any>>([])

	React.useEffect(()=>{
		RestClient.getEnvironments()
					.then(environments => setEnvironments(environments))

	}, [])

	return(
		<div> 
		<h1>Environments</h1>
		{environments.map((c:any, i:number) =>
			<Link key={i} className='blockLink' to={`environment/${c.id}`} style={{ textDecoration: 'none' }}>
			<p> </p><Button
					text={c.keyName}
					icon="chevron_right_medium"
					size="large"
				/>
			</Link>
			)}
			<p>
				<Anchor href="/edit-environments" className="dnb-anchor--no-icon"> Edit Environments </Anchor>
			</p>
		</div>
		
	)
}

