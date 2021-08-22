// svg
import {ReactComponent as Logo} from '../../assets/my_unsplash_logo.svg'
import { IoSearchSharp } from 'react-icons/io5'

// comps
import SearchBar from '../SearchBar'



import './style.scss'
import Button from '../UI/Button'

const Header = (props) => {
    return (
        <div id="header">
            <div className="headerLeft">
                <Logo/>
               <SearchBar icon={<IoSearchSharp fill='#BDBDBD'/>} borderColor={'#BDBDBD'}/>
            </div>
            <div className="headerRight" >
                {/* opens a modal or other action */}
                <Button text="Add a photo"/>
            </div>
        </div>
    )
}

export default Header
