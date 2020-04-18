import React, { Component } from 'react';
import Thead from './Thead'
import Tbody from './Tbody'

const Table = props => {
	return (
		<div className="table-responsive">
		<table className="table table-bordered table-hover table-striped">
			<Thead tableFields={props.tableFields}/>
			<Tbody tableData={props.tableData} noOfFields={props.tableFields.length} />
		</table>
		</div>
	)
}

export default Table

