import NavBar from './Navbar/NavBar';
import Footer from './Footer/Index';
import ContainerMain from '../../styles/ContainerMain';

const Layout = ({children}) => {
    return(
        <ContainerMain>
            <NavBar/>  
            {children}
            <Footer/>
        </ContainerMain>
    );
}


export default Layout;