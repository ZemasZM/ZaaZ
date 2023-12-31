import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import NotFound from '../Pages/NotFound/NotFound';
function Rota(props) {
    return (

        <Router>
            <Routes>
                <Route path='/ZaaZ' element={<Login/>}/>
                {localStorage.getItem('Logado') == 1? <Route path='/ZaaZ/Home' element={<Home/>}/> : '' }
                {localStorage.getItem('Logado') == 2? <Route path='/ZaaZ/Deslogado' element={<NotFound/>}/>:''}
            </Routes>
        </Router>
    );
}

export default Rota;
