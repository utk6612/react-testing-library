import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Card = ({ name, onDelete, buttonTestId }) => {
    return (
        <div className="card-wrapper">
            <p>{name}</p>
            <button data-testid={buttonTestId} onClick={onDelete}>Delete</button>
        </div>
    )
};


Card.propTypes = {
    name: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Card;
