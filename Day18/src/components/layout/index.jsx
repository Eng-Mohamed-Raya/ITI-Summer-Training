import { Outlet } from 'react-router';
import Header from './../Header';
import Footer from './../Footer';
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