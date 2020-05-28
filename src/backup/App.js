import React, {useState, useEffect} from 'react'
import List from './List'
import Search from './Search'

const People = [{name: "Carl"}, {name: "Adam"}, {name: "Jeffery"}, {name: "Donny"}, {name: "Freddy"},{name: "Priscilla"}];

export default function App() {

    const [searchInput, setSearchInput] = useState(localStorage.getItem('searchInputText') ||'');

    const handleSearch = e => {
        setSearchInput(e.target.value);
    }

    useEffect(() => {localStorage.setItem('searchInputText', searchInput)}, [searchInput])

    const filterSearch = People.filter(filterList =>{return(filterList.name.toLowerCase().includes(searchInput.toLowerCase()))})

    return (
        <div>
            <Search action={handleSearch} value={searchInput}/>
            <List listObject={filterSearch}/>
        </div>
    )
}
