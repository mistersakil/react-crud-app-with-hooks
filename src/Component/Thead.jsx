import React from 'react';

const Thead = props => {
	const tableFields = props.tableFields.map((field,index) =>{
		return <th key={index}>{field}</th>
	})
	return (
		<thead className="thead-dark">
			<tr>
				{tableFields}
			</tr>
		</thead>
	)
}
export default Thead