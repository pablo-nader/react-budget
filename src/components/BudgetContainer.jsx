import React, { Fragment } from 'react';
import Alert from './Alert';
import BudgetItem from './BudgetItem';
import Form from './Form';
import PropTypes from 'prop-types'


const BudgetContainer = ({budget, expenses, setBalance, addExpenses, deleteExpense, balanceError}) => {
    let balance = budget;
    let items = expenses.map((e, i) => {
        e.balance = balance-e.ammount;
        balance -= e.ammount;

        return (
            <BudgetItem 
                deleteExpense={deleteExpense}
                key={e.id}
                expense={e}
            />
        );
    });

    return ( 
        <Fragment>
            <div className="col-6 border border-primary rounded-start pt-3 pb-3">
                <h4>Add expenses</h4>
                {
                    balanceError ?
                    <Alert 
                        type="danger"
                        msg="Spending exceeds budget"
                    /> :
                    null
                }
                <Form 
                    setBalance={setBalance}
                    addExpenses={addExpenses}
                />
            </div>
            <div className="col-6  border border-primary rounded-end pt-3 pb-3 border-start-0">
                <h4>Budget: $ {budget}</h4>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ammount</th>
                            <th>Balance</th>
                            <th><i className="fas fa-trash"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        { items.reverse() }
                                            
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}
 
BudgetContainer.propTypes = {
    budget: PropTypes.number.isRequired, 
    expenses: PropTypes.array.isRequired, 
    setBalance: PropTypes.func.isRequired, 
    addExpenses: PropTypes.func.isRequired, 
    deleteExpense: PropTypes.func.isRequired, 
    balanceError: PropTypes.bool.isRequired
}

export default BudgetContainer;