import React from 'react';
import {Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.tsx'

function Root() {
  return (
    <div className="container mx-auto p-8 border-2"> 
     <Navbar/>
     <Outlet/>
    </div>
  );
}

export default Root;
