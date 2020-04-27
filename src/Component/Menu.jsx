import React from 'react';
import {NavLink} from 'react-router-dom'
const Menu = props => {

	const style = {
		color: '#fff',
	}
	
	return (

		<nav className="navbar navbar-expand-md bg-dark navbar-dark justify-content-center">
		 	<NavLink exact to="/" className="navbar-brand" href="#">{ "{ React CRUD App With Hooks }" }</NavLink>
		  	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		 	   <span className="navbar-toggler-icon"></span>
		  	</button>
		  	<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav">
				    <li className="nav-item"><NavLink className="nav-link" activeStyle={style} exact to="/">Home</NavLink></li>
				    <li className="nav-item"><NavLink className="nav-link" activeStyle={style} to="/users">Users</NavLink></li>
				    <li className="nav-item"><NavLink className="nav-link" activeStyle={style} to="/contact">Contact</NavLink></li>
				    <li className="nav-item"><NavLink className="nav-link" activeStyle={style} to="/blog">Blog</NavLink></li>
					<li className="nav-item"><NavLink className="nav-link" activeStyle={style} to="/portfolio">Portfolio</NavLink></li>
				</ul>
			</div>
		</nav>
	)
	
}

export default Menu
