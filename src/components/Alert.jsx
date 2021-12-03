import PropTypes from 'prop-types';

const Alert = ({msg, type}) => {
    return ( 
        <div className={`alert alert-${type}`}>
            {msg}
        </div>
    );
}
 
Alert.propTypes = {
    msg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Alert;