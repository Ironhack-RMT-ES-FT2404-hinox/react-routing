import "./App.css";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import MyProfile from "./pages/MyProfile";
import { useState } from "react";
import AllUsers from "./pages/AllUsers";
import UserDetails from "./pages/UserDetails";

//* cuando usamos react-router-dom App.jsx pasa aser nuestro organizador de paginas
function App() {

  const [ userProfile, setUserProfile ] = useState( {
    username: "jorge",
    city: "barcelona",
    id: 1234
  } )

  return (
    <>

      <Navbar />

      <Routes>

        {/* Aqui estaran organizados todos los accesos a diferentes URLs de mi pagina */}

        <Route path="/" element={<Home />} />
        <Route path="/contactos" element={<Contacts />} />
        <Route path="/location/sede-principal" element={<Location />} />
        <Route path="/my-profile" element={ <MyProfile userProfile={userProfile}/> } />
        <Route path="/all-users" element={ <AllUsers /> } />
        <Route path="/user-details/:userId" element={ <UserDetails /> } />
        {/* con :username le indicamos a la ruta que en esa sección del URL puedo recibir cualquier valor */}

        {/* gestion de errores de navegación */}
        <Route path="*" element={<NotFound />} />
        {/* Asterisco indica, cualquier valor posible */}

      </Routes>

    </>
  );
}

export default App;
