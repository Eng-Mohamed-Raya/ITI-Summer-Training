import { Outlet } from 'react-router';
import Header from './../components/Header';
import Footer from './../components/Footer';
function Layout() {
    return (
    <div className=' d-flex flex-column justify-content-between vh-100'>
        <div>
            <Header/>
            <div className='container'>
                <Outlet/>
            </div>
        </div>
        <Footer/>
    </div> );
}

export default Layout;