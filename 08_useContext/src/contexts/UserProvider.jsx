import React, {useState} from 'react'
import UserContext from './UserContext'

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
      username : '',
      password : ''
    })

    const showData = () =>{
      console.log(user)
    }

    const changeUser = () =>{
      setUser({username : '',
        password : ''})
    };

  return (
    <UserContext.Provider value={{user, setUser, showData, changeUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider