// import './App.css';
// import Home from './pages/Home'
// import Rooms from './pages/Room'
// import SingleRoom from './pages/SingleRoom'
// import Error from './pages/Error'
import React,{lazy,Suspense} from 'react'

import {Routes,Route,Navigate} from 'react-router-dom'

import Home from './component/Home';
import Navebar from './component/Navebar'
import OrderSumery from './component/OrderSumery';
import NotFound from './component/Nomatch'
import Product from './component/Product'
import ChildFetureProduct from './component/childFetureProduct';
import ChildNewProduct from './component/childNewProduct';
import Users from './component/User'
import UserDetails from './component/UserDetails';

import Admin from './component/Admin';
import Profile from './component/Profile'
import { AuthProvider } from './component/auth';
import Login from './component/Login';
import { RequireAuth } from './component/RequireAuth'


const LazyAbout=lazy(()=>import ('./component/About'))

const ab=<span style={{color:"red"}}>Loading .....</span>

function App() {

  return (<AuthProvider>
    <Navebar/>
    <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/about' element={<Suspense fallback={ab}><LazyAbout/></Suspense>}></Route>
    <Route path='/OrderSumery' element={<OrderSumery/>}></Route>

    <Route path='/product' element={<Product/>}>
          <Route index element={<ChildFetureProduct/>}/>
          <Route path='feturedproduct' element={<ChildFetureProduct/>}/>
          <Route path='newproduct' element={<ChildNewProduct/>}/>
      </Route>

<Route path='/user' element={<Users/>}>
       <Route  path=':userid' element={<UserDetails/>}/>
       <Route  path='admin' element={<Admin/>}/>
</Route>
<Route path='/profile' element={<RequireAuth><Profile/></RequireAuth>}>   </Route>
<Route path='/Login' element={<Login/>}>   </Route>

    <Route path='*' element={<NotFound/>}></Route>
  </Routes>
  </AuthProvider>
  );
}

export default App;
