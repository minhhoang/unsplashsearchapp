import React, { useState } from 'react';

import './SearchBar.css';


const SearchBar = ( {userSubmit} ) => {
	const [value, setValue] = useState('');

	function onInputChange(e) {
		setValue(e.target.value);
    }

    function onFormSubmit(e) {
        e.preventDefault();
        userSubmit(value);
    }

    return (
        <div>
            <form onSubmit={ e => onFormSubmit(e) }>
                <input
                    className="search-input"
                    type="search"
                    value={value}
                    placeholder="Search photos by typing and hitting Enter" 
                    autoComplete="off"
                    onChange={ e => onInputChange(e) }
                />
            </form>
        </div>
    );
}

export default SearchBar;