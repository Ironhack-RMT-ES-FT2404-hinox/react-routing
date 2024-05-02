

import usersJSON from "../data/users.json"
import { Link } from 'react-router-dom'
import { useSearchParams } from "react-router-dom"

function AllUsers() {

  const [ searchParams, setSearchParams ] = useSearchParams();
  const city = searchParams.get("city") // extraer este parametro de busqueda
  console.log(city)

  const handleCityChange = (event) => {
    console.log("cambiando ciudad para filtrar", event.target.value)

    // a setSearchParams, hay que pasar un objeto, porque podria tener multiples parametros de busqueda
    if (event.target.value === "") {
      setSearchParams() // remueve cualquier parametro de busqueda
    } else {
      setSearchParams( { city: event.target.value } )
    }
  }

  return (
    <div>
      
      <h3>Aqui todos los usuarios de la app</h3>

      <select onChange={ handleCityChange }>
        <option value="">Todos</option>
        <option value="bilbao">Bilbao</option>
        <option value="barcelona">Barcelona</option>
        <option value="oviedo">Oviedo</option>
        <option value="granada">Granada</option>
        <option value="casas viejas">Casas Viejas</option>
        <option value="alcalá de henares">Alcalá de Henares</option>
      </select>

      {usersJSON
      .filter((eachUser) => {
        if (city === null) {
          // no hay parametros de busqueda city
          return true
        } else {
          // si hay parametros de busqueda city, usa el valor para filtrar
          return eachUser.city === city
        }
      })
      .map((eachUser) => {
        return (
          // <p key={eachUser.id}>{eachUser.username}</p>
          <p key={eachUser.id}>
            <Link to={`/user-details/${eachUser.id}`}>{eachUser.username}</Link>
          </p>
        )
      })}

    </div>
  )
}

export default AllUsers