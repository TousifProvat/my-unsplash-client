import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getImagebyLabel } from '../../actions/upload.actions';
import './style.scss';

const SearchBar = (props) => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
    dispatch(getImagebyLabel(e.target.value));
  };

  return (
    <div className="searchBar" {...props}>
      {props.icon && <div className="searchIcon">{props.icon}</div>}
      <input
        type="text"
        className="searchInput"
        placeholder="Search by name"
        value={text}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
