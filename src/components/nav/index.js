import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rainbow scroll', path: '/rainbow-scroll' },
  ]

  return (
    <div className='nav flex flex-wrap bg-black text-white justify-around sticky top-0 py-1.5'>
      {navItems.map(item => (
        <button onClick={() => navigate(item.path)}>
          <p>{item.name}</p>
        </button>
      ))}
    </div>
  )
}

export default Nav
