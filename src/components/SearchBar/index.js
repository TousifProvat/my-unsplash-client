import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getImagebyLabel } from '../../actions/upload.actions';
import './style.scss';

const SearchBar = (props) => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImagebyLabel(text));
  }, [text]);

  const handleInput = (e) => {
    setText(e.target.value);
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
