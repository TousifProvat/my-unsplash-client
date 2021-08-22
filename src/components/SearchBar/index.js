import './style.scss';

const SearchBar = (props) => {
    return (
        <div className='searchBar' style={{ width: `${props.width || '300px'}` ,height: `${props.height || '55px'}` , color:`${props.borderColor || '#BDBDBD'}`   }}>
           {
               props.icon && 
               <div className="searchIcon">
               {props.icon}
               </div>
           }
           <input type="text" className="searchInput" placeholder="Search by name" />
        </div>
    )
}

export default SearchBar
