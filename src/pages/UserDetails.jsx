import usersJSON from "../data/users.json";

import { useParams } from "react-router-dom";
// useParams es un hook que nos permite anclarnos y usar los parametros dinamicos de una ruta (URL)

function UserDetails() {
  const parametrosDinamicos = useParams();
  console.log(parametrosDinamicos);
  console.log(usersJSON);

  const foundUser = usersJSON.find((eachUser) => {
    if (Number(eachUser.id) === Number(parametrosDinamicos.userId)) {
      return true; // si lo encuentra, devuelvelo a foundUser
    } else {
      return false; // si no lo encuentra, sigue buscando...
    }
  });
  // el metodo de array .find funciona igual que el .filter, la unica diferencia es que busca el primer elemento que cumpla la condicion.

  console.log(foundUser);

  return (
    <div>
      <h3>Viendo los detalles de un usuario</h3>

      {foundUser === undefined ? (
        <p>No hay usuarios con es información :(</p>
      ) : (
        <div>
          <h4>{foundUser.username}</h4>
          <p>Ciudad: {foundUser.city}</p>
          <p>ID: {foundUser.id}</p>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
