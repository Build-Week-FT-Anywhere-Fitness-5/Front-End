import React from 'react'

const SearchBar = ({ input: keyWord, onChange: setKeyWord }) => {

    return (
        <input
            type="text"
            value={keyWord}
            placeholder="Search..."
            onChange={(e) => setKeyWord(e.target.value)}
        />
    )
}

export default SearchBar;