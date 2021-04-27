import React, {useState, useEffect}from "react";
import {SearchBox} from "./components/searchBox";
import "./style.css"
import { SearchResult } from "./components/searchResults";

export const Search = ()=>{
    const [data, setData] = useState([])

    useEffect(()=>{
        const getUsers = async()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then(res=> { setData(res)});
        }
        getUsers();
    },[] )

    const [isAtTop, setIsatTop] = useState(false);
    const [results, setResults] = useState([]);
    
    const handleViewOpenCloseSearch = ()=>{
        setIsatTop(false);
        setResults([]);
    }

    const handleSearch = (searchText) => {
        setIsatTop(true);
        if (data?.length) { 
            const minusText = searchText.toLowerCase();
            console.log(minusText);
            const filteredData = data.filter((user)=>
            // validación encerrada con () sin return, pues es una arrow
                (
                    user.name.toLowerCase().includes(minusText) || 
                    user.phone.toLowerCase().includes(minusText) ||
                    user.email.toLowerCase().includes(minusText) ||
                    user.username.toLowerCase().includes(minusText)                
                    )
            );
            setResults(filteredData);
        }  
    }

    return(
       <div className= {`search ${isAtTop ? "searchTop" : "searchCenter"}`}> 
            <SearchBox onSearch={handleSearch} onClose={handleViewOpenCloseSearch} isSearching={isAtTop}/>
            <SearchResult results={results} isSearching={isAtTop}/>
        </div>
    )

    
}
