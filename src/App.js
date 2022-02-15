import { HashRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/nav'
import Home from './components/home'
import RainbowScroll from './components/rainbow-scroll'
import HorizontalScroll from './components/horizonal-scroll'

const App = () => {
  return (
    <div className='app'>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rainbow-scroll' element={<RainbowScroll />} />
          <Route path='/horizontal-scroll' element={<HorizontalScroll />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
