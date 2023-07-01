import React from 'react';
import './Navbar.css'
function Navbar(props) {
    return (
        <div>
            <div class="container-lg">
                <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="#" class="nav-link " aria-current="page">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link " aria-current="page">Clientes Inativos</a></li>
                </ul>
                </header>
            </div>
        </div>
    );
}

export default Navbar;