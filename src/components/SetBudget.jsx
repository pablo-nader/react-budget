import { useState, Fragment } from "react";
import Alert from "./Alert";
import PropTypes from 'prop-types';

const SetBudget = ({setBudget, setBalance, setStep}) => {
    const [ammount, setAmmount] = useState(0);
    const [error, setError] = useState(false);

    const handleChange = e => {
        setAmmount(Number(e.target.value));
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (ammount <= 0 || isNaN(ammount)) {
            setError(true);
            return;
        }
        
        setError(false);
        setBudget(ammount);
        setBalance(ammount);
        setStep(2);
    }

    return ( 
        <Fragment>
            <div className="col-4"></div>
            <div className="col-4 border border-primary rounded pt-3 pb-3">
                <h5>Enter Week Budget</h5>
                { error ? <Alert type="danger" msg="The ammount is invalid" /> : null }
                <form
                    onSubmit={handleSubmit}
                >
                    <input 
                        className="form-control mb-2"
                        placeholder="Enter budget..."
                        autoFocus
                        name="ammount"
                        onChange={handleChange}
                    />
                    <button className="btn btn-success form-control">
                        Set Budget
                    </button>
                </form>
            </div>
            <div className="col-4"></div>
        </Fragment>
    );
}
 
SetBudget.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setBalance: PropTypes.func.isRequired,
    setStep: PropTypes.func.isRequired
}

export default SetBudget;