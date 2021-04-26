import React from "react";
import "./style.css";


export const SearchResultItem = ({email, name})=>{
    return(
        <div>
            
                <div className="searchResultItem">
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
        </div>
    )        
}