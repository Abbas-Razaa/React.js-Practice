import React, { useContext } from 'react'
import { DataContext } from '../Context/UserContext';

const Footer = () => {
  const data = useContext(DataContext);

  return (
    <div className='bg-pink flex items-center justify-center'>
      Footer {data.email}
    </div>
  )
}

export default Footer