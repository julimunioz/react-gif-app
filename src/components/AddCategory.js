import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setinputValue] = useState('')
    
    const inputChange = (e) => {
        setinputValue(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategorias( cats => [inputValue,...cats]); 
            setinputValue('');
        }
         
    }

    return (
        <form onSubmit={submit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={ inputChange}>
            </input>
        </form>
  )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}