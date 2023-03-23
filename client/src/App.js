import React from 'react';
import {Route, Routes} from 'react-router-dom';
import "./App.css"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>

      <Route path="/" element={<Home />} />
   
      <Route path="/Signin" element={<Signin />} />
     
      <Route path="/Signup" element={<Signup />} />

      </Routes>
    </>
  );
}

export default App;
