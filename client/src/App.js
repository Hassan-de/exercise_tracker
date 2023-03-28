import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import Logout from './components/logout';
import "./App.css";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
  
      <Route path="/Main" element={<Main />} />
   
      <Route path="/" element={<Signin />} />
     
      <Route path="/Signup" element={<Signup />} />

      <Route path="/Logout" element={<Logout />} />

      <Route path="*" element={<Errorpage />} />
      </Routes>

    </>
  );
}

export default App;


