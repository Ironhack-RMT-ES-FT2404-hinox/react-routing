import { Link } from "react-router-dom"



function Navbar() {
  return (
    <div>
      
      {/* <a href="/">Casa</a>
      <br />
      <a href="/contactos">Contactos</a> */}

      {/* En React NUNCA deberias usar anchor tags para navegación interna   */}

      <Link to="/">Casa</Link>
      <br />
      <Link to="/contactos">Contactos</Link>
      <br />
      <Link to="/location/sede-principal">Ubicación</Link>
      <br />
      <Link to="/my-profile">Ver tu perfil</Link>
      <br />
      <Link to="/all-users">Ver todos los usuarios</Link>

    </div>
  )
}

export default Navbar