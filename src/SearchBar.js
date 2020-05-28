import React from 'react'

export default function SearchBar({onSearch}) {
    return (
        <div>
            <input type="text" placeholder="Search:" onChange={onSearch}></input>
        </div>
    )
}
