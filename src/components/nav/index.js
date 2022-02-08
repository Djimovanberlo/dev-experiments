import { useNavigate } from 'react-router-dom'

import './style.css'

const Nav = () => {
  const navigate = useNavigate()
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'another', path: '/another' },
  ]

  return (
    <div className='nav flex flex-wrap bg-black text-white justify-around sticky top-0'>
      {navItems.map(item => (
        <button onClick={() => navigate(item.path)}>{item.name}</button>
      ))}
    </div>
  )
}

export default Nav
