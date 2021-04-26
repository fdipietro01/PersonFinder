import React from "react";
import "./style.css";
import {SearchResultItem} from "./searchResultsItem"

export const SearchResult = ({results, isSearching})=>{
    return(
        
        <div className="searchResult-container">
            {!results?.length && isSearching && <p>No hay resultados</p>}
            {results?.map((item)=> <SearchResultItem key={item.id} email= {item.email} name={item.name} isSearching={isSearching}/>)}
        </div>
    )        
}