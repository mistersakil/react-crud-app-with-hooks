import React, {useEffect, useState} from 'react'
import Table from './Table'
import {Link} from 'react-router-dom'
const Users = props => {

	const initialUsers = []
	const [users, setUsers] = useState(initialUsers)


	async function loadUsersFromApi(){		
		const usersResult = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
		setUsers([...users, ...usersResult])
	}	


	const userRows = users.map((user, index) => {
		return (
		    <tr key={`${user.name}-${index}`}>
				<td>{user.id}</td>
				<td><Link to={`/users/${user.id}`} >{user.name}</Link></td>
				<td>{user.email}</td>
				<td>{user.phone}</td>
				<td>{user.username}</td>
			</tr>    
		)
	})

	useEffect(() => {
		loadUsersFromApi()
	},[])

	return (
	    <div className="container-fluid">
	    	<div className="row">
	    		<div className="col-sm-12 mt-5">
	    			<h2 className="text-center mb-3">User List Through API</h2>
	    			<span className="badge badge-secondary d-block"><h3>API: https://jsonplaceholder.typicode.com/users</h3></span>
	    			<hr/>
				    <div className="table-responsive">
						<table className="table table-bordered table-hover table-striped">
							<thead>
							<tr className="table-info">
								<th>ID</th>
								<th>Name</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Username</th>
							</tr>
							</thead>
							<tbody>
							{userRows}
							</tbody>
						</table>
					</div>
	    		</div>
	    	</div>

		</div>

	)
	
}

export default Users
