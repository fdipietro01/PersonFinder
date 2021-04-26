import React, {useState}from "react";
import {SearchBox} from "./components/searchBox";
import "./style.css"
import data from "../../data/user.json";

export const Search = ()=>{

    const [isAtTop, setIsatTop] = useState(false);
    const [userData, setUserData] = useState (data);
    const [results, setResults] = useState([]);
    
    const handleViewOpenCloseSearch = ()=>{
        setIsatTop(!isAtTop);
    }

    const handleSearch = (searchText) => {
        setIsatTop(!isAtTop);
        if (userData?.length) { 
            const minusText = searchText.toLowerCase();
            console.log(minusText);
            const filteredData = userData.filter((user)=>{
                return(
                    user.name.toLowerCase().includes(minusText) || 
                    user.phone.toLowerCase().includes(minusText) ||
                    user.email.toLowerCase().includes(minusText) ||
                    user.username.toLowerCase().includes(minusText)                
                    )
                }
            );
            console.log(filteredData);
            setResults(filteredData);
            console.log(results);
        }  
        console.log(results);
    }

    return(
       <div className= {`search ${isAtTop ? "searchTop" : "searchCenter"}`}> 
            <SearchBox onSearch={handleSearch} onClose={handleViewOpenCloseSearch}/>
        </div>
    )

    
}
