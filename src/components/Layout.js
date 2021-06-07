import NavBar from './Navbar/NavBar';

const Layout = ({children}) => {
    return(
        <div className="content">
            <NavBar/>
            {children}
        </div>
    );
}


export default Layout;