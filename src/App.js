// import {  } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/nav'
import Home from './components/home'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
