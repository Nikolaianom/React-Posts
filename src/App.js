import React from "react";
import {Routes, Route  } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Ui/Navbar/Navbar";
import './styles/App.css'


function App() {
  return (
    <>
    <Navbar/>
      <AppRouter/>
    </>
  )
}

export default App;
