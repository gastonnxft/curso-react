import { NavLink } from "react-router-dom"

export const Navbar = () => 

<nav  className="navbar navbar-expand-lg navbar-light bg-light">
  <div  className="container-fluid">
    <NavLink  className="navbar-brand" to="/">Inicio</NavLink>
    <button  className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li  className="nav-item">
          <NavLink  className="nav-link" activeStyle={{
            color: 'gold',
            fontWeight:'bold'
          }} to="/mensaje">Mensaje</NavLink>
        </li>

        <li  className="nav-item">
          <NavLink  className="nav-link" activeStyle={{
            color: 'gold',
            fontWeight:'bold'
          }} to="/mensaje1/Mensaje Nro 1/green">Mensaje 1</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link" activeStyle={{
            color: 'gold',
            fontWeight:'bold'
          }} to="/mensaje2/Mensaje Nro 2/orangered">Mensaje 2</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link" activeStyle={{
            color: 'gold',
            fontWeight:'bold'
          }} to="/mensaje3/Mensaje Nro 3/blue">Mensaje 3</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>