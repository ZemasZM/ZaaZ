import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'



function NotFound(props) {
    return (
        <div className='ConteudoTodo'>
            <h1>Deslogado!</h1>
            <p>Tempo limite atingido!</p>
            <p>Volte para a pagina de Login! <Link to='/ZaaZ'>Tela de Login</Link> </p>
        </div>
    );
}

export default NotFound;
