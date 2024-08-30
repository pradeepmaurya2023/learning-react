import React, {useContext} from 'react'

import UserContext from '../contexts/UserContext'


const AddUser = () => {
    const {user, setUser, changeUser} = useContext(UserContext);

    

    const handleChange = (e)=>{
      let property = e.target.name;
      let value = e.target.value;
        setUser({...user, [property]:value})
    }
  return (
    <>
    <input type='text' placeholder='Username' name='username' value={user.username} onChange={handleChange} className='bg-gray-500 h-8 border-2 border-black ' />
    <br />
    <input type='password' placeholder='Password' name='password' value={user.password} onChange={handleChange} className='bg-gray-500 h-8 border-2 border-black '/>

    <button type='button' onClick={changeUser}>Click Me</button>
    </>
  )
}

export default AddUser