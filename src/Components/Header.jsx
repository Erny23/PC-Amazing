import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
//import { useState } from "react"
import productos from '../Data/productos.json'

const productosJson = productos;
const categoriasList = new Set();

productosJson.forEach((productosList) => {
    categoriasList.add(productosList.categoria);
});

const categorias = [...categoriasList];

const Header = () => {

  return (
    <>
        <header>
            <section>
                <nav className="navbar navbar-expand-lg" data-bs-theme='dark' style={{background:'#05152F'}}>
                    <div className="container-fluid">
                        <Link to={'/PC-Amazing'} className="navbar-brand" href="#">
                            <img src="Logo PC Amazing.png" alt="Logo" style={{width:'230px'}}/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-underline me-auto ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={'/PC-Amazing'} className="nav-link" aria-current='page' href="#">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/PC-Amazing/Productos'} className="nav-link" href="#">Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/PC-Amazing/Servicios'} className="nav-link" href="#">Servicios</Link>
                                </li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        Categorias
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {categorias.map((categoria) => (
                                            <Dropdown.Item href="#" key={categoria.id}>{categoria}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <li className="nav-item">
                                    <Link to={'/PC-Amazing/Contactos'} className="nav-link" href="#">Contactos</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" id="buscador">
                                <input className="form-control me-2" data-bs-theme='light' type="search" placeholder="Buscar"/>
                                <button className="btn" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    </>
  )
}

export default Header