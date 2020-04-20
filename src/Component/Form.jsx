import React, {useState} from "react";

export default function Form(props) {
	const defaultUserInfo = {id:null, name:'', email:''}
	const defaultUser = defaultUserInfo
	const [user, setUser] = useState(defaultUser)
	const [required, setRequired] = useState(false)
	const {name, email} = user
	const inputHandler = event => {
		const {name, value} = event.target
		setUser({...user, [name] : value, id: props.noOfRows + 1})
	}
	const formSubmitHandler = event => {
		event.preventDefault()
		if(!user.name || !user.email){
			setRequired(true)
			return false
		}else{
			props.userCreateHandler(user)
			setUser(defaultUser)			
			setRequired(false)
		}

	}
	return (	        
	    <form onSubmit={formSubmitHandler} className="was-validated text-left">
	      	<div className="form-group">
		        <label htmlFor="name">Fullname:</label>
		        <input type="text" className="form-control" id="name" placeholder="Enter Fullname" name="name" value={name} onChange={inputHandler} />
	     	</div>
	      	<div className="form-group">
		        <label htmlFor="email">Email:</label>
		        <input type="email" className="form-control" id=" email" placeholder="Enter email" name="email" value={email}  onChange={inputHandler}  />
	        
		    </div>
	      	<button type="submit" className="btn btn-primary">
	        	Create
	     	</button>	      
		  	{
		  		required && (
  		            <div className="alert alert-danger mt-2 ">
  		             	<strong>Both fields required</strong>
  		             	<button type="button" className="close" onClick={() => setRequired(false)}>
							<span>&times;</span>
						</button>
  		            </div>
		  		)
		  	}
			
	    </form>
	);
}
