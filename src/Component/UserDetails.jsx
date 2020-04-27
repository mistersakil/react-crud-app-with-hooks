import React from 'react'
import {Link} from 'react-router-dom'
export default function UserDetails(props) {

	const {username} = props.match.params
	
	return(
		<div className="container-fluid">
	    	<div className="row">
	    		<div className="col-sm-6 offset-sm-3 mt-5">
	    			<h2 className="text-center mb-3">{`Username : ${username}`}</h2>
	    			<hr/>				    
	    			<Link to="/users" className="btn btn-info d-block">Go Back</Link>
	    		</div>

	    	</div>

		</div>
	)
}