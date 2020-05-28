import React, {useState, useEffect} from 'react'
import List from './List'
import SearchBar from './Search'
import Count from './Count'

const People = [{name: "Carl"}, {name: "Adam"}, {name: "Jeffery"}, {name: "Donny"}, {name: "Freddy"},{name: "Priscilla"}];

export default function App() {
    const [searchText, setSearchText] = useState(localStorage.getItem('Search') || '');

    const handleSearch = event => {(setSearchText(event.target.value))};
    
    const filterSearch = People.filter(textSearch => {return(textSearch.name.toLowerCase().includes(searchText.toLowerCase()))});

    useEffect(() => {localStorage.setItem('Search', searchText)}, [searchText]);

    return (
        <>
            <Count />
            <SearchBar action={handleSearch} value={searchText}/>
            <List listObject={filterSearch}/>  
        </>
    )
}
