import './App.css'
import CreateUser from "./pages/CreateUser/CreateUser";
import EditUser from "./pages/EditUser/EditUser"
import Dashboard from './pages/Dashboard/Dashboard'

import {BrowserRouter, Routes, Route} from "react-router-dom"
// import { useState } from 'react';

function App() {

  // const [clickedValue, setClickedValue] = useState(false);
  // const getButtonClick = (isClick) =>{
  //   setClickedValue(isClick); 
  // }

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard /> } />
      <Route path='/createUser' element={ <CreateUser /> } />
        <Route path="/editUser/:userId" element={<EditUser />} />
        <Route path='*' element={<h2>Error 404: Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
