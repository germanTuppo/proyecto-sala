import React from 'react';
import CardWidget from '../CardWidget/CardWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="index.html">Estudios Berlín</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        {/* El active me gustaria que sea automático*/}
                        <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                        </a>
                        {/* Aca yo quisiera que automáticamente se lean categorias desde un JSON o una Db */}
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="index.html">Sala de ensayo</a></li>
                            <li><a className="dropdown-item" href="index.html">Grabaciones</a></li>
                            <li><a className="dropdown-item" href="index.html">Clases</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                         
                    </li>
                </ul>
                
                <CardWidget />
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;