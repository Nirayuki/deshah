import NavBar from './Navbar/NavBar';
import Footer from './Footer/Index';

const Layout = ({children}) => {
    return(
        <div className="content">
            <NavBar/>  
            {children}
            <Footer/>
        </div>
    );
}


export default Layout;