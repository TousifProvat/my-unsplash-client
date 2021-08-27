// svg
import { ReactComponent as Logo } from '../../assets/my_unsplash_logo.svg';
import { IoSearchSharp } from 'react-icons/io5';

// comps
import SearchBar from '../SearchBar';

import './style.scss';

const Header = (props) => {
  return (
    <div id="header">
      <div className="headerLeft">
        <Logo />
        <SearchBar
          icon={<IoSearchSharp fill="#BDBDBD" />}
          style={{
            marginLeft: '2rem',
          }}
          handleSearch={props.handleSearch}
        />
      </div>
      <div className="headerRight">
        {/* opens a modal or other action */}
        {props.headerRight && props.headerRight}
      </div>
    </div>
  );
};

export default Header;
