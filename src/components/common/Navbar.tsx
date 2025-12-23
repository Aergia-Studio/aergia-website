import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h1>Aergia Studio</h1>

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/games">Games</NavLink></li>
        <li><NavLink to="/animations">Animations</NavLink></li>
        <li><NavLink to="/studio">Studio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
