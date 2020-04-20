import React, {useState, useEffect, Fragment} from 'react';
import Table from './Component/Table'
import Form from './Component/Form'
import FormUpdate from './Component/FormUpdate'
function App() {
  const tableFields = ['ID', 'Name','Email','Actions']
  const initianData = [
    {id: 1, name: '1-default', email: '1default@user.com'},
    {id: 2, name: '2-default', email: '2default@user.com'},
    {id: 3, name: '3-default', email: '3default@user.com'},
  ]

  const [users, setUsers] = useState(initianData)  
  const [isUpdating, setIsUpdating] = useState(false)
  const [updatingUser, setUpdatingUser] = useState({id:null, name:'', email:''})

  const userCreateHandler = newUser => {
    setUsers([...users, newUser])
  }

  const userUpdateHandler = updateingUser => {
    setIsUpdating(false)
    let exist = false
    setUsers(users.map(user => {
      if(user.id === updateingUser.id){
        exist = true
        return updateingUser
      }else{
        return user
      }
    }))
    if(!exist){
      window.alert('Sorry! User does not exist')
    }

  }

  const rowDeleteHandler = id => {
    if(window.confirm('Are you sure?')){
      const usersFiltered = users.filter(user => user.id !== id )
      setUsers(usersFiltered)
    }
  }

  const rowUpdateHandler = updatingObject => {
    setIsUpdating(true)
    setUpdatingUser(updatingObject)    
  }


  return (
    <div className="container-fluid">
      <div className="row">      
        <div className="col-sm-12">
          
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="text-center">React CRUD App With Hooks </h1>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="card-deck">
            <div className="card bg-light">
              <div className="card-body text-center">
              {
                !isUpdating 
                ? (
                  <Fragment>
                  <h2>Create New</h2>
                  <Form noOfRows={users.length} userCreateHandler={userCreateHandler} />
                  </Fragment>
                )
                : (
                  <Fragment>
                    <h2>Update Form</h2>
                    <FormUpdate updatingUser={updatingUser} userUpdateHandler={userUpdateHandler}/>
                  </Fragment>
                )
              }
                
              </div>
            </div>
            <div className="card bg-light">
              <div className="card-body text-center">
                <h2>View List</h2>
                <Table tableFields={tableFields} tableData={users} rowDeleteHandler={rowDeleteHandler} rowUpdateHandler={rowUpdateHandler}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
