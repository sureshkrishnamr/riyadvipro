
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuopen, setMenuopen] = useState(false)
  return (
    <header className='navbar'>
      <div className='nav-container'>
        <Link to='/' className='logo'>RIYADVI</Link>
        <nav className={`nav-menu ${menuopen ? "active": ""}`}>
          <Link to='/' onClick={()=> setMenuopen(false)}>Home</Link>
          <Link to='/services' onClick={()=> setMenuopen(false)}>Services</Link>
          <Link to='/portfolio' onClick={()=> setMenuopen(false)}>Portfolio</Link>
          <Link to='/about' onClick={()=> setMenuopen(false)}>About</Link>
          <Link to='/contact' onClick={()=> setMenuopen(false)}>Contact</Link>
          <Link to="/healthcheckup" onClick={()=> setMenuopen(false)}>Health Checkup</Link>
        </nav>
        <Link to='/contact' className='nav-button'>Let's Talk</Link>
        <button className='menu-button' onClick={() => setMenuopen(!menuopen)}>&#9776;</button>
      </div>
    </header>
  )
}

export default Navbar