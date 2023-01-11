
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Assets from './Component/Assets/Assets';
import Booking from './Component/Booking/Booking';
import Dashboard from './Component/Dashboard/Dashboard';
import Layout from './Component/Layout/Layout';
import Logout from './Component/Logout/Logout';
import SideNav from './Component/SideNav/SideNav';
import TopNav from './Component/TopNav/TopNav';

let routers= createBrowserRouter([
  {path:'/',element: <Layout/> ,children:[
    {index:true,element:<Dashboard/>},
    {path:'dashboard',element:<Dashboard/>},
    {path:'assets',element:<Assets/> },
    {path:'Booking',element:<Booking/> },
    {path:'logout',element:<Logout/> },
    {path:'*',element: <Dashboard/>}
  ] }
]);

function App() {
  return <>
  <RouterProvider router={routers}/>
 
  </>
}

export default App;
