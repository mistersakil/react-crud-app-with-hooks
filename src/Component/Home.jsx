import React, {useState, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Table from './Table'
import Form from './Form'
import FormUpdate from './FormUpdate'
import Menu from './Menu'
import Users from './Users'


function App() {
  const tableFields = ['ID', 'Name','Email','Actions']
  const initianData = [
    {id: 1, name: 'User 1', email: 'mister.sakil.cse@gmail.com'},
    {id: 2, name: 'User 2', email: 'sakilorb@gmail.com'},
    {id: 3, name: 'User 3', email: 'sakilorb@icloud.com'},
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
