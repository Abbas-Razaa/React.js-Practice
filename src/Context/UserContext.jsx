import React, { createContext } from 'react'

export const DataContext = createContext();

const UserContext = ({children}) => {

  const user = {
    name: 'Abbas Raza',
    email: 'abbas@gmail.com',
    phone: '1234567890'
  }

  return (
    <div>
      <DataContext.Provider value={user}>
        {children}
      </DataContext.Provider>
    </div>
  )
}

export default UserContext