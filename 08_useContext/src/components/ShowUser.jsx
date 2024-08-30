import React, {useContext} from 'react'

import UserContext from '../contexts/UserContext'

const ShowUser = () => {
    const {user, showData} = useContext(UserContext);
    showData()
  return (
    <div>
        <p>Your Username is :{user.username}</p> 
        <p>Your Password is :{user.password}</p> 
    </div>
  )
}

export default ShowUser