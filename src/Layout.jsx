import { Outlet } from 'react-router-dom';
import './App';
import Header from './components/header';

function Layout() {
    return (
      <>
       <Header/> 
        
       <Outlet/>
    
      </>
    )
  }
export default Layout