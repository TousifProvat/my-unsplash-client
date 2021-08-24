import Header from '../Header';
import './style.scss';

const Layout = ({ children, headerRight }) => {
  return (
    <div className="layout">
      <Header headerRight={headerRight} />
      {children}
    </div>
  );
};

export default Layout;
