import React from "react";
import PropTypes from 'prop-types'

const BudgetItem = ({expense, deleteExpense}) => {
    return ( 
        <tr>
            <td>{expense.name}</td>
            <td>{expense.ammount}</td>
            <td>{expense.balance}</td>
            <td>
                <i 
                    className="fas fa-trash text-danger" 
                    style={{cursor: "pointer"}}
                    onClick={() => deleteExpense(expense)}
                ></i>
            </td>
        </tr>
    );
}
 
BudgetItem.propTypes = {
    expense: PropTypes.object.isRequired, 
    deleteExpense: PropTypes.func.isRequired
}

export default BudgetItem;