import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './AppContext';
import Budget from './Budget';
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import RemainingBudget from './Remaining';
import "./budget.css"
import styled from "styled-components"

const BudgetPlaner = () => {
	return (




<main>
		
		<AppProvider>


			<div className='container1 mt-3;'>
				<H3>My Budget Planner</H3>
				<div className='row mt-1'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-1'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				
<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
					
				</div>
			</div>
		</AppProvider>
		</main>
	);
};

export default BudgetPlaner;


const H3 = styled.h3`
color:white; 
font-size:2 em;
margin-top: 0cm;
text-shadow: 0 0 5px black;

padding:1cm;

`