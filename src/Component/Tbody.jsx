import React from 'react';

const Tbody = props => {
	
	let rowMap = null
	if(props.tableData.length > 0){

		rowMap = props.tableData.map((singleObject, index) => {
			return (
				<tr key={index}>
					{ Object.keys(singleObject).map((key, index) => (<td key={index}>{singleObject[key]}</td>)) }
					<td style={{minWidth: "100px"}}>
						<button onClick={() => props.objectDeleteHandler(index)} className="btn btn-warning">Edit</button> 
						<span> / </span>

						<button onClick={() => props.objectDeleteHandler(index)} className="btn btn-danger">Delete</button>
					</td>
				</tr>
			)
		})
	}else{
		rowMap = (<tr><td colSpan={props.noOfFields}>Nothing Found</td></tr>)
	}

	return (
		<tbody>{rowMap}</tbody>
	)
}
export default Tbody