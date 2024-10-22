import React from 'react'
import NavPart2 from './NavPart2'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-emerald-950 flex items-center justify-between px-10 py-5">
        <h2 className="text-2xl">Abbas</h2>
      </nav>
      <NavPart2 />
    </div>
  )
}

export default Navbar