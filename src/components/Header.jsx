import React, { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

const Header = () => {
  
  const data = useContext(DataContext);

  return (
    <div>Header {data.phone} </div>
  )
}

export default Header