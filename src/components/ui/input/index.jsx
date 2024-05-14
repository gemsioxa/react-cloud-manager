import React from 'react'
import InputCss from './Input.module.css'

const Input = (props) => {
    const onChangeValue = (e) => {
        props.onChange(e.target.value)
    };

    return (
        <div className={InputCss.container}>
            <div className={InputCss.title}>
                {props.title}
            </div>
            <input 
                className={InputCss.input} 
                type={props.type || 'text'} 
                placeholder={props.placeholder}
                onChange={onChangeValue}
                value={props.value}
            /> 
        </div>
    );
};

export default Input;
