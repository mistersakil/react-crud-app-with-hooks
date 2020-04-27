import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Menu from './Component/Menu'
import Users from './Component/Users'
import Home from './Component/Home'
import UserDetails from './Component/UserDetails' 

export default function(){

	return (
	    <Router>	        		
    		<Menu />		
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/users" exact component={Users} />
				<Route path="/users/:username" exact component={UserDetails} />
				<Route path="/contact" render={() => <h1>Contact Page updated</h1>} />
			</Switch>
		</Router>

	)



}