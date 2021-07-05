import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: €{props.budget}</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;

