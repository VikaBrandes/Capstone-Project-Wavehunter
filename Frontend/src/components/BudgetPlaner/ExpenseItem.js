
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from './AppContext';
import styled from "styled-components"
import "./budget.css"
const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span class='badge badge-primary badge-pill mr-3 '>Euro{props.cost}</span>
				<TiDelete class="delete"  size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;


