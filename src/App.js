import React, {useState} from 'react';
import Table from './Component/Table'
function App() {
  const tableFields = ['Name','Email','Actions']
  const initianData = [
    {name: 'sakil', email: 'mister.sakil.cse@gmail.com'},
    {name: 'sakil', email: 'sakilorb@gmail.com'},
    {name: 'sakil', email: 'sakilorb@icloud.com'},
  ]
  const [users, setUsers] = useState(initianData)

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
                <h2>Add New</h2>
               
              </div>
            </div>
            <div className="card bg-light">
              <div className="card-body text-center">
                <h2>View List</h2>
                <Table tableFields={tableFields} tableData={users}></Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
