import React, {useState}from "react";
import {SearchBox} from "./components/searchBox";
import "./style.css"
import data from "../../data/user.json";
import { SearchResult } from "./components/searchResults";

export const Search = ()=>{

    const [isAtTop, setIsatTop] = useState(false);
    const [userData, setUserData] = useState (data);
    const [results, setResults] = useState([]);
    
    const handleViewOpenCloseSearch = ()=>{
        setIsatTop(false);
        setResults([]);
    }

    const handleSearch = (searchText) => {
        setIsatTop(true);
        if (userData?.length) { 
            const minusText = searchText.toLowerCase();
            console.log(minusText);
            const filteredData = userData.filter((user)=>
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
