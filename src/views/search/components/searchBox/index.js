import React, {useState} from "react";
import "./style.css";

export const SearchBox = ({onSearch, onClose, isSearching})=>{
    const [searchText, setSearchText] = useState("");
    
    const input = (e)=>{
       setSearchText(e.target.value);
       console.log(searchText);
    }   

    const handleSearchClick = ()=>{
        onSearch(searchText);
    }
    const handleCloseClick = ()=>{
        onClose();
        setSearchText("");
    }

    return(
        <div className="searchBox">
            <h2 className="searchBox-Tittle">Buscador de Personal</h2>
            <div className="searchBox-Bottons">
                <label>
                    <input className="searchBox-input"  value={searchText} onChange={input}/>
                </label>
                <button onClick= {handleSearchClick} disabled={!searchText.length}>Buscar</button>
                {isSearching && <button onClick= {handleCloseClick} disabled={!searchText.length}>Cerrar</button>}
            </div>
        </div>
    ) 
}