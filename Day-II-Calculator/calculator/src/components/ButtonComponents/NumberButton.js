import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button className = {props.buttonStyle}>
            {props.text}
        </button>
    );
}

NumberButton.defaultProps = {
    text: "Enter Number Text",
    buttonStyle: "number",
}

export default NumberButton;