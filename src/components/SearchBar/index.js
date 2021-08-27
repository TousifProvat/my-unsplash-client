import { useState } from 'react';
import './style.scss';

const SearchBar = (props) => {
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
    props.handleSearch(text);
  };

  return (
    <div className="searchBar" {...props}>
      {props.icon && <div className="searchIcon">{props.icon}</div>}
      <input
        type="text"
        className="searchInput"
        placeholder="Search by name"
        value={text}
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchBar;
