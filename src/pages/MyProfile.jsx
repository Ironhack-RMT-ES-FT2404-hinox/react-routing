import React from 'react'

function MyProfile(props) {
  console.log(props)
  return (
    <div>
      
      <h3>Aqui tienes tú perfil</h3>

      <h3>{props.userProfile.username}</h3>

      <p>Ciudad: {props.userProfile.city}</p>

    </div>
  )
}

export default MyProfile