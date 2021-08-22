import Header from '../Header'
import './style.scss'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>
            {children}
        </div>
    )
}

export default Layout
