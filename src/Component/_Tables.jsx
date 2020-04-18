import React, { Component } from 'react';
import Table from './Table'

export default class Tables extends Component {
	state = {
		arrayOfObject : [
			{product: 'Table', price: 2000 },
		],
		objectFields: ['Name','Username','Action'],
	}



	objectDeleteHandler = (index) => {
		const confirm = window.confirm('Are you sure?')	
		if(confirm){
			const personsFiltered = this.state.arrayOfObject.filter((person, personIndex) => {
				return personIndex != index
			})
			this.setState({arrayOfObject:personsFiltered})
		}else{
			alert('Delete Failed!!!!')
		}



	}
	render() {
		const {arrayOfObject,objectFields, persons, personFields} = this.state
		return (
			<>
			<Table arrayOfObject= {arrayOfObject} objectDeleteHandler={this.objectDeleteHandler} objectFields={objectFields} />
			</>
		);
	}
}