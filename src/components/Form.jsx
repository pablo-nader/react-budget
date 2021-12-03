import React, { Fragment, useState } from "react";
import Alert from "./Alert";
import shortid from "shortid";
import PropTypes from 'prop-types'

const Form = ({addExpenses}) => {
    const [expense, setExpense] = useState({
        id: '',
        name: '',
        ammount: 0
    });
    const [error, setError] = useState(false);

    const handleChange = e => {
        setExpense({...expense, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        if (expense.name.trim() === '' || expense.ammount <= 0 || isNaN(expense.ammount)) {
            setError(true);
            return;
        }

        expense.id = shortid.generate();

        setError(false);
        
        addExpenses(expense);

        setExpense({
            id: '',
            name: '',
            ammount: 0
        });
    }

    return ( 
        <Fragment>
            {
                error ?
                <Alert 
                    type="danger" 
                    msg="The ammount or the name are invalids" 
                /> :
                null
            }
            <form
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                        autoFocus
                        name="name"
                        type="text" 
                        className="form-control form-control-sm"
                        onChange={handleChange}
                        value={expense.name}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ammount</label>
                    <input 
                        name="ammount"
                        type="number" 
                        className="form-control form-control-sm"
                        onChange={handleChange}
                        value={expense.ammount}
                    />
                </div>
                <div className="mb-3">
                    <button
                        className="btn btn-success form-control"
                    >Add expense</button>
                </div>
            </form>
        </Fragment>
    );
}

Form.propTypes = {
    addExpenses: PropTypes.func.isRequired
}

export default Form;