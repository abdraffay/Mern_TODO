import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Navbar from './Component/Navbar';

import AddRole from './Pages/AddRole'

import ErrorPage from './Pages/ErrorPage';
import List from "./Pages/List"
import UpdateRole from './Pages/UpdateRole';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<AddRole/>}/>
    <Route path='/list' element={<List/>}/>
    <Route path='/UpdateRole/:id' element={<UpdateRole/>}/>
    <Route path='*' element={<ErrorPage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App