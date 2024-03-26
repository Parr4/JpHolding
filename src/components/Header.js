import React from 'react'
import { Link } from 'react-router-dom'
// import '../assets/css/Header.css'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function Header() {
    
  return (
    // <div>
    //     <header>
    //         <ul>
    //             <ul>
    //                 <p>IfLogoHere</p>
    //             </ul>
    //             <li>
    //                 <Link to="/">Inicio</Link>
    //             </li>
    //             <li>
    //                 <Link to="/Conocenos">Conocenos</Link>
    //             </li>
    //             <li>
    //                 <Link to="/jpaginas">Nuestros Sitios</Link>
    //             </li>
    //             <li>
    //                 <Link to="/dominiosventa">Dominios en venta</Link>
    //             </li>
    //         </ul>
    //     </header>
    // </div>
    <Navbar>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Hidden brand</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <ul className="navbar-nav me-right mb-2 mb-lg-0">
      <li className="nav-item">
        <Nav.Link href="/">Inicio</Nav.Link>
        </li>
        <li className="nav-item">
        <Nav.Link href="/conocenos">Nosotros</Nav.Link>
        </li>
        <li className="nav-item">
        <NavDropdown
                    title="Dominios En venta"
                    // id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="https://masitas.cl/">Masitas.cl</NavDropdown.Item>
                    <NavDropdown.Item href="https://microchips.cl/">Microchips.cl</NavDropdown.Item>
                    <NavDropdown.Item href="https://conectores.cl/">Conectores.cl</NavDropdown.Item>
                  </NavDropdown>
        </li>
        </ul>
      <form className="d-flex" role="search">
        
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</Navbar>

  )
}
