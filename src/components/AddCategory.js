import React, { useState } from 'react';
import PropTypes from 'prop-types';



const AddCategory = ({setCategories}) => {

    const [inputValue, setinnputValue] = useState('');

    const handleInputOnchange = (e) => {
        setinnputValue(e.target.value);
    }
    const handleSutmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2 ) {
            setCategories( cats => [inputValue, ...cats]);
            setinnputValue('');
        }
    }

    return (
        <form onSubmit={handleSutmit}>
            <input
            type="text"
            value={inputValue}
            onChange={handleInputOnchange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
