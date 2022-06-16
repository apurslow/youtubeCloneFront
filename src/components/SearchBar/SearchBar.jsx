import React, { useState } from 'react';
import './SearchBar.css';


const SearchBar = (props) => {

    const [text, setText] = useState("");

    const onChange = event => {
        event.stopPropagation();
        setText(event.target.value);
    }

    const onClick = event => {
        event.preventDefault();
        event.stopPropagation();
        props.setSearch(text);
    }

    return (
          <form id='theSearchBar'>
             <label htmlFor="searchBar">Search...</label>
             <input id='searchBody' type="text" onChange={event => onChange(event)} value={text}/>
            <button id='searchButton' onClick={event => onClick(event)}>Submit</button>
          </form>
    );
  };
  
  export default SearchBar;
