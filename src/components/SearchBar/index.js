import './style.scss';

const SearchBar = (props) => {
  return (
    <div className="searchBar" {...props}>
      {props.icon && <div className="searchIcon">{props.icon}</div>}
      <input type="text" className="searchInput" placeholder="Search by name" />
    </div>
  );
};

export default SearchBar;
