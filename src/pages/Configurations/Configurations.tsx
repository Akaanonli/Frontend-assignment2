import React from "react";
import { Link, useParams } from "react-router-dom";
import { RestClient } from "../../RestClient"
import { Button } from '@dnb/eufemia/components';
import { H1 } from '@dnb/eufemia/elements'

export default function Configurations() {

	let[configurations, setConfigurations]= React.useState<Array<any>>([])

	React.useEffect(()=>{
		RestClient.getConfigurations()
					.then(configurations => setConfigurations(configurations))

	}, [])

	return(
		<div> 
			<p>
				<H1>Configurations</H1>
			</p>
		{configurations.map((c:any, i:number) =>
			<p>
				<Link key={i} className='blockLink' to={`editconfiguration/${c.id}`} style={{ textDecoration: 'none' }}>
				<Button
						text={c.appName}
						icon="chevron_right_medium"
						size="large"
					/>
				</Link>
			</p>
		)}
		</div>
	)
}
