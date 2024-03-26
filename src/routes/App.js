import logo from '../assets/statics/logo.svg';
import '../assets/css/App.css';
import React from 'react';
import Layout from '../components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Estacionamiento from '../containers/Estacionamiento';
import NewEstacionamiento from '../containers/NewEstacionamiento';

function App() {
  return <BrowserRouter>
  
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/estacionamiento' element={<Estacionamiento />}></Route>
        <Route exact path='/newestacionamiento' element={<NewEstacionamiento />}></Route>
        {/* <Route exact path='/Conocenos' element={<Conocenos />}></Route> */}
        {/* <Route exact path='/jpaginas' element={<Jpaginas />}></Route> */}
        {/* <Route exact path='/dominiosventa' element={<Dominiosventa/>}></Route> */}
      </Routes>
    </Layout>
  </BrowserRouter>;
}

export default App;
