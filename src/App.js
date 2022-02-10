// import {  } from 'react-dom'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/nav'
import Home from './components/home'
import RainbowScroll from './components/rainbow-scroll'

const App = () => {
  return (
    <div className='app'>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/rainbow-scroll' element={<RainbowScroll />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
