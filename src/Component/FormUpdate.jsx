import React, {useState,useEffect} from "react";

export default function FormUpdate(props) {
	
	const [user, setUser] = useState(props.updatingUser)
	const [required, setRequired] = useState(false)
	const inputHandler = event => {
		const {name, value} = event.target
		setUser({...user, [name] : value})
	}
	const formSubmitHandler = event => {
		event.preventDefault()
		if(!user.name || !user.email){
			setRequired(true)
			return false
		}else{
			props.userUpdateHandler(user)
		}

	}

	useEffect(() => {
	    setUser(props.updatingUser)
	},[props])


	return (	        
	    <form onSubmit={formSubmitHandler} className="was-validated text-left">
	      	<div className="form-group">
		        <label htmlFor="name">Fullname:</label>
		        <input type="text" className="form-control" id="name" placeholder="Enter Fullname" name="name" value={user.name} onChange={inputHandler} />
	     	</div>
	      	<div className="form-group">
		        <label htmlFor="email">Email:</label>
		        <input type="email" className="form-control" id=" email" placeholder="Enter email" name="email" value={user.email}  onChange={inputHandler}  />
	        
		    </div>
	      	<button type="submit" className="btn btn-primary">
	        	Update
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
